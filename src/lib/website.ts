import { estimatorConfig } from "./estimator-config";
import { createWebsiteScope } from "./website-scope";

export function initializeWebsite(root: HTMLElement) {
  const { $, $$, listen, observe, cleanup } = createWebsiteScope(root);
  document.documentElement.classList.add("js");
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const scrollBehavior = reduceMotion ? "auto" : "smooth";

  // ------------------------------------------------------------------ header

  function initHeader() {
    const header = $("#site-header");
    const toggle = $(".menu-toggle");
    const menu = $("#mobile-menu");
    if (!header) {
      return;
    }

    const onScroll = () =>
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    listen(window, "scroll", onScroll, { passive: true });

    if (!toggle || !menu) {
      return;
    }
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      menu.hidden = !open;
    };
    setOpen(false);
    listen(toggle, "click", () => setOpen(menu.hidden));
    listen(menu, "click", (event) => {
      if (!(event.target instanceof HTMLElement)) return;
      if (event.target.closest("a")) {
        setOpen(false);
      }
    });
    listen(document, "keydown", (event) => {
      if (!(event.target instanceof HTMLElement)) return;
      if (event.key === "Escape" && !menu.hidden) {
        setOpen(false);
        toggle.focus();
      }
    });
    const wide = window.matchMedia("(min-width: 1081px)");
    const closeWhenWide = () => {
      if (wide.matches) {
        setOpen(false);
      }
    };
    listen(wide, "change", closeWhenWide);
  }

  // ------------------------------------------------------------------ reveal

  function initReveal() {
    const items = $$("[data-reveal]");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = observe(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
  }

  // -------------------------------------------------------------------- tabs

  // Each [data-tabs] block holds buttons with role="tab"; aria-controls names the panel each one opens.
  function initTabs(root) {
    const tabs = $$('[role="tab"]', root);
    const panels = tabs.map((tab) =>
      document.getElementById(tab.getAttribute("aria-controls")),
    );
    if (!tabs.length || panels.some((panel) => !panel)) {
      return;
    }

    function select(index, focus) {
      tabs.forEach((tab, i) => {
        const selected = i === index;
        tab.setAttribute("aria-selected", String(selected));
        tab.tabIndex = selected ? 0 : -1;
        panels[i].hidden = !selected;
      });
      const tab = tabs[index];
      if (focus) {
        tab.focus({ preventScroll: true });
      }
      // On phones the tabs scroll sideways: keep the chosen one in view.
      const strip = tab.parentElement;
      if (strip.scrollWidth > strip.clientWidth + 1) {
        const left = tab.offsetLeft - (strip.clientWidth - tab.offsetWidth) / 2;
        strip.scrollTo({ left: Math.max(0, left), behavior: scrollBehavior });
      }
    }

    tabs.forEach((tab, i) => {
      listen(tab, "click", () => select(i, false));
      listen(tab, "keydown", (event) => {
        if (!(event.target instanceof HTMLElement)) return;
        const last = tabs.length - 1;
        const moves = {
          ArrowRight: i === last ? 0 : i + 1,
          ArrowDown: i === last ? 0 : i + 1,
          ArrowLeft: i === 0 ? last : i - 1,
          ArrowUp: i === 0 ? last : i - 1,
          Home: 0,
          End: last,
        };
        if (event.key in moves) {
          event.preventDefault();
          select(moves[event.key], true);
        }
      });
    });
  }

  // --------------------------------------------------------- start here form

  function initJourneyForm() {
    const form = $<HTMLFormElement>("#journey-form");
    const card = $("#welcome-card");
    if (!form || !card) {
      return;
    }
    const section = $("#start-journey");
    const steps = $$(".jf-step", form);
    const progress = $$(".jf-progress li", form);
    const estimateField = form.querySelector<HTMLInputElement>(
      'input[name="timeline_estimate"]',
    );
    const attached = $("#estimate-attached");
    const whatsapp = $<HTMLAnchorElement>("#wc-whatsapp");
    const timelineLink = $("#wc-timeline");

    const checked = (name) =>
      form.querySelector<HTMLInputElement>(`input[name="${name}"]:checked`);
    const allChecked = (name) =>
      $$<HTMLInputElement>(`input[name="${name}"]:checked`, form);
    const value = (name: string) => {
      const field = form.elements.namedItem(name);
      return field instanceof HTMLInputElement ||
        field instanceof HTMLTextAreaElement
        ? field.value.trim()
        : "";
    };

    function bringIntoView(element) {
      const top = element.getBoundingClientRect().top;
      if (top < 80 || top > window.innerHeight * 0.6) {
        window.scrollTo({
          top: window.scrollY + top - 96,
          behavior: scrollBehavior,
        });
      }
    }

    function showError(step, message) {
      const box = $(".jf-error", step);
      box.textContent = message;
      box.hidden = !message;
    }

    function showStep(index, moveFocus) {
      steps.forEach((step, i) => {
        step.hidden = i !== index;
        showError(step, "");
      });
      progress.forEach((item, i) => {
        item.classList.toggle("is-active", i === index);
        item.classList.toggle("is-done", i < index);
      });
      if (moveFocus) {
        bringIntoView(form);
        const first = $<HTMLInputElement | HTMLTextAreaElement>(
          "input:not([type=hidden]), textarea",
          steps[index],
        );
        if (first) {
          first.focus({ preventScroll: true });
        }
      }
    }

    // Returns an error message, or "" when the step is complete.
    function problemWith(index) {
      if (index === 0 && !checked("why") && !value("why_words")) {
        return "Pick the one that fits best, or say it in your own words.";
      }
      if (index === 1 && !checked("restart")) {
        return "Pick the closest answer to the second question. There’s no wrong one.";
      }
      if (index === 2 && !value("first_name")) {
        return "Add your first name, so your coach knows what to call you.";
      }
      return "";
    }

    function tryAdvance(index) {
      const problem = problemWith(index);
      showError(steps[index], problem);
      const name = form.querySelector<HTMLInputElement>('[name="first_name"]');
      if (index === 2 && name) {
        name.setAttribute("aria-invalid", String(Boolean(problem)));
        if (problem) {
          name.focus();
        }
      }
      return !problem;
    }

    function whyText() {
      const words = value("why_words");
      const choice = checked("why");
      if (words) {
        return `“${words}”`;
      }
      return choice ? choice.value : "";
    }

    function focusAreas() {
      const areas: { focus: string; text: string }[] = [];
      allChecked("barrier").forEach((box) => {
        const focus = box.getAttribute("data-focus");
        if (focus && !areas.some((area) => area.focus === focus)) {
          areas.push({
            focus,
            text: box.getAttribute("data-focus-text") || "",
          });
        }
      });
      if (!areas.length) {
        areas.push({
          focus: "My Story",
          text: "Getting to know what matters to you, and why now.",
        });
      }
      return areas;
    }

    function whatsappNumber() {
      const config = estimatorConfig;
      const number =
        config && config.settings
          ? String(config.settings.whatsappNumber || "")
          : "";
      return number.replace(/\D/g, "");
    }

    function whatsappText(name) {
      const lines = [
        `Hi CERTAIN! I’m ${name}${value("city") ? ` from ${value("city")}` : ""}. I’d like to meet my CERTAIN coach.`,
      ];
      const why = whyText();
      if (why) {
        lines.push(`My WHY: ${why}`);
      }
      const barriers = allChecked("barrier").map((box) => box.value);
      if (barriers.length) {
        lines.push(`What usually gets in the way: ${barriers.join(", ")}`);
      }
      const restart = checked("restart");
      if (restart) {
        lines.push(`When I lose my routine: ${restart.value}`);
      }
      const time = checked("talk_time");
      if (time) {
        lines.push(`Best time to talk: ${time.value}`);
      }
      if (estimateField && estimateField.value) {
        lines.push(`My timeline estimate: ${estimateField.value}`);
      }
      return lines.join("\n");
    }

    function fill(key, text) {
      const target = card.querySelector(`[data-fill="${key}"]`);
      if (target) {
        target.textContent = text;
      }
      return target;
    }

    function renderEstimate() {
      const estimate = estimateField ? estimateField.value : "";
      fill("estimate", estimate);
      const block = card.querySelector('[data-show="estimate"]');
      if (block) {
        block.classList.toggle("hidden", !estimate);
      }
      if (attached) {
        attached.textContent = estimate
          ? `Your timeline estimate is included: ${estimate}.`
          : "";
        attached.classList.toggle("hidden", !estimate);
      }
      // No estimate yet: offer the quiz as the next step.
      if (timelineLink) {
        timelineLink.classList.toggle("hidden", Boolean(estimate));
      }
    }

    function showWelcome() {
      const name = value("first_name");
      fill("name", name);
      fill("why", whyText());
      const list = fill("focus", "");
      focusAreas().forEach((area) => {
        const item = document.createElement("li");
        const title = document.createElement("b");
        title.textContent = area.focus;
        item.append(title, area.text);
        list.appendChild(item);
      });
      const restart = checked("restart");
      fill("restart", restart ? restart.getAttribute("data-reply") || "" : "");
      renderEstimate();

      const number = whatsappNumber();
      if (whatsapp) {
        whatsapp.classList.toggle("hidden", !number);
        if (number) {
          whatsapp.href = `https://wa.me/${number}?text=${encodeURIComponent(whatsappText(name))}`;
        }
      }

      form.classList.add("hidden");
      card.classList.remove("hidden");
      bringIntoView(card);
      card.focus({ preventScroll: true });
    }

    listen(form, "click", (event) => {
      if (!(event.target instanceof HTMLElement)) return;
      const next = event.target.closest("[data-next]");
      const back = event.target.closest("[data-back]");
      const index = steps.findIndex((step) => !step.hidden);
      if (next && tryAdvance(index)) {
        showStep(index + 1, true);
      } else if (back && index > 0) {
        showStep(index - 1, true);
      }
    });

    // Answering clears that step's message. This runs as people type or tick, not on blur:
    // clearing it on blur would move the button out from under the pointer mid-click.
    listen(form, "input", () => {
      const step = steps.find((item) => !item.hidden);
      if (!step) {
        return;
      }
      const index = steps.indexOf(step);
      if (!$(".jf-error", step).hidden && !problemWith(index)) {
        showError(step, "");
      }
      const name = form.querySelector<HTMLInputElement>('[name="first_name"]');
      if (
        name &&
        name.getAttribute("aria-invalid") === "true" &&
        value("first_name")
      ) {
        name.setAttribute("aria-invalid", "false");
      }
    });

    // Enter in a text box moves on instead of jumping to the end.
    listen(form, "keydown", (event) => {
      if (!(event.target instanceof HTMLElement)) return;
      if (event.key !== "Enter" || event.target.tagName !== "INPUT") {
        return;
      }
      const index = steps.findIndex((step) => !step.hidden);
      if (index < steps.length - 1) {
        event.preventDefault();
        if (tryAdvance(index)) {
          showStep(index + 1, true);
        }
      }
    });

    listen(form, "submit", (event) => {
      if (!(event.target instanceof HTMLElement)) return;
      event.preventDefault();
      for (let i = 0; i < steps.length; i += 1) {
        if (problemWith(i)) {
          showStep(i, true);
          tryAdvance(i);
          return;
        }
      }
      showWelcome();
    });

    const edit = $("#wc-edit");
    if (edit) {
      listen(edit, "click", () => {
        card.classList.add("hidden");
        form.classList.remove("hidden");
        showStep(0, true);
      });
    }

    if (estimateField && estimateField.value) {
      renderEstimate();
    }
    if (section) {
      showStep(0, false);
    }
  }

  // ------------------------------------------------- mobile call to action

  // Appears once the hero is scrolled past; steps aside near the quiz, the form, the closing band and the footer.
  function initStickyCta() {
    const bar = $("#sticky-cta");
    const hero = $(".hero");
    if (!bar || !("IntersectionObserver" in window)) {
      return;
    }
    let pastHero = !hero;
    const nearby = new Set<Element>();
    const update = () =>
      bar.classList.toggle("is-visible", pastHero && nearby.size === 0);

    if (hero) {
      observe(([entry]) => {
        pastHero = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        update();
      }).observe(hero);
    }

    const observer = observe((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          nearby.add(entry.target);
        } else {
          nearby.delete(entry.target);
        }
      });
      update();
    });
    [
      "#timeline-estimator",
      "#start-journey",
      ".closing",
      ".founder-mission",
      ".site-footer",
    ].forEach((selector) => {
      const element = $(selector);
      if (element) {
        observer.observe(element);
      }
    });
    update();
  }

  function start() {
    initHeader();
    initReveal();
    $$("[data-tabs]").forEach(initTabs);
    initJourneyForm();
    initStickyCta();
    $$("[data-year]").forEach((element) => {
      element.textContent = String(new Date().getFullYear());
    });
  }

  start();
  return () => {
    cleanup();
    document.documentElement.classList.remove("js");
  };
}

export function createWebsiteScope(root: HTMLElement) {
  const controller = new AbortController();
  const observers: IntersectionObserver[] = [];

  function $<T extends HTMLElement = HTMLElement>(
    selector: string,
    parent: ParentNode = root,
  ) {
    return parent.querySelector<T>(selector);
  }

  function $$<T extends HTMLElement = HTMLElement>(
    selector: string,
    parent: ParentNode = root,
  ) {
    return Array.from(parent.querySelectorAll<T>(selector));
  }

  function listen<K extends keyof GlobalEventHandlersEventMap>(
    target: EventTarget,
    type: K,
    handler: (event: GlobalEventHandlersEventMap[K]) => void,
    options: AddEventListenerOptions = {},
  ) {
    target.addEventListener(type, handler as EventListener, {
      ...options,
      signal: controller.signal,
    });
  }

  function observe(
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit,
  ) {
    const observer = new IntersectionObserver(callback, options);
    observers.push(observer);
    return observer;
  }

  return {
    $,
    $$,
    listen,
    observe,
    cleanup() {
      controller.abort();
      observers.forEach((observer) => observer.disconnect());
    },
  };
}

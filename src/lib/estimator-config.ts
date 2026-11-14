import type { EstimatorQuestion } from "./estimator-types";

const configuration = {
  settings: {
    // WhatsApp number with country code, digits only (e.g. "919800000000").
    // Used by the quiz's call to action AND the "Say hello on WhatsApp" button on the
    // journey form. Leave empty and the quiz hands its estimate to that form,
    // which then sends nothing anywhere (no WhatsApp button is shown).
    whatsappNumber: "",
    // Short-term horizon, in weeks, for the first result stat and the shaded band on the chart
    // (13 weeks is about 3 months; the text shows it in months). It is not a programme length:
    // the website states no programme length.
    programWeeks: 13,
    // Steady weekly loss as a share of current body weight, chosen by current BMI.
    baseRateByBmi: [
      { minBmi: 35, rate: 0.009 },
      { minBmi: 30, rate: 0.008 },
      { minBmi: 25, rate: 0.007 },
      { minBmi: 23, rate: 0.0055 },
      { minBmi: 0, rate: 0.0045 },
    ],
    // Safety ceiling: never project more than 1% of body weight a week.
    maxWeeklyRate: 0.01,
    // The slower end of every range assumes 85% of the steady pace.
    relaxedPace: 0.85,
    // true: the estimate assumes each lifestyle answer improves to its `better` habit with the
    // coach's support (shown under "How CERTAIN gets you there"). false: use answers as given.
    includePartnerHabits: true,
    // Loss slows as more weight comes off (metabolic adaptation and plateaus).
    slowdownByShareLost: [
      { minShare: 0.2, factor: 0.7 },
      { minShare: 0.1, factor: 0.85 },
      { minShare: 0, factor: 1 },
    ],
    // During a Phase 1 reset, loss continues at half the steady pace.
    resetPace: 0.5,
    ageFactors: [
      { minAge: 65, factor: 0.88 },
      { minAge: 50, factor: 0.92 },
      { minAge: 35, factor: 0.96 },
      { minAge: 0, factor: 1 },
    ],
    // Non-lifestyle answers together never slow the pace by more than 30%;
    // lifestyle answers stack on top, and everything together by at most 50%.
    profileMin: 0.7,
    multiplierMin: 0.5,
    multiplierMax: 1.3,
    // When the full goal is more than this many weeks away, lead with the first 10%.
    longGoalWeeks: 52,
    firstWinKg: 2,
    healthMilestoneShare: 0.05,
    // People under minAge, or with a current or goal BMI under minBmi, see text.gateTitle.
    minAge: 18,
    minBmi: 18.5,
    maxSimWeeks: 520,
  },

  steps: [
    { id: "goal", label: "Goal", title: "Where are you now?" },
    { id: "lifestyle", label: "Lifestyle", title: "What’s your week like?" },
    { id: "health", label: "Health", title: "Quick health check" },
  ],

  // Always listed under "How CERTAIN gets you there", after the person's own focus habits.
  support: [
    {
      title: "Check-ins with Akshat",
      text: "Daily for your first 14 days, then weekly video calls, guided by your journal.",
    },
    {
      title: "WhatsApp support",
      text: "Message me 9 AM–9 PM IST every day, including weekends.",
    },
    {
      title: "Return to Rhythm",
      text: "A gentle, planned way back after holidays, festivals and busy weeks. No starting over.",
    },
  ],

  // Encouraging messages at the bottom of each step. They update as people answer.
  // Keep them encouraging but general: no promises about exact results.
  messages: {
    // Goal step: picked by the share of body weight to lose ("under" is a percentage).
    goal: [
      {
        under: 5,
        icon: "🎯",
        text: "Goal: lose {weight} · {pct}% of your body weight. A quick win, and a great first step.",
      },
      {
        under: 10,
        icon: "🎯",
        text: "Goal: lose {weight} · {pct}% of your body weight. Very doable with the right support.",
      },
      {
        under: 20,
        icon: "🎯",
        text: "Goal: lose {weight} · {pct}% of your body weight. Ambitious, and very achievable one milestone at a time.",
      },
      {
        under: 101,
        icon: "🎯",
        text: "Goal: lose {weight} · {pct}% of your body weight. A big goal, so we'll break it into milestones you can celebrate.",
      },
    ],
    // Lifestyle step: {habits} lists the `focus` of each answer that has a better habit.
    lifestylePartner: {
      icon: "🤝",
      text: "I’ll help with {habits}. That support is built into your CERTAIN timeline.",
    },
    lifestyleStrong: {
      icon: "🌟",
      text: "Your habits are already a strong foundation. That’s a real head start.",
    },
    // Health step: a reset phase first, otherwise conditions to plan around, otherwise all clear.
    healthReset: {
      icon: "🧭",
      text: "First up: {reset}, then steady fat loss at a pace that suits you.",
    },
    healthPlanned: {
      icon: "🩺",
      text: "We’ll plan around {items}, alongside any advice from your doctor.",
    },
    healthClear: {
      icon: "🎉",
      text: "No health hurdles. You’re ready to see your timeline!",
    },
  },

  text: {
    next: "Next",
    seeResult: "See my timeline",
    back: "Back",
    fieldError: "Enter your {label} ({min}–{max} {unit}).",
    goalAboveCurrent:
      "Your goal weight should be lower than your current weight.",
    gateTitle:
      "Please consult your physician before you enrol for a weight loss program.",
    gateBody:
      "Thank you for answering honestly. Based on what you shared, your doctor is the right first step, so we can’t offer an estimate or a place on our programme right now.",
    gateEdit: "Edit my answers",
    resultKicker: "Your CERTAIN timeline",
    goalLead: "With CERTAIN, reach {weight} in",
    milestoneLead: "With CERTAIN, lose your first {weight} in",
    goalSub: "As early as {date} · steady pace, no crash diets",
    milestoneSub:
      "As early as {date} · full goal of {kg} kg in about {duration}",
    programStat: "in your first {months} months",
    programGoalStat: "within your first {months} months",
    programGoal: "Goal reached",
    paceStat: "a week to start",
    cta: "Talk to Akshat",
    edit: "Edit my answers",
    chartTitle: "Your journey with CERTAIN",
    chartBand: "First {months} months",
    chartNow: "Now",
    roadmapTitle: "Your roadmap",
    resetPhase: "Reset · {weeks}",
    resetPhaseText: "{items}, while habits start",
    lossPhase: "Steady fat loss",
    lossPhaseText:
      "~{pace} kg a week to start, adjusted weekly with Akshat",
    lockPhase: "Make it last",
    lockPhaseText:
      "Your own plan for keeping it going, long after coaching ends",
    supportTitle: "How CERTAIN gets you there",
    supportIntro: "Your timeline includes my support with:",
    supportIntroStrong:
      "Your habits are already strong. I’ll help keep them steady with:",
    plannedAround: "Planned around",
    milestoneFirst: "First {kg} kg down",
    milestoneHealth: "{pct}% down · a meaningful health milestone",
    milestoneHalf: "Halfway there",
    milestoneGoal: "Goal: {kg} kg",
    disclaimer:
      "An estimate based on published guidance on safe, steady weight loss (up to about 1% of body weight a week), assuming you build the habits above with my support. It isn’t medical advice or a guarantee, and individual results vary.",
    whatsappMessage:
      "Hi Akshat! I tried the timeline estimator on the CERTAIN website ({summary}). I'd like to work with you.",
  },

  questions: [
    // ------------------------------------------------------------- Goal
    {
      id: "body",
      step: "goal",
      type: "numbers",
      fields: [
        {
          name: "currentKg",
          label: "Current weight",
          unit: "kg",
          min: 30,
          max: 300,
          placeholder: "82",
          decimal: true,
          error: "Enter your current weight in kg (between 30 and 300).",
        },
        {
          name: "targetKg",
          label: "Goal weight",
          unit: "kg",
          min: 30,
          max: 300,
          placeholder: "70",
          decimal: true,
          error: "Enter your goal weight in kg (between 30 and 300).",
        },
        {
          name: "heightFt",
          group: "Height",
          label: "Height in feet",
          unit: "ft",
          min: 4,
          max: 7,
          placeholder: "5",
          error: "Enter your height in feet and inches, for example 5 ft 4 in.",
        },
        {
          name: "heightIn",
          group: "Height",
          label: "Height in inches",
          unit: "in",
          min: 0,
          max: 11,
          placeholder: "4",
          optional: true,
          error: "Enter your height in feet and inches, for example 5 ft 4 in.",
        },
        {
          name: "age",
          label: "Age",
          unit: "yrs",
          min: 10,
          max: 100,
          placeholder: "34",
          error: "Enter your age.",
        },
      ],
    },
    {
      id: "sex",
      step: "goal",
      type: "choice",
      label: "Sex",
      fill: true,
      error:
        "Choose female or male. Bodies typically lose weight at different speeds.",
      options: [
        { value: "female", label: "Female", factor: 0.93 },
        { value: "male", label: "Male" },
      ],
    },

    // -------------------------------------------------------- Lifestyle
    {
      id: "activity",
      step: "lifestyle",
      type: "choice",
      label: "Activity",
      fill: true,
      lifestyle: true,
      default: "light",
      options: [
        {
          value: "sedentary",
          label: "Mostly sitting",
          hint: "Desk job, under 5,000 steps a day",
          factor: 0.9,
          better: {
            to: "light",
            focus: "more movement",
            text: "Starting with a brisk daily walk, built around your schedule.",
          },
        },
        {
          value: "light",
          label: "Light",
          hint: "Some walking, 5,000–7,000 steps a day",
          better: {
            to: "moderate",
            focus: "strength training",
            text: "2–3 short sessions a week to help protect muscle while you lose fat.",
          },
        },
        {
          value: "moderate",
          label: "Active",
          hint: "Exercise 2–3 times a week",
          factor: 1.05,
        },
        {
          value: "very",
          label: "Very active",
          hint: "Exercise 4 or more times a week",
          factor: 1.1,
        },
      ],
    },
    {
      id: "sleep",
      step: "lifestyle",
      type: "choice",
      label: "Sleep a night",
      fill: true,
      lifestyle: true,
      default: "six_to_7",
      options: [
        {
          value: "under6",
          label: "Under 6 h",
          factor: 0.9,
          better: {
            to: "over7",
            focus: "better sleep",
            text: "A wind-down routine towards 7+ hours. Sleep is closely linked to appetite and energy.",
          },
        },
        {
          value: "six_to_7",
          label: "6–7 h",
          factor: 0.96,
          better: {
            to: "over7",
            focus: "better sleep",
            text: "A wind-down routine towards 7+ hours. Sleep is closely linked to appetite and energy.",
          },
        },
        { value: "over7", label: "7 h or more" },
      ],
    },
    {
      id: "stress",
      step: "lifestyle",
      type: "choice",
      label: "Feeling stressed",
      fill: true,
      lifestyle: true,
      default: "moderate",
      options: [
        { value: "low", label: "Rarely" },
        {
          value: "moderate",
          label: "Some days",
          factor: 0.97,
          better: {
            to: "low",
            focus: "calmer weeks",
            text: "Simple tools for stressful days, which can drive cravings.",
          },
        },
        {
          value: "high",
          label: "Most days",
          factor: 0.93,
          better: {
            to: "low",
            focus: "calmer weeks",
            text: "Simple tools for stressful days, which can drive cravings.",
          },
        },
      ],
    },
    {
      id: "alcohol",
      step: "lifestyle",
      type: "choice",
      label: "Alcohol a week",
      fill: true,
      lifestyle: true,
      default: "under3",
      options: [
        { value: "under3", label: "0–2 drinks" },
        {
          value: "three_to_7",
          label: "3–7 drinks",
          factor: 0.97,
          better: {
            to: "under3",
            focus: "lighter drinking",
            text: "Cutting back on the easy-to-miss calories in alcohol.",
          },
        },
        {
          value: "over7",
          label: "8 or more",
          factor: 0.93,
          better: {
            to: "under3",
            focus: "lighter drinking",
            text: "Cutting back on the easy-to-miss calories in alcohol.",
          },
        },
      ],
    },
    {
      id: "attempts",
      step: "lifestyle",
      type: "choice",
      label: "Tried losing weight before?",
      fill: true,
      default: "few",
      options: [
        { value: "first", label: "First time" },
        { value: "few", label: "1–2 times", factor: 0.98 },
        {
          value: "many",
          label: "3+ times",
          factor: 0.95,
          note: "Tried 3+ times before? CERTAIN is built to make this the last time you start over.",
        },
      ],
    },

    // ----------------------------------------------------------- Health
    {
      id: "lifeStage",
      step: "health",
      type: "choice",
      label: "Right now",
      showIf: { sex: "female" },
      default: "none",
      options: [
        { value: "none", label: "None of these" },
        { value: "pregnant", label: "Pregnant", gate: true },
        {
          value: "postpartum",
          label: "Baby under 2 months",
          prepWeeks: 6,
          prepLabel: "Postpartum recovery",
          maxKgPerWeek: 0.5,
          tag: "Recent baby",
        },
        {
          value: "breastfeeding",
          label: "Breastfeeding",
          maxKgPerWeek: 0.5,
          tag: "Breastfeeding",
        },
        {
          value: "menopause",
          label: "Menopause",
          factor: 0.92,
          tag: "Perimenopause / menopause",
        },
      ],
    },
    {
      id: "thyroid",
      step: "health",
      type: "choice",
      label: "Thyroid",
      fill: true,
      default: "none",
      options: [
        { value: "none", label: "No issue" },
        {
          value: "controlled",
          label: "Controlled",
          factor: 0.95,
          tag: "Thyroid (controlled)",
        },
        {
          value: "uncontrolled",
          label: "Not controlled yet",
          factor: 0.95,
          prepWeeks: 8,
          prepLabel: "Thyroid check-in with your doctor",
          tag: "Thyroid (not yet controlled)",
        },
      ],
    },
    {
      id: "bloodSugar",
      step: "health",
      type: "choice",
      label: "Blood sugar",
      fill: true,
      default: "normal",
      note: "Pick “Type 2 + insulin” if you take insulin or tablets like glimepiride or gliclazide.",
      options: [
        { value: "normal", label: "Normal" },
        {
          value: "prediabetes",
          label: "Prediabetes",
          factor: 0.9,
          tag: "Prediabetes / insulin resistance",
        },
        { value: "t2d", label: "Type 2", factor: 0.85, tag: "Type 2 diabetes" },
        {
          value: "t2d_meds",
          label: "Type 2 + insulin",
          factor: 0.85,
          prepWeeks: 3,
          prepLabel: "Diabetes medicine review with your doctor",
          tag: "Type 2 diabetes on insulin / sulfonylureas",
        },
      ],
    },
    {
      id: "conditions",
      step: "health",
      type: "multi",
      label: "Anything else?",
      sub: "Tick all that apply",
      options: [
        {
          value: "pcos",
          label: "PCOS / PCOD",
          sex: "female",
          factor: 0.88,
          tag: "PCOS / PCOD",
        },
        {
          value: "gut",
          label: "Gut issues (IBS, bloating, SIBO)",
          prepWeeks: 6,
          prepLabel: "Gut-comfort reset",
          tag: "Gut issues (IBS, bloating, SIBO)",
        },
        {
          value: "sleep_apnoea",
          label: "Sleep apnoea / snoring",
          factor: 0.92,
          tag: "Sleep apnoea / snoring",
        },
        {
          value: "mood",
          label: "Depression or anxiety",
          factor: 0.94,
          tag: "Depression or anxiety",
        },
        {
          value: "joints",
          label: "Joint pain / low mobility",
          factor: 0.94,
          tag: "Joint pain / low mobility",
        },
        {
          value: "heart_kidney",
          label: "Heart or kidney disease",
          prepWeeks: 3,
          prepLabel: "Your doctor's go-ahead for food and exercise changes",
          tag: "Heart or kidney disease",
        },
        {
          value: "binge",
          label: "Binge-eating disorder",
          prepWeeks: 12,
          prepLabel: "Specialist support for binge eating",
          tag: "Binge-eating disorder",
        },
        {
          value: "low_t",
          label: "Low testosterone",
          sex: "male",
          factor: 0.92,
          tag: "Low testosterone",
        },
        {
          value: "gain_meds",
          label: "Weight-gain medicines",
          hint: "e.g. steroids, some antidepressants, mood stabilisers, beta-blockers",
          factor: 0.9,
          tag: "Weight-gain medicines",
        },
        {
          value: "glp1",
          label: "Weight-loss medicine",
          hint: "e.g. Wegovy, Ozempic, Rybelsus, Mounjaro",
          factor: 1.15,
          tag: "Weight-loss medicine",
        },
      ],
    },
    {
      id: "safety",
      step: "health",
      type: "multi",
      box: "safety",
      label: "Safety check",
      sub: "Do any of these apply?",
      options: [
        {
          value: "eating_disorder",
          label: "Anorexia or bulimia (now or past)",
          gate: true,
        },
        { value: "cancer", label: "In cancer treatment", gate: true },
        {
          value: "cushings",
          label: "Untreated Cushing's syndrome",
          gate: true,
        },
        { value: "ibd_flare", label: "Crohn's or colitis flare", gate: true },
      ],
    },
  ] satisfies EstimatorQuestion[],
};

export const estimatorConfig: Omit<typeof configuration, "questions"> & {
  questions: EstimatorQuestion[];
} = configuration;

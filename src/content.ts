// All page copy, prices and links live in this file. Edit here, and the page updates.

export const site = {
  name: 'Ifeanyi Emmanuel',
  role: 'full-stack engineer',
  calendarUrl: 'https://calendar.app.google/HURrFXc5dp8MhMMg6',
  calendarLabel: 'calendar.app.google/HURrFXc5dp8MhMMg6',
  linkedinUrl: 'https://linkedin.com/in/ifeanyi-emmanuel',
  linkedinLabel: 'linkedin.com/in/ifeanyi-emmanuel',
  ctaLabel: 'Book a scoping call',
  title: 'Ifeanyi Emmanuel: fixed-price MVPs for non-technical founders',
  description:
    'Your idea, live in 4 weeks. I build MVPs for non-technical founders at a fixed scope and price, starting with a UI design in the first 2 days.',
};

export const hero = {
  titleLines: ['Your idea, live in 4 weeks.', 'Fixed scope, fixed price.'],
  intro:
    'I build MVPs for non-technical founders, so you never have to manage a developer. You see the UI design in 2 days, then get a working product, the code, and a date you can plan around.',
  secondaryLabel: 'See the packages',
  weeks: [
    { label: 'Week 1', text: 'UI design in 2 days, then your go-ahead', tone: 'cobalt' },
    { label: 'Week 2', text: 'Midpoint demo of the working product', tone: 'cobalt' },
    { label: 'Week 3', text: 'Features and payments finished', tone: 'cobalt' },
    { label: 'Week 4', text: 'Live on your domain', tone: 'signal' },
  ] as const,
};

export const proof = {
  title: 'My last build: a social platform for Hollywood creatives, live in 6 weeks.',
  note: 'Ask me about it on the scoping call.',
};

export const packages = {
  title: 'Two packages, both at a fixed price.',
  intro: 'Pick the size of the build. The scope is written down and agreed before any work starts.',
  items: [
    {
      name: 'Launch MVP',
      price: '$3,500',
      meta: 'fixed price, 4 weeks',
      forWho: 'For founders who want to test one core idea with real users, fast.',
      lead: null,
      dark: false,
      features: [
        'UI design of your main screens in the first 2 days, approved by you before the build starts',
        'Up to 3 core features or user flows, agreed in writing',
        'Email and Google sign-in, one user type, simple admin view',
        'Stripe payments on your own account',
        'Responsive web app for phones and desktops',
        'Live on your domain, with basic analytics',
        'Handoff documentation and a walkthrough call',
        '14 days of bug fixes after launch',
      ],
    },
    {
      name: 'Growth MVP',
      price: '$6,500',
      meta: 'fixed price, 8 weeks',
      forWho: 'For bigger products with several user types or integrations, built to grow.',
      lead: 'Everything in Launch MVP, plus:',
      dark: true,
      features: [
        'Up to 7 core features or user flows',
        'Multiple user roles, full admin dashboard',
        'Up to 2 integrations: email, calendar, maps or CRM',
        'Email notifications and file uploads',
        'Onboarding flow for new users',
        'Automated tests on the critical paths',
        'Architecture ready for more users',
        '30 days of bug fixes after launch',
      ],
    },
  ],
};

export const process = {
  title: 'How a 4-week build runs.',
  intro: 'You pay as you see progress. Three payments, each tied to something you can open and use.',
  steps: [
    { label: 'Before kickoff', text: 'A free scoping call, then a written scope and fixed quote.', tone: 'mist', payment: null },
    {
      label: 'Week 1',
      text: 'UI design in the first 2 days. After your go-ahead, the build starts.',
      tone: 'cobalt',
      payment: { share: '40%', caption: 'at kickoff, to reserve your build slot' },
    },
    {
      label: 'Week 2',
      text: 'Core features working. Midpoint demo and your feedback.',
      tone: 'cobalt',
      payment: { share: '30%', caption: 'at the midpoint demo' },
    },
    { label: 'Week 3', text: 'Remaining features, payments and integrations.', tone: 'cobalt', payment: null },
    {
      label: 'Week 4',
      text: 'Polish, testing, launch and handoff.',
      tone: 'signal',
      payment: { share: '30%', caption: 'at launch' },
    },
  ] as const,
  note: 'The 8-week package follows the same rhythm, with a demo every two weeks.',
};

export const boundaries = {
  title: 'No surprises on scope.',
  included: {
    title: 'Always included',
    items: [
      'UI designs in Figma, approved by you before any code is written',
      'You own the code and assets once the final payment is made',
      'Everything lives in your own accounts: domain, Stripe and hosting',
      'Handoff documentation and a walkthrough call',
      'Bug fixes after launch: 14 days on Launch, 30 days on Growth',
    ],
  },
  excluded: {
    title: 'Not included',
    items: [
      'Native iOS or Android apps. The web app works in mobile browsers.',
      'Custom brand design, logos and illustrations',
      'Content writing, marketing and ad management',
      'Third-party fees such as hosting, domain and Stripe',
      'Anything outside the agreed scope. New requests get a fixed quote before work begins.',
    ],
  },
};

export const finalCta = {
  title: 'Tell me the idea. I’ll tell you what ships first.',
  text: 'A free 20-minute scoping call. If we’re a fit, you get a written scope and a fixed quote within 24 hours.',
};

const blogPosts = [
  {
    slug: 'taming-hydration-mismatches',
    title: 'Taming Hydration Mismatches in React 19',
    date: 'June 17, 2024',
    summary:
      'A field guide for diagnosing hydration bugs, plus patterns for keeping server components honest.',
    content: [
      'Hydration mismatches are rarely random—they happen when markup rendered on the server diverges from what the client expects. In React 19 the new streaming defaults make this divergence more visible, so it is worth investing in guardrails.',
      'Start with determinism: avoid relying on browser-only APIs such as window or random values in render paths. When you do need them, gate the code behind useEffect or lazy boundaries. Next, log hydration warnings in development and fail builds on console errors—treat them like tests.',
      'Finally, design a steady-state checklist: confirm that data fetching stays pure, feature flags are identical on server and client, and user-specific markup is deferred until after hydration. With this discipline, mismatches become a rare exception instead of a debugging rabbit hole.',
    ],
  },
  {
    slug: 'css-variables-as-api',
    title: 'CSS Variables as an API Surface',
    date: 'April 8, 2024',
    summary:
      'Why treating tokens like public APIs keeps your design system flexible without death by cascade.',
    content: [
      'Design tokens often end up as a tangled web of JSON exports, Sass maps, and theme files. CSS variables give you a single, runtime-friendly API that components can rely on without importing tooling-specific helpers.',
      'Think of every variable as public contract. Document it, version it, and avoid breaking changes by layering tokens—for example, alias semantic tokens (button-background) to functional tokens (color-brand-600).',
      'When teams adopt this mindset, refactors feel closer to shipping a new API version: you deprecate, announce, and migrate with intention. The payoff is faster theming, dynamic modes, and a UI kit that handles change with grace.',
    ],
  },
  {
    slug: 'micro-interactions-without-motion-sickness',
    title: 'Micro-Interactions without Motion Sickness',
    date: 'January 22, 2024',
    summary:
      'Balancing delightful details with accessibility by leaning on reduced-motion hooks and semantic fallbacks.',
    content: [
      'Micro-interactions sell polish. The issue: motion-heavy UI can alienate users who experience vestibular discomfort. The fix is not to remove motion entirely, but to provide thoughtful fallbacks.',
      'Use the prefers-reduced-motion media query to swap out long transitions for instant state changes or subtle transforms. When motion is core to comprehension (e.g., reordering lists), add textual hints or outline animations that communicate state.',
      'By designing interactions with multiple sensory channels, you maintain delight for those who want it while respecting users who need calmer experiences.',
    ],
  },
  {
    slug: 'boring-frontend-stack-that-scales',
    title: 'The Boring Frontend Stack that Scales',
    date: 'November 2, 2023',
    summary:
      'How teams keep velocity by standardizing linting, testing, and release rituals before adding shiny tools.',
    content: [
      'Every scale-up faces the temptation to chase trending frameworks. The teams that win instead double down on consistency: shared ESLint configs, predictable folder structures, and automated previews for every pull request.',
      'Once the foundation is boring—in the best way—you can iterate faster because engineers spend less time deciphering conventions. This is when you selectively introduce new tools that solve real pain, not hypothetical ones.',
      'Stability becomes a competitive advantage: onboarding accelerates, incidents drop, and product teams have the confidence to ship ambitious features.',
    ],
  },
  {
    slug: 'when-to-use-web-workers',
    title: 'When to Reach for Web Workers',
    date: 'August 15, 2023',
    summary:
      'Profiling heuristics that signal it is time to offload work without turning your app into callback spaghetti.',
    content: [
      'Web Workers shine when main-thread work blocks input responsiveness. Before reaching for them, quantify the pain: capture performance profiles, look for long JavaScript tasks (50ms+), and verify that the heavy work is CPU-bound.',
      'If it is, move the pure computation into a worker module and communicate via structured cloning or transferable objects. Keep the API narrow, and pair it with an abortable controller so UI can cancel stale work.',
      'Workers are not a silver bullet, but when used surgically they unlock buttery-smooth UIs even under demanding workloads.',
    ],
  },
];

export default blogPosts;


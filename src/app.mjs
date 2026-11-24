// Tutto il testo della landing sta qui. "DA COMPLETARE" ferma la build.
export default {
  name: 'AgentNotch',
  url: 'https://agentnotch.mattbonfanti.com',
  platform: 'macOS · menu-bar app · open source',
  tagline: 'Know which agent needs you, without switching windows.',
  description:
    'AgentNotch turns the MacBook notch into a quiet indicator for your coding agents — Claude Code, Codex, OpenCode. At rest it shows nothing. When an agent is waiting on you, it turns amber.',
  requirements: 'macOS 13 or later. On a Mac without a notch, or on an external display, it becomes a floating pill at the top of the screen. MIT license.',
  download: { label: 'Build it from source', href: 'https://github.com/mattBonfanti/AgentNotch' },
  repo: 'https://github.com/mattBonfanti/AgentNotch',
  license: 'MIT license',
  og: '/og.png',
  screens: [
    { wide: true, src: '/screens/agentnotch-panel.png', w: 928, h: 462, alt: 'The expanded panel: a header with one working and three waiting counters above four session rows, each with project, running tool, status and token count.' },
    { wide: true, src: '/screens/agentnotch-island.png', w: 1000, h: 84, alt: 'The notch widened into a small island: one colored dot per agent on the left, a raised-hand glyph on the right.' },
    { wide: true, src: '/screens/agentnotch-line.png', w: 560, h: 86, alt: 'A thin line tracing the notch outline, split into four colored arcs, one per agent.' },
  ],
  install: [
    'Clone <a href="https://github.com/mattBonfanti/AgentNotch">the repository</a>.',
    'Build and run it with <code>./build.sh</code>, as the README explains.',
    'It needs no account and no setup: it finds the agents that are already writing on your Mac.',
  ],
  featuresTitle: 'What it does',
  features: [
    { title: 'One arc per agent', text: 'A thin line traces the notch and splits into one colored arc for each running agent. Hover to expand it into up to four session cards.' },
    { title: 'Amber means you', text: 'An agent waiting on a permission prompt turns amber and breathes for twenty seconds, then settles. A signal that never stops moving becomes wallpaper.' },
    { title: 'Your services too', text: 'An optional services section shows whether the services you list are up, degraded or down: HTTP, launchd, TCP or a command, re-read every 30 seconds.' },
    { title: 'Light by design', text: 'Native SwiftUI and AppKit, no third-party dependencies, no remote service. It reads the files your agents already write. 0.19% average CPU.' },
  ],
  sections: [
    {
      title: 'Designed against a method',
      intro: 'Every choice below is a constraint, not a taste: it comes from <a href="https://mattbonfanti.com/the-ux-decode/">The UX DeCode</a>, the 13-principle HCI framework I design with.',
      items: [
        { title: 'A metaphor you already know', text: 'It borrows the Dynamic Island from the iPhone instead of inventing a new one, so there is nothing to learn. <em>P4, match with mental models.</em>' },
        { title: 'Nothing at rest', text: 'When no agent needs you, the notch stays a notch. Session, branch, running tool and tokens appear only on hover. <em>P9, cognitive limits.</em>' },
        { title: 'Never color alone', text: 'Color tells you which agent; the glyph (terminal, pencil, raised hand) tells you what is happening. It still reads without relying on hue. <em>P1, accessibility.</em>' },
        { title: 'Standard Mac gestures', text: 'Click brings the agent’s app forward, ⌥-click opens the project in Finder. No gesture invented just for this app. <em>P3, platform conventions.</em>' },
      ],
    },
  ],
  related: { text: 'From the same maker: a menu-bar app that forecasts whether your battery will last the day, with a local time-series model.', label: 'Till Dusk', href: 'https://tilldusk.mattbonfanti.com' },
  caseStudy: { text: 'How it was designed, the three rewrites and what its own design framework says against it:', label: 'read the case study', href: 'https://mattbonfanti.com/shipped/agent-notch/' },
  privacy: [
    'AgentNotch has no account, no analytics and no server. Nothing is sent to me.',
    'It reads the session files that your coding agents already write on your Mac. Those files never leave your computer.',
    'The optional services section contacts only the addresses you write yourself in services.json.',
  ],
};

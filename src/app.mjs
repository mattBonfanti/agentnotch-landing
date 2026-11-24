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
  caseStudy: { text: 'How it was designed, the three rewrites and what its own design framework says against it:', label: 'read the case study', href: 'https://mattbonfanti.com/shipped/agent-notch/' },
  privacy: [
    'AgentNotch has no account, no analytics and no server. Nothing is sent to me.',
    'It reads the session files that your coding agents already write on your Mac. Those files never leave your computer.',
    'The optional services section contacts only the addresses you write yourself in services.json.',
  ],
};

import { motion } from 'framer-motion'
import { Github, Bot, Database, Terminal, Check } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const repos = [
  {
    icon: Bot,
    iconClass: 'bg-blue-500/10 text-blue-500',
    badgeClass: 'bg-blue-500/10 text-blue-500',
    badge: 'Trading Agent',
    name: 'noelclaw-agent',
    tagline: 'Autonomous Trading Agent — Base Chain',
    description:
      'Self-running agent that scans tokens, executes trades, monitors positions, and optimizes its own strategy — all without human intervention.',
    features: [
      'Auto-scan every 5 min via 6-component scoring model',
      'Position monitor with stop-loss, take-profit & trailing stops',
      '4-hour self-reflect cycle — adjusts config from trade history',
      'Telegram interface for alerts & CLI commands',
      'Free data: DexScreener, GeckoTerminal, CoinGecko',
    ],
    install: [
      'git clone github.com/noelclaw/noelclaw-agent',
      'npm install',
      'node agent.js init',
    ],
    tags: ['Node.js', 'MiniMax LLM', 'Uniswap v3', 'Base'],
    href: 'https://github.com/noelclaw/noelclaw-agent',
    language: 'JavaScript',
    langDot: 'bg-yellow-400',
  },
  {
    icon: Database,
    iconClass: 'bg-violet-500/10 text-violet-500',
    badgeClass: 'bg-violet-500/10 text-violet-500',
    badge: 'Memory Layer',
    name: 'noelvault',
    tagline: 'Persistent Memory & Artifact Storage for AI Agents',
    description:
      'Save research findings, execution logs, workflows, and versioned prompts across sessions — fully searchable, wallet-authenticated, and linkable.',
    features: [
      '6 entry types: research, execution, workflow, prompt, file, memory',
      'Git-style versioning with line-by-line diffs & commit messages',
      'Full-text search with substring fallback across all entries',
      'Typed entry links: references, derived_from, supersedes, continues',
      'Wallet-native auth — no passwords, signature-based access',
    ],
    install: [
      'supabase db push',
      'supabase functions deploy vault --no-verify-jwt',
      'export NOELVAULT_URL=<your-function-url>',
    ],
    tags: ['TypeScript', 'Supabase', 'PostgreSQL', 'MCP'],
    href: 'https://github.com/noelclaw/noelvault',
    language: 'TypeScript',
    langDot: 'bg-blue-500',
  },
]

export default function OpenSource() {
  return (
    <section id="open-source" className="relative bg-muted py-16 md:py-28 lg:py-40 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/[0.03] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative">
        <SectionHeader
          label="OPEN SOURCE"
          headline="Built in Public"
          description="Two core tools that power the NoelClaw ecosystem - free to fork, self-host, or extend."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 md:mt-16">
          {repos.map((repo, i) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-card border border-border rounded-2xl p-7 md:p-8 flex flex-col gap-5 hover:border-primary/30 hover:shadow-[0_12px_48px_rgba(37,99,235,0.06)] dark:hover:shadow-[0_12px_48px_rgba(37,99,235,0.10)] transition-all duration-500"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${repo.iconClass}`}>
                    <repo.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-foreground text-base">{repo.name}</h3>
                      <span className={`text-xs rounded-full px-2 py-0.5 ${repo.badgeClass}`}>
                        {repo.badge}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{repo.tagline}</p>
                  </div>
                </div>
                <a
                  href={repo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 p-2 rounded-lg border border-border hover:border-primary/40 hover:text-primary text-muted-foreground transition-colors duration-200"
                  aria-label={`View ${repo.name} on GitHub`}
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {repo.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {repo.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Install block */}
              <div className="bg-secondary border border-border rounded-xl p-4 font-mono text-xs space-y-1 overflow-x-auto">
                <div className="flex items-center gap-2 mb-2.5">
                  <Terminal className="w-3 h-3 text-muted-foreground/50 flex-shrink-0" />
                  <span className="text-muted-foreground/50 uppercase tracking-wider text-[10px]">Quick start</span>
                </div>
                {repo.install.map((line, idx) => (
                  <p key={idx} className="whitespace-nowrap text-foreground/80">
                    <span className="text-primary/50 select-none mr-2">$</span>
                    {line}
                  </p>
                ))}
              </div>

              {/* Tags + language */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {repo.tags.map(tag => (
                    <span key={tag} className="text-xs bg-background border border-border rounded-full px-2.5 py-0.5 text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className={`w-2.5 h-2.5 rounded-full ${repo.langDot}`} />
                  {repo.language}
                </div>
              </div>

              {/* GitHub CTA */}
              <a
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-border hover:border-primary/40 hover:text-primary text-sm font-medium text-muted-foreground transition-all duration-200 bg-background/50"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

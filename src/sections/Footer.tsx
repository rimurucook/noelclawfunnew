import { Link } from 'react-router'

const productLinks = [
  { label: 'OS Modules', href: '#capabilities' },
  { label: 'Agent Swarm', href: '#agent-swarm' },
  { label: 'Games', href: '#games' },
  { label: 'Pricing', href: '#x402' },
]

const resourceLinks = [
  { label: 'Documentation', href: 'https://docs.noelclaw.fun', external: true },
  { label: 'Open Source', href: '#open-source', external: false },
  { label: 'Status', href: '#', external: false },
]

const communityLinks = [
  { label: 'Twitter/X', href: 'https://x.com/noelclawfun', external: true },
  { label: 'Telegram', href: 'https://t.me/noelclaww', external: true },
  { label: 'DexScreener', href: 'https://dexscreener.com/base/0xfe4c720bc323b9eb57a2362bf3812eb698d54f9f940111dffb57c0a00b466ea5', external: true },
  { label: 'GitHub', href: 'https://github.com/rimurucook/noelclawfunnew', external: true },
]

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="border-t border-border" style={{ backgroundColor: 'hsl(var(--muted))' }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 pb-10 md:pt-24 md:pb-12">
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-10 md:gap-16 md:mb-16">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="NoelClaw" className="h-9 dark:brightness-0 dark:invert" />
              <span className="text-xl font-medium text-foreground">NoelClaw</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-3">Building AI Operating System</p>
          </div>

          <div className="flex flex-wrap gap-8 md:gap-12">
            <div>
              <h4 className="text-xs font-medium uppercase tracking-[0.05em] text-muted-foreground mb-4">Product</h4>
              <div className="space-y-3">
                {productLinks.map(link => (
                  <div key={link.label}>
                    {link.href.startsWith('#') ? (
                      <button onClick={() => handleNavClick(link.href)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link.label}
                      </button>
                    ) : (
                      <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-medium uppercase tracking-[0.05em] text-muted-foreground mb-4">Resources</h4>
              <div className="space-y-3">
                {resourceLinks.map(link => (
                  <div key={link.label}>
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link.label}
                      </a>
                    ) : link.href.startsWith('#') ? (
                      <button onClick={() => handleNavClick(link.href)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link.label}
                      </button>
                    ) : (
                      <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-medium uppercase tracking-[0.05em] text-muted-foreground mb-4">Community</h4>
              <div className="space-y-3">
                {communityLinks.map(link => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm text-muted-foreground/60">&copy; 2025 NoelClaw. All rights reserved.</span>
          <span className="font-mono text-xs text-muted-foreground/40 break-all text-center">CA: 0x4B524015D54a27d4472F5c59c570730D69499Ba3</span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-xs font-medium uppercase tracking-[0.05em] text-muted-foreground/60">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

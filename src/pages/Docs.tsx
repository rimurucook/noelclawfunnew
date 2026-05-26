import { useState } from 'react'
import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { Search, Check, Menu, X, ChevronRight } from 'lucide-react'
import CustomCursor from '../components/CustomCursor'
import ScrollToTop from '../components/ScrollToTop'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'

const sidebarGroups = [
  {
    title: 'Getting Started',
    links: ['Introduction', 'Quick Start', 'Installation', 'Configuration'],
  },
  {
    title: 'Core Concepts',
    links: ['Agents', 'Capabilities', 'Credits', 'Security'],
  },
  {
    title: 'API Reference',
    links: ['Authentication', 'Endpoints', 'Webhooks', 'Error Handling'],
  },
  {
    title: 'Advanced',
    links: ['Custom Skills', 'Rate Limits', 'Best Practices'],
  },
]

const tocItems = [
  'What is NoelClaw?',
  'Key Features',
  'Getting Started',
  'Architecture Overview',
  'Supported Chains',
]

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="relative bg-muted border border-border rounded-xl overflow-hidden my-6">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
      >
        {copied ? <Check size={16} /> : <span className="text-xs">Copy</span>}
      </button>
      <pre className="p-5 overflow-x-auto font-mono text-sm text-foreground leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  )
}


export default function Docs() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('Introduction')

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-8 pb-20">
        <div className="flex gap-0">
          {/* Mobile toggle */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden fixed left-4 top-[88px] z-40 w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground"
          >
            <Menu size={20} />
          </button>

          {/* Sidebar */}
          <aside
            className={`fixed lg:sticky top-0 lg:top-[88px] left-0 h-screen lg:h-[calc(100vh-88px)] w-[280px] bg-background lg:bg-transparent border-r border-white/[0.06] z-50 lg:z-auto overflow-y-auto transition-transform duration-300 ${
              sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
            }`}
          >
            <div className="p-6 lg:p-0 lg:pr-6">
              <div className="flex items-center justify-between lg:hidden mb-6">
                <span className="text-lg font-medium text-foreground">Documentation</span>
                <button onClick={() => setSidebarOpen(false)} className="text-muted-foreground">
                  <X size={24} />
                </button>
              </div>

              <div className="relative mb-6">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full bg-card border border-border rounded-lg py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {sidebarGroups.map(group => (
                <div key={group.title} className="mb-6">
                  <h3 className="text-xs font-medium uppercase tracking-[0.05em] text-muted-foreground px-3 mb-2">
                    {group.title}
                  </h3>
                  <div className="space-y-0.5">
                    {group.links.map(link => (
                      <button
                        key={link}
                        onClick={() => {
                          setActiveSection(link)
                          setSidebarOpen(false)
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                          activeSection === link
                            ? 'bg-primary/10 text-foreground font-medium'
                            : 'text-muted-foreground hover:bg-white/[0.04] hover:text-foreground'
                        }`}
                      >
                        {link}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Mobile overlay */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Content */}
          <main className="flex-1 min-w-0 lg:pl-16 pt-12 lg:pt-0">
            <div className="max-w-[720px]">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground/60 mb-4">
                <Link to="/" className="hover:text-muted-foreground transition-colors">Home</Link>
                <ChevronRight size={14} />
                <span>Docs</span>
                <ChevronRight size={14} />
                <span className="text-muted-foreground">Introduction</span>
              </nav>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-medium text-foreground mb-10"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
              >
                Introduction
              </motion.h1>

              <h2 className="text-[22px] font-medium text-foreground mt-12 mb-4">What is NoelClaw?</h2>
              <p className="text-base text-muted-foreground leading-[1.7]">
                NoelClaw is an AI-powered platform that enables natural language interaction with blockchain networks. Execute complex crypto operations — from token swaps to smart contract deployment — through simple conversation.
              </p>

              <h2 className="text-[22px] font-medium text-foreground mt-12 mb-4">Key Features</h2>
              <p className="text-base text-muted-foreground leading-[1.7]">
                NoelClaw combines large language models with blockchain infrastructure to create an intuitive interface for onchain operations.
              </p>
              <ul className="mt-4 space-y-2">
                {['Natural language command processing', 'Multi-chain support (Ethereum, Base, and more)', 'AI-optimized transaction routing', 'Real-time execution monitoring', 'Secure key management', 'Custom agent skills'].map(item => (
                  <li key={item} className="flex items-start gap-3 text-base text-muted-foreground">
                    <Check size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="text-[22px] font-medium text-foreground mt-12 mb-4">Getting Started</h2>
              <p className="text-base text-muted-foreground leading-[1.7]">
                To start using NoelClaw, you&apos;ll need:
              </p>
              <ol className="mt-4 space-y-2 list-decimal list-inside text-base text-muted-foreground leading-[1.7]">
                <li>A Web3 wallet (MetaMask, Coinbase Wallet, or WalletConnect)</li>
                <li>NoelClaw credits for transaction execution</li>
                <li>Access via Telegram bot or web interface</li>
              </ol>

              <CodeBlock
                code={`// Connect your wallet
const noelClaw = await NoelClaw.connect({
  wallet: 'metamask',
  network: 'base'
});

// Execute a swap
const result = await noelClaw.execute('Swap 0.5 ETH for USDC');
console.log(result.txHash);`}
              />

              <h2 className="text-[22px] font-medium text-foreground mt-12 mb-4">Architecture Overview</h2>
              <p className="text-base text-muted-foreground leading-[1.7]">
                NoelClaw&apos;s architecture consists of three core layers:
              </p>
              <div className="mt-6 space-y-4">
                <div className="bg-card border border-border rounded-xl p-5">
                  <h3 className="text-lg font-medium text-foreground">Intent Layer</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">Processes natural language input, extracts parameters, and validates the user&apos;s intent.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-5">
                  <h3 className="text-lg font-medium text-foreground">Execution Layer</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">Routes operations to the appropriate blockchain, handles gas estimation, and manages transaction submission.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-5">
                  <h3 className="text-lg font-medium text-foreground">Confirmation Layer</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">Monitors transaction status, provides real-time updates, and maintains an audit trail.</p>
                </div>
              </div>

              <h3 className="text-[22px] font-medium text-foreground mt-12 mb-4">Supported Chains</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-xs uppercase tracking-[0.05em] text-muted-foreground" style={{ backgroundColor: 'hsl(var(--muted))' }}>
                      <th className="text-left px-4 py-3 border border-border">Chain</th>
                      <th className="text-left px-4 py-3 border border-border">Status</th>
                      <th className="text-left px-4 py-3 border border-border">Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { chain: 'Ethereum', status: 'Live', features: 'Full support' },
                      { chain: 'Base', status: 'Live', features: 'Full support' },
                      { chain: 'Arbitrum', status: 'Beta', features: 'Swaps only' },
                      { chain: 'Optimism', status: 'Coming Soon', features: '—' },
                    ].map((row, i) => (
                      <tr key={row.chain} style={{ backgroundColor: i % 2 === 1 ? 'hsl(var(--secondary))' : 'transparent' }}>
                        <td className="px-4 py-3 border border-border text-foreground">{row.chain}</td>
                        <td className="px-4 py-3 border border-border">
                          <span
                            className="px-2 py-0.5 rounded-full text-xs font-medium"
                            style={{
                              backgroundColor: row.status === 'Live' ? 'hsl(160 84% 39% / 0.15)' : row.status === 'Beta' ? 'hsl(217 91% 60% / 0.15)' : 'rgba(255,255,255,0.06)',
                              color: row.status === 'Live' ? 'hsl(160 84% 39%)' : row.status === 'Beta' ? 'hsl(217 91% 60%)' : 'hsl(215 20% 65%)',
                            }}
                          >
                            {row.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 border border-border text-muted-foreground">{row.features}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>

          {/* Right TOC */}
          <aside className="hidden xl:block w-[200px] sticky top-[88px] h-fit pl-8">
            <h4 className="text-xs font-medium uppercase tracking-[0.05em] text-muted-foreground mb-3">On this page</h4>
            <div className="space-y-2">
              {tocItems.map(item => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item)}
                  className={`block text-sm transition-colors ${
                    activeSection === item ? 'text-foreground font-medium border-l-2 border-primary pl-3' : 'text-muted-foreground hover:text-foreground pl-3.5'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <Footer />
      <CustomCursor />
      <ScrollToTop />
    </div>
  )
}

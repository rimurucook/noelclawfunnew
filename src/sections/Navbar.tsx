import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { label: 'Modules', href: '#capabilities' },
  { label: 'Swarm', href: '#agent-swarm' },
  { label: 'Open Source', href: '#open-source' },
  { label: 'Games', href: '#games' },
  { label: 'Pricing', href: '#x402' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    if (!isHome) return
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    const sections = navLinks.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [isHome])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    if (!isHome) return
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`sticky top-0 z-50 h-16 transition-all duration-300 ${
          scrolled
            ? 'glass shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-6 lg:px-12">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="NoelClaw" className="h-8" />
            <span className="text-lg font-medium text-foreground">NoelClaw</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {isHome && navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm transition-colors duration-200 relative pb-1 ${
                  activeSection === link.href.slice(1)
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="navActive"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </button>
            ))}
            {!isHome && (
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                Home
              </Link>
            )}
            <a
              href="https://docs.noelclaw.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Docs
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <a
              href="https://noelclaw.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-xl hover:bg-primary/90 transition-all duration-200"
            >
              Launch App
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-muted-foreground"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-background/98 backdrop-blur-[40px] flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center text-muted-foreground"
            >
              <X size={28} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {isHome && navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-2xl font-normal text-foreground"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + navLinks.length * 0.1 }}
              >
                <a href="https://docs.noelclaw.fun" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="text-2xl font-normal text-foreground">
                  Docs
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (navLinks.length + 1) * 0.1 }}
                className="mt-4 flex flex-col items-center gap-3 w-full px-8"
              >
                <a
                  href="https://noelclaw.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center px-8 py-3 bg-primary text-primary-foreground text-lg font-medium rounded-xl"
                >
                  Launch App
                </a>
                <button
                  onClick={toggleTheme}
                  className="w-full text-center px-8 py-3 border border-border text-foreground text-base font-medium rounded-xl"
                >
                  {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

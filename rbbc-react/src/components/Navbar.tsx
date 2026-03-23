import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getImagePath } from '../utils/images'

const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#adresse', label: 'Adresse' },
  { href: '#equipes', label: 'Équipes' },
  { href: '#entrainements', label: 'Entraînements' },
  { href: '#sponsoring', label: 'Sponsoring' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
      const sections = navLinks.map(l => l.href.replace('#', ''))
      const current = sections.find(section => {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          return rect.top <= 120 && rect.bottom >= 120
        }
        return false
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const id = href.replace('#', '')
    if (id === 'accueil') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-off-black/95 backdrop-blur-md border-b border-white/8 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-4">

            {/* Logo */}
            <a
              href="#accueil"
              onClick={(e) => scrollTo(e, '#accueil')}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-red-700/60 group-hover:ring-red-600 transition-all">
                <img
                  src={getImagePath('/rbbc_icon.jpg')}
                  alt="RBBC"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden md:block leading-none">
                <div className="font-display text-xl text-white tracking-wide">RBBC</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">Royal Blaregnies</div>
              </div>
            </a>

            {/* Desktop links */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollTo(e, link.href)}
                      className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                        isActive ? 'text-white' : 'text-white/50 hover:text-white'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="navUnderline"
                          className="absolute bottom-0 left-3 right-3 h-px bg-red-700"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                )
              })}
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-red-700 hover:bg-red-600 text-white text-sm font-semibold rounded-sm transition-colors duration-200"
            >
              Nous rejoindre
            </a>

            {/* Burger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Menu"
            >
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-white origin-center transition-all"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-px bg-white"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-white origin-center transition-all"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 350, damping: 35 }}
              className="fixed top-0 right-0 bottom-0 w-72 max-w-[85vw] bg-off-black border-l border-white/8 z-50 lg:hidden"
            >
              <div className="flex flex-col h-full p-8 pt-20">
                <ul className="flex-1 space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => scrollTo(e, link.href)}
                        className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-sm text-lg font-medium transition-colors"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  onClick={(e) => scrollTo(e, '#contact')}
                  className="block text-center px-6 py-4 bg-red-700 hover:bg-red-600 text-white font-bold rounded-sm transition-colors"
                >
                  Nous rejoindre
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar

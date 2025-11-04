import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getImagePath } from '../utils/images'

interface NavbarProps {
  isScrolled: boolean
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#adresse', label: 'Adresse' },
    { href: '#equipes', label: 'Équipes' },
    { href: '#entrainements', label: 'Entraînements' },
    { href: '#sponsoring', label: 'Sponsoring' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    
    if (targetId === 'accueil') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    handleLinkClick()
  }

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black shadow-lg' : 'bg-black'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center justify-center flex-1 space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-white text-lg font-medium hover:text-rbbc-red transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{
              background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
            }}
          >
            <div className="flex flex-col h-full pt-20 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-64 h-64 bg-rbbc-red rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-64 h-64 bg-rbbc-red rounded-full blur-3xl"></div>
              </div>
              
              {/* Close button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 text-white text-4xl font-light hover:text-rbbc-red transition-colors z-20 w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10"
                aria-label="Close menu"
              >
                ×
              </button>
              
              {/* Logo section */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex justify-center items-center py-8 relative z-10"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-rbbc-red rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <img
                    src={getImagePath('/rbbc_icon.jpg')}
                    alt="RBBC Logo"
                    className="w-28 h-28 rounded-full object-cover relative z-10 ring-4 ring-rbbc-red/50 shadow-2xl"
                  />
                </div>
              </motion.div>
              
              {/* Navigation links */}
              <nav className="flex-1 flex items-center justify-center relative z-10">
                <ul className="space-y-4 text-center w-full px-8">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className="block text-white text-2xl font-display font-bold uppercase tracking-wider py-4 px-6 rounded-xl hover:bg-rbbc-red/20 hover:text-rbbc-red transition-all duration-300 relative group"
                      >
                        <span className="relative z-10">{link.label}</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-rbbc-red/0 via-rbbc-red/10 to-rbbc-red/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              
              {/* Footer decoration */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pb-8 text-center relative z-10"
              >
                <p className="text-white/60 text-sm font-display uppercase tracking-wider">
                  Royal Blaregnies Basket Club
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar


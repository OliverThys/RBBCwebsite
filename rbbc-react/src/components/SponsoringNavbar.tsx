import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getImagePath } from '../utils/images'

const SponsoringNavbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
      style={{ borderBottom: scrolled ? '1px solid #E5E7EB' : 'none' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-red-700/50 group-hover:ring-red-700 transition-all duration-200">
              <img src={getImagePath('/rbbc_icon.jpg')} alt="RBBC" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block leading-none">
              <div
                className="font-display text-xl tracking-wide transition-colors duration-300"
                style={{ color: scrolled ? '#0D0D0D' : '#ffffff' }}
              >
                RBBC
              </div>
              <div
                className="text-[10px] uppercase tracking-widest font-medium transition-colors duration-300"
                style={{ color: scrolled ? '#9CA3AF' : 'rgba(255,255,255,0.75)' }}
              >
                Royal Blaregnies
              </div>
            </div>
          </Link>

          {/* Centre */}
          <div className="hidden lg:flex flex-col items-center">
            <div
              className="text-[10px] uppercase tracking-[0.3em] font-medium transition-colors duration-300"
              style={{ color: scrolled ? '#9CA3AF' : 'rgba(255,255,255,0.7)' }}
            >
              Dossier de partenariat
            </div>
            <div
              className="font-display text-lg tracking-wide leading-tight transition-colors duration-300"
              style={{ color: scrolled ? '#0D0D0D' : '#ffffff' }}
            >
              Saison 2025–2026
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo('formules')}
              className="hidden md:flex items-center gap-2 px-4 py-2 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#B91C1C' }}
            >
              Voir les formules
            </button>
            <Link
              to="/"
              className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 group"
              style={{ color: scrolled ? '#4B5563' : 'rgba(255,255,255,0.85)' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = scrolled ? '#0D0D0D' : '#ffffff'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = scrolled ? '#4B5563' : 'rgba(255,255,255,0.85)'}
            >
              <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">Retour au site</span>
            </Link>
          </div>

        </div>
      </div>
    </motion.nav>
  )
}

export default SponsoringNavbar

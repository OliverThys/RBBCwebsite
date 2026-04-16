import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getImagePath } from '../utils/images'

const heroImage = getImagePath('/accueil1.jpg')

const Hero = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 500], [1, 0])
  const y = useTransform(scrollY, [0, 500], [0, 80])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="accueil" className="relative flex-1 min-h-0 flex flex-col overflow-hidden bg-[#0A0A0A]">

      {/* Sponsoring badge — right side */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute z-20 flex flex-col items-center"
        style={{ left: 'calc(50% + 300px)', top: 'calc(50% - 180px)', transform: 'translate(-50%, -50%)' }}
      >
        <Link
          to="/sponsoring"
          className="group flex flex-col items-center gap-2 text-center"
        >
          <div
            className="w-px bg-gradient-to-b from-transparent via-amber-400/60 to-amber-400 hidden sm:block"
            style={{ height: '80px' }}
          />
          <div
            className="px-8 py-6 rounded-sm border border-amber-400/40 group-hover:border-amber-400 transition-all duration-300 group-hover:bg-amber-400/10"
            style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)' }}
          >
            <div className="text-xl uppercase tracking-[0.25em] font-semibold mb-2" style={{ color: 'rgba(251,191,36,0.7)' }}>
              Saison 2025–26
            </div>
            <div className="text-[28px] font-bold tracking-wide whitespace-nowrap leading-tight" style={{ color: '#FCD34D' }}>
              Sponsoring ouvert&nbsp;!
            </div>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="text-lg uppercase tracking-widest font-medium" style={{ color: 'rgba(251,191,36,0.6)' }}>
                Voir le dossier
              </span>
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" style={{ color: 'rgba(251,191,36,0.6)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          <div
            className="w-px bg-gradient-to-b from-amber-400 via-amber-400/60 to-transparent hidden sm:block"
            style={{ height: '80px' }}
          />
        </Link>
      </motion.div>

      {/* Background photo */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-[1.03]"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/10 md:from-black/85 md:via-black/50 md:to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/40" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 flex flex-col justify-center flex-1 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 pt-20"
      >
        {/* Club label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-4"
        >
          <span className="section-label">Royal Blaregnies Basket Club</span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-5"
        >
          <h1 className="font-display leading-[0.9] text-white">
            <span className="block text-[clamp(3rem,8vw,7rem)]">UN CLUB</span>
            <span className="block text-[clamp(3rem,8vw,7rem)] text-red-700">FAMILIAL</span>
            <span className="block text-[clamp(3rem,8vw,7rem)]">ET PASSIONNÉ</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-white/60 text-base md:text-lg max-w-lg mb-6 leading-relaxed"
        >
          Club familial en Province de Hainaut, ouvert à tous dès 6 ans.
          Du minibasket aux seniors, encadré par des formateurs passionnés.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap gap-4 mb-8"
        >
          <button
            onClick={() => scrollTo('equipes')}
            className="px-7 py-3.5 bg-red-700 hover:bg-red-600 text-white font-semibold text-sm tracking-wide transition-colors duration-200 rounded-sm"
          >
            Découvrir nos équipes
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-7 py-3.5 bg-transparent border border-white/30 hover:border-white text-white font-semibold text-sm tracking-wide transition-colors duration-200 rounded-sm"
          >
            Nous rejoindre
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

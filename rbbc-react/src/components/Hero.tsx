import { motion } from 'framer-motion'
import { getImagePath } from '../utils/images'
import AnimatedCounter from './AnimatedCounter'

const teamPhoto = getImagePath('/accueil1.jpg')
const DARK = '#09101f'

const parquetStyle: React.CSSProperties = {
  backgroundColor: '#d4a050',
  backgroundImage: `
    repeating-linear-gradient(
      90deg,
      transparent 0px, transparent 62px,
      rgba(0,0,0,0.06) 62px, rgba(0,0,0,0.06) 64px
    ),
    repeating-linear-gradient(
      0deg,
      transparent 0px, transparent 7px,
      rgba(0,0,0,0.018) 7px, rgba(0,0,0,0.018) 8px
    ),
    linear-gradient(170deg, #e8bc72 0%, #d4a050 40%, #c8923c 70%, #d0a048 100%)
  `,
}

const stats = [
  { value: 200, suffix: '',  label: 'membres' },
  { value: 11,  suffix: '',  label: 'équipes' },
  { value: 60,  suffix: '+', label: "ans d'histoire" },
]

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="accueil" className="h-[100dvh] flex flex-col lg:flex-row overflow-hidden">

      {/* ── PHOTO — en haut mobile, à droite desktop ─────────────────────── */}
      <div
        className="order-1 lg:order-2 relative overflow-hidden flex-none h-[42vh] lg:h-auto lg:flex-1"
        style={parquetStyle}
      >
        <motion.img
          src={teamPhoto}
          alt="Équipe RBBC"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 40%' }}
          initial={{ scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

      </div>

      {/* ── TEXTE — en bas mobile, à gauche desktop ──────────────────────── */}
      <div
        className="order-2 lg:order-1 relative flex flex-col bg-white px-6 sm:px-12 lg:px-14 pt-5 sm:pt-6 lg:pt-24 pb-4 sm:pb-6 lg:pb-10 flex-1 lg:flex-none lg:w-[40%] overflow-hidden"
        style={{ borderRight: '1px solid #e5e7eb' }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-3 lg:mb-auto"
        >
          <div className="text-[10px] font-bold uppercase tracking-[0.35em]" style={{ color: '#EA580C' }}>
            Royal Blaregnies Basket Club
          </div>
        </motion.div>



        {/* Bloc central */}
        <div className="relative py-2 sm:py-4 lg:py-0 lg:flex-1 flex flex-col justify-center" style={{ zIndex: 1 }}>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="font-display mb-3 sm:mb-5 lg:mb-6"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 6.5rem)', lineHeight: 1, color: DARK }}
          >
            UN VILLAGE<br />
            <span style={{ color: '#B91C1C' }}>UNE PASSION</span><br />
            UN CLUB
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-500 text-sm sm:text-[15px] leading-relaxed mb-4 sm:mb-6 lg:mb-8 max-w-xs hidden sm:block"
          >
            Depuis 1961, le RBBC réunit les familles de Quévy autour du basket.
            Portes ouvertes dès 6&nbsp;ans, tous niveaux.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.62 }}
            className="flex items-stretch mb-4 sm:mb-6 lg:mb-8"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex-1 ${i > 0 ? 'border-l border-gray-200 pl-3 sm:pl-6' : 'pr-3 sm:pr-6'}`}
              >
                <div
                  className="font-display leading-none mb-0.5"
                  style={{ fontSize: 'clamp(1.6rem, 4vw, 3.4rem)', color: DARK }}
                >
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={1.6} />
                </div>
                <div className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-[0.15em] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.78 }}
            className="flex flex-wrap gap-2 sm:gap-3"
          >
            <button
              onClick={() => scrollTo('contact')}
              className="px-5 sm:px-7 py-2.5 sm:py-3.5 bg-red-700 hover:bg-red-600 text-white font-bold text-sm tracking-wide transition-colors duration-200"
            >
              Rejoindre le club
            </button>
            <button
              onClick={() => scrollTo('equipes')}
              className="group inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 border border-gray-300 hover:border-gray-900 font-semibold text-sm tracking-wide transition-all duration-200"
              style={{ color: DARK }}
            >
              Voir les équipes
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Bas — fondé en */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.95 }}
          className="mt-3 lg:mt-auto flex items-center gap-2 sm:gap-3"
        >
          <div className="w-5 sm:w-6 h-px bg-gray-300 flex-shrink-0" />
          <span className="text-[10px] sm:text-[11px] text-gray-400 uppercase tracking-[0.15em] sm:tracking-[0.2em]">
            Fondé en 1961 · Blaregnies
          </span>
        </motion.div>
      </div>

    </section>
  )
}

export default Hero

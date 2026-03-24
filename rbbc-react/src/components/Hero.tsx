import { motion, useScroll, useTransform } from 'framer-motion'
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

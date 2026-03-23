import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { getImagePath } from '../utils/images'
import AnimatedCounter from './AnimatedCounter'

const heroImages = [
  '/accueil1.jpg',
  '/accueil3.jpg',
  '/accueil4.jpg',
  '/accueil5.jpg',
].map(getImagePath)

const stats = [
  { end: 1961, suffix: '', label: 'Fondé en' },
  { end: 200, suffix: '+', label: 'Joueurs' },
  { end: 11, suffix: '', label: 'Équipes' },
  { end: 60, suffix: '+', label: 'Ans d\'histoire' },
]

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 500], [1, 0])
  const y = useTransform(scrollY, [0, 500], [0, 80])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="accueil" className="relative h-screen min-h-[640px] flex flex-col overflow-hidden bg-off-black">

      {/* Background photo carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center scale-[1.03]"
              style={{ backgroundImage: `url(${heroImages[currentIndex]})` }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-off-black via-transparent to-black/40" />
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
          className="mb-6"
        >
          <span className="section-label">Royal Blaregnies Basket Club</span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="font-display leading-[0.9] text-white">
            <span className="block text-[clamp(3.5rem,10vw,9rem)]">LA PASSION</span>
            <span className="block text-[clamp(3.5rem,10vw,9rem)] text-red-700">DU BASKET</span>
            <span className="block text-[clamp(3.5rem,10vw,9rem)]">DEPUIS 1961</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-white/60 text-base md:text-lg max-w-lg mb-10 leading-relaxed"
        >
          Club de basketball basé à Blaregnies, en Province de Hainaut.
          Du minibasket aux seniors, nous accueillons tous les passionnés.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap gap-4 mb-16"
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

      {/* Image dots */}
      <div className="relative z-10 flex justify-center gap-2 pb-4">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`transition-all duration-300 rounded-full ${
              i === currentIndex ? 'w-6 h-1.5 bg-red-600' : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const heroImages = [
  '/accueil1.jpg',
  '/accueil3.jpg',
  '/accueil4.jpg',
  '/accueil5.jpg',
]

// Preload images for better quality
const preloadImages = () => {
  heroImages.forEach((src) => {
    const img = new Image()
    img.src = src
  })
}

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    // Preload images on mount
    preloadImages()
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <section id="accueil" className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: 'calc(100vh - 64px - 140px)', height: 'calc(100vh - 64px - 140px)', marginTop: '64px', paddingTop: '0' }}>
      {/* Image Carousel */}
      <div className="absolute inset-0" style={{ willChange: 'contents', transform: 'translateZ(0)' }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            alt={`Hero image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover" 
            style={{ 
              minWidth: '100%', 
              minHeight: '100%', 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              imageRendering: 'auto',
              filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
              WebkitFilter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
            loading="eager"
            fetchPriority="high"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img
            src="/rbbc_icon.jpg"
            alt="RBBC Logo"
            className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full object-cover shadow-2xl mb-6"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bebas text-white mb-6 uppercase font-black" style={{ letterSpacing: '2px', lineHeight: '0.9', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5), 0 0 2px rgba(0, 0, 0, 0.3)', WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)', fontWeight: '900' }}
        >
          Royal Blaregnies Basket Club
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              const target = document.getElementById('contact')
              if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
            className="px-8 py-3 bg-rbbc-red text-white font-semibold rounded-lg hover:bg-rbbc-red-dark transition-colors duration-200 shadow-lg"
          >
            Nous contacter
          </a>
          <a
            href="#equipes"
            onClick={(e) => {
              e.preventDefault()
              const target = document.getElementById('equipes')
              if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
            className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white hover:bg-white/20 transition-all duration-200"
          >
            Nos équipes
          </a>
        </motion.div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentImageIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero


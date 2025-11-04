import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { sponsors } from '../data/sponsors'
import { getImagePath } from '../utils/images'

const Sponsors = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section id="sponsoring" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 uppercase tracking-wide">
            Sponsoring
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soutenez le Royal Blaregnies Basket Club et développez votre visibilité
          </p>
        </motion.div>

        {/* Sponsors Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mb-16"
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              whileInView={isMobile ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={isMobile ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center h-24 md:h-32"
            >
              {sponsor.link ? (
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center"
                >
                  <img
                    src={getImagePath(sponsor.image)}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </a>
              ) : sponsor.phone ? (
                <a
                  href={`tel:${sponsor.phone}`}
                  className="w-full h-full flex items-center justify-center"
                >
                  <img
                    src={getImagePath(sponsor.image)}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </a>
              ) : (
                <img
                  src={getImagePath(sponsor.image)}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Sponsoring Info */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-8"
          >
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-6 text-center uppercase">
              Pourquoi nous soutenir ?
            </h3>
            <p className="text-lg text-gray-700 text-center mb-8">
              Le Royal Blaregnies Basket Club, fondé en 1961, est un club dynamique qui forme
              les jeunes talents et participe activement à la vie sportive locale. En nous
              soutenant, vous contribuez au développement du sport dans notre région et
              bénéficiez d'une visibilité ciblée.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-rbbc-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-display font-semibold text-gray-900 mb-2 uppercase">
                  Soutien Financier
                </h4>
                <p className="text-gray-600">
                  Tout montant est le bienvenu ! Chaque contribution nous aide à améliorer nos
                  équipements, organiser des événements et développer nos équipes.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-rbbc-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-display font-semibold text-gray-900 mb-2 uppercase">
                  Équipements
                </h4>
                <p className="text-gray-600">
                  Fournissez des équipements sportifs et bénéficiez d'une visibilité directe sur
                  les maillots, chaussures et accessoires de nos équipes.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-rbbc-red rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-display font-bold mb-4 uppercase">Contactez-nous</h3>
            <p className="text-lg mb-6 opacity-90">
              Intéressé par un partenariat ? Contactez notre comité
            </p>
            <div className="text-lg">
              <p className="font-semibold mb-2">Henri Maton</p>
              <p className="mb-2">Téléphone : 065/56 70 06</p>
              <p>
                Email :{' '}
                <a
                  href="mailto:comiterbbc@gmail.com"
                  className="underline hover:opacity-80 transition-opacity"
                >
                  comiterbbc@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors


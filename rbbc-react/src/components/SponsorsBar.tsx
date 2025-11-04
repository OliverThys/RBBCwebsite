import { motion } from 'framer-motion'
import { sponsors } from '../data/sponsors'

const SponsorsBar = () => {
  return (
    <section className="bg-gray-900 overflow-hidden flex flex-col justify-center" style={{ minHeight: '140px', height: '140px', maxHeight: '140px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-3"
        >
          <h3 className="text-white text-xs md:text-sm font-semibold uppercase tracking-wider opacity-80">
            Nos Partenaires
          </h3>
        </motion.div>

        {/* Infinite scroll container */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-8 md:space-x-12 animate-scroll" style={{ width: 'fit-content' }}>
            {/* First set of sponsors */}
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={`sponsor-1-${sponsor.id}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0"
              >
                {sponsor.link ? (
                  <a
                    href={sponsor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-12 md:h-14 w-auto transition-all duration-300 opacity-70 hover:opacity-100"
                  >
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="h-full w-auto object-contain"
                      loading="lazy"
                    />
                  </a>
                ) : sponsor.phone ? (
                  <a
                    href={`tel:${sponsor.phone}`}
                    className="block h-12 md:h-14 w-auto transition-all duration-300 opacity-70 hover:opacity-100"
                  >
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="h-full w-auto object-contain"
                      loading="lazy"
                    />
                  </a>
                ) : (
                  <div className="h-12 md:h-14 w-auto opacity-70">
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="h-full w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                )}
              </motion.div>
            ))}
            {/* Duplicate for seamless loop */}
            {sponsors.map((sponsor) => (
              <div
                key={`sponsor-2-${sponsor.id}`}
                className="flex-shrink-0"
              >
                {sponsor.link ? (
                  <a
                    href={sponsor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-12 md:h-14 w-auto transition-all duration-300 opacity-70 hover:opacity-100"
                  >
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="h-full w-auto object-contain"
                      loading="lazy"
                    />
                  </a>
                ) : sponsor.phone ? (
                  <a
                    href={`tel:${sponsor.phone}`}
                    className="block h-12 md:h-14 w-auto transition-all duration-300 opacity-70 hover:opacity-100"
                  >
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="h-full w-auto object-contain"
                      loading="lazy"
                    />
                  </a>
                ) : (
                  <div className="h-12 md:h-14 w-auto opacity-70">
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="h-full w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default SponsorsBar


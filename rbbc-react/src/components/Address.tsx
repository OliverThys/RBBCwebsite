import { motion } from 'framer-motion'
import { contactInfo } from '../data/contact'
import { getImagePath } from '../utils/images'

const Address = () => {
  return (
    <section id="adresse" className="relative py-24 md:py-32 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="section-label mb-4">Où nous trouver</div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white leading-none">
            NOTRE ADRESSE
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid lg:grid-cols-2 overflow-hidden rounded-sm border border-white/8"
        >
          {/* Photo */}
          <div className="relative h-48 sm:h-60 lg:h-auto overflow-hidden">
            <img
              src={getImagePath('/adresse.jpg')}
              alt="Salle omnisports René Delrue"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20" />
          </div>

          {/* Info */}
          <div className="p-5 sm:p-8 md:p-12 bg-surface-2 flex flex-col justify-center">
            <h3 className="font-display text-3xl md:text-4xl text-white mb-8">
              {contactInfo.address.name}
            </h3>

            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 w-10 h-10 flex-shrink-0 bg-red-700/15 border border-red-700/30 rounded-sm flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Adresse</p>
                  <p className="text-white font-medium">{contactInfo.address.street}</p>
                  <p className="text-white font-medium">{contactInfo.address.postalCode} {contactInfo.address.city}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-0.5 w-10 h-10 flex-shrink-0 bg-red-700/15 border border-red-700/30 rounded-sm flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Parking</p>
                  <p className="text-white font-medium">Accessible jusqu'à 22h</p>
                </div>
              </div>
            </div>

            <a
              href={contactInfo.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-red-700 hover:bg-red-600 text-white font-semibold text-sm tracking-wide transition-colors duration-200 rounded-sm self-start"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Voir l'itinéraire
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Address

import { motion } from 'framer-motion'
import { contactInfo } from '../data/contact'

const Trainings = () => (
  <section id="entrainements" className="relative py-14 md:py-20 bg-surface overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
      >
        <div>
          <div className="section-label mb-4">Horaires</div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white leading-none">
            ENTRAÎNEMENTS
          </h2>
        </div>
        <motion.a
          href={contactInfo.address.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-surface-2 border border-white/10 hover:border-red-700/40 rounded-sm text-sm text-white/60 hover:text-white transition-all duration-200 self-start md:self-auto"
        >
          <svg className="w-4 h-4 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {contactInfo.address.name}
        </motion.a>
      </motion.div>

      {/* Message horaires */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 sm:p-8 bg-surface-2 border border-white/15 rounded-sm"
      >
        <div className="w-12 h-12 flex-shrink-0 bg-red-700/15 border border-red-700/30 rounded-sm flex items-center justify-center">
          <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <p className="font-display text-2xl sm:text-3xl text-white leading-none mb-2">
            Horaires 2025–2026 en cours de discussion
          </p>
          <p className="text-white/60 text-sm">
            Les nouveaux horaires seront communiqués prochainement. Contactez-nous pour plus d'informations.
          </p>
        </div>
      </motion.div>

    </div>
  </section>
)

export default Trainings

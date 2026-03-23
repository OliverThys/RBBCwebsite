import { motion } from 'framer-motion'
import { weekSchedule } from '../data/teams'
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

      {/* Weekly grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {weekSchedule.map((dayData, di) => (
          <motion.div
            key={dayData.day}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: di * 0.08 }}
            className="bg-surface-2 border border-white/15 rounded-sm overflow-hidden hover:border-red-700/40 transition-colors duration-300"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/15 bg-white/[0.04]">
              <h4 className="font-display text-2xl text-white">{dayData.day}</h4>
              <span className="text-white/50 text-xs">{dayData.slots.length} séance{dayData.slots.length > 1 ? 's' : ''}</span>
            </div>

            <div className="divide-y divide-white/10">
              {dayData.slots.map((slot, si) => (
                <div key={si} className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="text-white font-semibold text-sm leading-tight">{slot.team}</span>
                    <span className={`flex-shrink-0 text-[10px] font-bold uppercase px-1.5 py-0.5 rounded-sm tracking-wide ${
                      slot.category === 'seniors'
                        ? 'bg-red-700/30 text-red-400 border border-red-700/40'
                        : 'bg-white/8 text-white/60 border border-white/20'
                    }`}>
                      {slot.category === 'seniors' ? 'S' : 'J'}
                    </span>
                  </div>
                  <p className="text-white/60 text-xs mb-1.5">{slot.coach}</p>
                  <p className="font-mono text-red-400 text-xs font-semibold tracking-wide">{slot.time}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* U12 / U10 note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 px-5 py-4 bg-white/[0.04] border border-white/15 rounded-sm"
      >
        <svg className="w-4 h-4 text-white/50 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-white/60 text-sm">
          <span className="text-white/80 font-medium">U12 (Jean-Phi) & U10 (Henri)</span>
          {' '}— Horaires en cours de confirmation. Contactez-nous pour plus d'informations.
        </p>
      </motion.div>

    </div>
  </section>
)

export default Trainings

import { motion } from 'framer-motion'
import { trainingSchedules } from '../data/teams'

const Trainings = () => {
  const seniorTrainings = trainingSchedules.filter((_, i) => i < 4)
  const youngTrainings = trainingSchedules.filter((_, i) => i >= 4)

  const TrainingCard = ({ training, index, accent }: {
    training: typeof trainingSchedules[0]
    index: number
    accent: 'red' | 'neutral'
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white border border-gray-200 rounded-sm p-6 hover:border-red-700/40 transition-colors duration-300 shadow-sm"
    >
      <div className="flex items-start justify-between mb-5">
        <h4 className="font-display text-xl sm:text-2xl text-gray-900">{training.teamName}</h4>
        {accent === 'red' && (
          <span className="px-2 py-0.5 bg-red-700/10 border border-red-700/30 text-red-600 text-xs font-semibold uppercase rounded-sm">
            Senior
          </span>
        )}
        {accent === 'neutral' && (
          <span className="px-2 py-0.5 bg-gray-100 border border-gray-300 text-gray-500 text-xs font-semibold uppercase rounded-sm">
            Jeune
          </span>
        )}
      </div>

      {/* Coach */}
      <div className="flex items-center gap-3 mb-5 pb-5 border-b border-gray-200">
        <div className="w-8 h-8 bg-red-700/15 border border-red-700/30 rounded-sm flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div>
          <p className="text-gray-400 text-xs uppercase tracking-widest">Coach</p>
          <p className="text-gray-900 text-sm font-semibold">{training.coach}</p>
        </div>
      </div>

      {/* Schedule */}
      <ul className="space-y-2">
        {training.days.map((day, i) => (
          <li key={i} className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-red-700 flex-shrink-0" />
            <span className={`text-sm ${day === 'À confirmer' ? 'text-gray-300 italic' : 'text-gray-600'}`}>
              {day}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  )

  return (
    <section id="entrainements" className="relative py-24 md:py-32 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="section-label mb-4">Horaires</div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-gray-900 leading-none">
            ENTRAÎNEMENTS
          </h2>
        </motion.div>

        {/* Seniors */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-1 h-8 bg-red-700 rounded-full" />
            <div>
              <h3 className="font-display text-3xl text-gray-900">SENIORS</h3>
              <p className="text-gray-400 text-xs uppercase tracking-widest">Compétition & Excellence</p>
            </div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {seniorTrainings.map((t, i) => (
              <TrainingCard key={t.teamName} training={t} index={i} accent="red" />
            ))}
          </div>
        </div>

        {/* Jeunes */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-1 h-8 bg-gray-300 rounded-full" />
            <div>
              <h3 className="font-display text-3xl text-gray-900">JEUNES</h3>
              <p className="text-gray-400 text-xs uppercase tracking-widest">Formation & Talent</p>
            </div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {youngTrainings.map((t, i) => (
              <TrainingCard key={t.teamName} training={t} index={i} accent="neutral" />
            ))}
          </div>
        </div>

        {/* Location strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 p-6 bg-white border border-gray-200 rounded-sm shadow-sm"
        >
          <div className="w-10 h-10 flex-shrink-0 bg-red-700/15 border border-red-700/30 rounded-sm flex items-center justify-center">
            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="text-gray-900 font-semibold">Salle de Sports René Delrue</p>
            <p className="text-gray-500 text-sm">Rue de Blaregnies 1C, 7040 Blaregnies</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Trainings

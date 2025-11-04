import { motion } from 'framer-motion'
import { trainingSchedules } from '../data/teams'

const Trainings = () => {
  const seniorTrainings = trainingSchedules.filter((_, index) => index < 4)
  const youngTrainings = trainingSchedules.filter((_, index) => index >= 4)

  return (
    <section id="entrainements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 uppercase tracking-wide">
            Entraînements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Horaires d'entraînement et coachs par équipe
          </p>
        </motion.div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {/* Seniors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6 uppercase">
              Équipes Seniors
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {seniorTrainings.map((training, index) => (
                <motion.div
                  key={training.teamName}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 shadow-lg"
                >
                  <div className="text-xl font-display font-semibold text-rbbc-red mb-2">
                    {training.teamName}
                  </div>
                  <div className="text-gray-600 mb-4">Coach : {training.coach}</div>
                  <div className="space-y-2">
                    {training.days.map((day, dayIndex) => (
                      <div
                        key={dayIndex}
                        className={`text-gray-700 ${
                          day === 'À confirmer' ? 'italic text-gray-500' : ''
                        }`}
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Jeunes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6 uppercase">
              Équipes Jeunes
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {youngTrainings.map((training, index) => (
                <motion.div
                  key={training.teamName}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 shadow-lg"
                >
                  <div className="text-xl font-display font-semibold text-rbbc-red mb-2">
                    {training.teamName}
                  </div>
                  <div className="text-gray-600 mb-4">Coach : {training.coach}</div>
                  <div className="space-y-2">
                    {training.days.map((day, dayIndex) => (
                      <div
                        key={dayIndex}
                        className={`text-gray-700 ${
                          day === 'À confirmer' ? 'italic text-gray-500' : ''
                        }`}
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Trainings


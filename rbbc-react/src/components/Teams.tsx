import { motion } from 'framer-motion'
import { teams } from '../data/teams'

const Teams = () => {
  const seniorTeams = teams.filter((team) => team.category === 'seniors')
  const youngTeams = teams.filter((team) => team.category === 'jeunes')

  return (
    <section id="equipes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 uppercase tracking-wide">
            Nos Équipes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos équipes et leurs performances
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Seniors */}
          <div>
            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-8 text-center uppercase">
              Équipes Seniors
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {seniorTeams.map((team, index) => (
                <motion.div
                  key={team.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={team.image}
                      alt={`Photo équipe ${team.name}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-display font-semibold text-gray-900 text-center">
                      {team.name}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Jeunes */}
          <div>
            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-8 text-center uppercase">
              Équipes Jeunes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {youngTeams.map((team, index) => (
                <motion.div
                  key={team.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={team.image}
                      alt={`Photo équipe ${team.name}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-display font-semibold text-gray-900 text-center">
                      {team.name}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Teams


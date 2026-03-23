import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { teams } from '../data/teams'
import { getImagePath } from '../utils/images'

type Filter = 'all' | 'seniors' | 'jeunes'

const Teams = () => {
  const [filter, setFilter] = useState<Filter>('all')

  const filteredTeams = filter === 'all' ? teams : teams.filter(t => t.category === filter)

  return (
    <section id="equipes" className="relative py-24 md:py-32 bg-off-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <div className="section-label mb-4">Nos équipes</div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-gray-900 leading-none">
              DE TOUS<br />
              <span className="text-red-700">LES NIVEAUX</span>
            </h2>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 bg-white rounded-sm p-1 shadow-sm border border-gray-200">
            {([
              { value: 'all', label: 'Toutes' },
              { value: 'seniors', label: 'Seniors' },
              { value: 'jeunes', label: 'Jeunes' },
            ] as { value: Filter; label: string }[]).map(btn => (
              <button
                key={btn.value}
                onClick={() => setFilter(btn.value)}
                className={`px-5 py-2 text-sm font-semibold rounded-sm transition-all duration-200 ${
                  filter === btn.value
                    ? 'bg-red-700 text-white'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredTeams.map((team, index) => (
              <motion.div
                key={team.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group relative h-56 sm:h-64 md:h-72 overflow-hidden rounded-sm cursor-pointer shadow-sm"
              >
                {/* Photo */}
                <img
                  src={getImagePath(team.image)}
                  alt={team.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Permanent gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 text-xs font-bold uppercase tracking-wide rounded-sm ${
                    team.category === 'seniors'
                      ? 'bg-red-700 text-white'
                      : 'bg-white/80 text-gray-800 border border-white/40'
                  }`}>
                    {team.category === 'seniors' ? 'Senior' : 'Jeune'}
                  </span>
                </div>

                {/* Name — always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-xl sm:text-2xl text-white leading-none mb-3">{team.name}</h3>

                  {/* CTA — appears on hover */}
                  <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-red-400 hover:text-red-300 uppercase tracking-widest"
                    >
                      Rejoindre l'équipe
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA band */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-5 sm:p-8 border border-gray-200 bg-white rounded-sm shadow-sm"
        >
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-gray-900 mb-1">Rejoins l'aventure</h3>
            <p className="text-gray-500 text-sm">Débutant ou confirmé, il y a une place pour toi au RBBC.</p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="flex-shrink-0 px-7 py-3.5 bg-red-700 hover:bg-red-600 text-white font-semibold text-sm tracking-wide transition-colors duration-200 rounded-sm"
          >
            Nous contacter
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Teams

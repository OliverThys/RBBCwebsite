import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { teams } from '../data/teams'
import { getImagePath } from '../utils/images'

const DARK = '#09101f'
const RED = '#B91C1C'

type Filter = 'all' | 'seniors' | 'jeunes'

const filters: { value: Filter; label: string }[] = [
  { value: 'all',     label: 'Toutes' },
  { value: 'seniors', label: 'Seniors' },
  { value: 'jeunes',  label: 'Jeunes' },
]

const Teams = () => {
  const [filter, setFilter] = useState<Filter>('all')

  const filteredTeams = filter === 'all' ? teams : teams.filter(t => t.category === filter)

  return (
    <section id="equipes" className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: '#F7F6F3' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8"
        >
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.35em] mb-4" style={{ color: '#EA580C' }}>Nos équipes</div>
            <h2 className="font-display leading-none" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', color: DARK }}>
              FILLES ET GARÇONS<br />
              <span style={{ color: RED }}>TOUS LES NIVEAUX</span>
            </h2>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-0 bg-white p-1 border border-gray-200 self-start sm:self-auto">
            {filters.map(btn => (
              <button
                key={btn.value}
                onClick={() => setFilter(btn.value)}
                className={`px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  filter === btn.value
                    ? 'bg-red-700 text-white'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Photo grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          <AnimatePresence mode="popLayout">
            {filteredTeams.map((team, index) => (
              <motion.div
                key={team.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.28, delay: index * 0.03 }}
                className="group relative aspect-[4/3] overflow-hidden"
              >
                <img
                  src={getImagePath(team.image)}
                  alt={team.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute inset-0 bg-red-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category badge */}
                <div className="absolute top-2.5 left-2.5">
                  <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-sm ${
                    team.category === 'seniors'
                      ? 'bg-red-700 text-white'
                      : 'bg-white text-gray-800'
                  }`}>
                    {team.category === 'seniors' ? 'Senior' : 'Jeune'}
                  </span>
                </div>

                {/* Name */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <h3 className="font-display text-base sm:text-lg text-white leading-none mb-2">
                    {team.name}
                  </h3>
                  <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold text-red-300 hover:text-red-200 uppercase tracking-widest"
                    >
                      Rejoindre
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
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-200"
        >
          <div>
            <h3 className="font-display text-2xl md:text-3xl leading-none mb-1" style={{ color: DARK }}>Rejoins l'aventure</h3>
            <p className="text-gray-500 text-sm mt-2">Fille ou garçon, débutant ou confirmé — nos formateurs t'accueillent.</p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="flex-shrink-0 px-7 py-3.5 bg-red-700 hover:bg-red-600 text-white font-semibold text-sm tracking-wide transition-colors duration-200"
          >
            Nous contacter
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Teams

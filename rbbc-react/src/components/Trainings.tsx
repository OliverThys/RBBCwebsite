import { motion } from 'framer-motion'
import { contactInfo } from '../data/contact'

const DARK = '#09101f'
const ORANGE = '#EA580C'

const categories = ['U6 / U8', 'U10', 'U12', 'U16F', 'U14-18G', 'Seniors Dames', 'Seniors H-B', 'Seniors H-A']

const schedule: { day: string; slots: Partial<Record<string, string>> }[] = [
  {
    day: 'Mardi',
    slots: {
      'U10':           '16h15 – 17h30',
      'U16F':          '17h30 – 19h00',
      'Seniors Dames': '19h00 – 20h30',
      'Seniors H-A':   '20h30 – 22h00',
    },
  },
  {
    day: 'Mercredi',
    slots: {
      'U6 / U8': '14h00 – 15h00',
      'U10':     '15h00 – 16h15',
      'U12':     '16h15 – 17h30',
    },
  },
  {
    day: 'Jeudi',
    slots: {
      'U12':         '17h00 – 18h15',
      'U14-18G':     '18h15 – 19h45',
      'Seniors H-B': '19h45 – 21h00',
      'Seniors H-A': '21h00 – 22h15',
    },
  },
  {
    day: 'Vendredi',
    slots: {
      'U12':  '17h15 – 18h45',
      'U16F': '18h45 – 20h15',
    },
  },
]

const Trainings = () => (
  <section id="entrainements" className="relative py-16 md:py-24 overflow-hidden bg-white border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
      >
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.35em] mb-4" style={{ color: ORANGE }}>Horaires</div>
          <h2 className="font-display leading-none" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', color: DARK }}>
            ENTRAÎNEMENTS
          </h2>
          <p className="text-sm text-gray-400 mt-3">Saison 2025 – 2026 · Salle de Blaregnies</p>
        </div>
        <motion.a
          href={contactInfo.address.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-200 hover:border-red-300 hover:bg-red-50 text-sm text-gray-600 hover:text-red-700 transition-all duration-200 self-start md:self-auto"
        >
          <svg className="w-4 h-4 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {contactInfo.address.name}
        </motion.a>
      </motion.div>

      {/* Table scrollable */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="overflow-x-auto scrollbar-none"
      >
        <table className="w-full min-w-[700px] border-collapse text-sm">
          <thead>
            <tr className="border-b-2" style={{ borderColor: ORANGE }}>
              <th className="text-left py-3 pr-4 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 w-24">Jour</th>
              {categories.map(cat => (
                <th
                  key={cat}
                  className="text-center py-3 px-2 text-[10px] font-bold uppercase tracking-[0.15em] whitespace-nowrap"
                  style={{ color: DARK }}
                >
                  {cat}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {schedule.map((row) => (
              <tr key={row.day} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 pr-4">
                  <span
                    className="font-black uppercase leading-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.25rem', color: DARK }}
                  >
                    {row.day}
                  </span>
                </td>
                {categories.map(cat => (
                  <td key={cat} className="py-4 px-2 text-center">
                    {row.slots[cat] ? (
                      <span
                        className="inline-block px-2 py-1 text-[11px] font-semibold text-gray-700 bg-gray-100 whitespace-nowrap"
                        style={{ borderLeft: `2px solid ${ORANGE}` }}
                      >
                        {row.slots[cat]}
                      </span>
                    ) : (
                      <span className="text-gray-200">—</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

    </div>
  </section>
)

export default Trainings

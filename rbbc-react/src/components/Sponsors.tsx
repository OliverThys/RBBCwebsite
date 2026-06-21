import { motion } from 'framer-motion'
import { tier1, tier2, tier3 } from '../data/sponsors'
import { getImagePath } from '../utils/images'

const DARK = '#09101f'
const RED = '#B91C1C'

const Sponsors = () => (
  <section id="sponsoring" className="relative py-16 sm:py-24 overflow-hidden border-t border-gray-100" style={{ backgroundColor: '#F7F6F3' }}>
    <div className="max-w-5xl mx-auto px-6 sm:px-10">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <div className="text-[10px] font-bold uppercase tracking-[0.35em] mb-4" style={{ color: '#EA580C' }}>Nos partenaires</div>
        <h2 className="font-display leading-none" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', color: DARK }}>
          ILS NOUS<br />
          <span style={{ color: RED }}>SOUTIENNENT</span>
        </h2>
      </motion.div>

      {/* Tier 1 — Partenaires principaux */}
      <div className="mb-14">
        <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-gray-400">Partenaires principaux</div>
        <motion.div
          className="grid sm:grid-cols-3 gap-px bg-gray-200"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {tier1.map((s) => (
            <a
              key={s.id}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white flex flex-col items-center justify-center p-8 hover:bg-gray-50 transition-colors group"
            >
              <img
                src={getImagePath(s.image)}
                alt={s.name}
                className="h-[90px] w-auto max-w-[224px] object-contain mb-4 group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="text-xs font-bold text-center text-gray-700">{s.name}</div>
              <div className="text-[10px] uppercase tracking-wider text-gray-400 mt-0.5">{s.description}</div>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Tier 2 — Partenaires */}
      <div className="mb-10 border-t border-gray-200 pt-10">
        <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-gray-400">Partenaires</div>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {tier2.map((s) => (
            <a
              key={s.id}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              title={s.name}
            >
              <img
                src={getImagePath(s.image)}
                alt={s.name}
                className="h-14 w-auto max-w-[154px] object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Tier 3 — Soutiens */}
      <div className="border-t border-gray-200 pt-8">
        <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-gray-400">Soutiens</div>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-5 sm:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {tier3.map((s) => (
            <a
              key={s.id}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              title={s.name}
            >
              <img
                src={getImagePath(s.image)}
                alt={s.name}
                className="h-10 w-auto max-w-[126px] object-contain opacity-40 group-hover:opacity-80 transition-opacity duration-300"
                loading="lazy"
              />
            </a>
          ))}
        </motion.div>
      </div>

    </div>
  </section>
)

export default Sponsors

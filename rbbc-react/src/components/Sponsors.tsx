import { motion } from 'framer-motion'
import { sponsors } from '../data/sponsors'
import { getImagePath } from '../utils/images'

const benefits = [
  {
    title: 'Visibilité',
    description: 'Logo sur nos maillots et notre site web, visible par des centaines de personnes.',
  },
  {
    title: 'Partenariat',
    description: 'Devenez partenaire officiel d\'un club historique de la région, fondé en 1961.',
  },
  {
    title: 'Réseau local',
    description: 'Accédez à notre réseau de sponsors et partenaires locaux de la Province de Hainaut.',
  },
  {
    title: 'Impact sportif',
    description: 'Soutenez directement le développement du basketball pour les jeunes de la région.',
  },
]

const Sponsors = () => {
  return (
    <section id="sponsoring" className="relative py-24 md:py-32 bg-off-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="section-label mb-4">Nos partenaires</div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white leading-none">
            ILS NOUS<br />
            <span className="text-red-700">SOUTIENNENT</span>
          </h2>
        </motion.div>

        {/* Sponsors grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-20"
        >
          {sponsors.map((sponsor, index) => {
            const imgEl = (
              <img
                src={getImagePath(sponsor.image)}
                alt={sponsor.name}
                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            )

            const inner = sponsor.link ? (
              <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center p-4">
                {imgEl}
              </a>
            ) : sponsor.phone ? (
              <a href={`tel:${sponsor.phone}`} className="w-full h-full flex items-center justify-center p-4">
                {imgEl}
              </a>
            ) : (
              <div className="w-full h-full flex items-center justify-center p-4">
                {imgEl}
              </div>
            )

            return (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="group relative h-24 sm:h-28 md:h-32 bg-white rounded-sm overflow-hidden border border-white/5 hover:border-red-700/40 transition-colors duration-300"
              >
                {inner}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Benefits */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="section-label mb-3">Pourquoi nous soutenir</div>
            <h3 className="font-display text-3xl md:text-4xl text-white">
              DEVENEZ PARTENAIRE
            </h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-6 bg-surface border border-white/8 rounded-sm hover:border-red-700/30 transition-colors duration-300 group"
              >
                <div className="w-1 h-8 bg-red-700 rounded-full mb-5 group-hover:h-10 transition-all duration-300" />
                <h4 className="font-display text-xl text-white mb-2">{benefit.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-red-700 rounded-sm p-6 sm:p-8 md:p-12 overflow-hidden"
        >
          {/* Subtle texture */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }} />

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-white mb-2">
                INTÉRESSÉ PAR UN PARTENARIAT ?
              </h3>
              <p className="text-white/70 text-sm max-w-lg">
                Contactez Henri Maton pour discuter des opportunités de sponsoring adaptées à votre entreprise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="mailto:comiterbbc@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-red-700 font-bold text-sm tracking-wide rounded-sm hover:bg-red-50 transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Envoyer un email
              </a>
              <a
                href="tel:065567006"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent border-2 border-white/40 hover:border-white text-white font-bold text-sm tracking-wide rounded-sm transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                065/56 70 06
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Sponsors

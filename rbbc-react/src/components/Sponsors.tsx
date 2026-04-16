import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { sponsors } from '../data/sponsors'
import { getImagePath } from '../utils/images'

const benefits = [
  { title: 'Visibilité',    description: 'Logo sur nos maillots et notre site, visible par des centaines de personnes.' },
  { title: 'Partenariat',   description: 'Devenez partenaire d\'un club familial bien implanté dans la région du Hainaut depuis plus de 60 ans.' },
  { title: 'Réseau local',  description: 'Accédez à notre réseau de partenaires de la Province de Hainaut.' },
  { title: 'Impact sportif',description: 'Soutenez directement le développement du basketball chez les jeunes.' },
]

const Sponsors = () => (
  <section id="sponsoring" className="relative py-14 md:py-20 bg-off-black overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <div className="section-label mb-4">Nos partenaires</div>
        <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white leading-none">
          ILS NOUS<br />
          <span className="text-red-700">SOUTIENNENT</span>
        </h2>
      </motion.div>

      {/* Logos + CTA side by side */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">

        {/* Logo grid — 2/3 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 grid grid-cols-3 sm:grid-cols-4 gap-3"
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
              <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center p-3 sm:p-4">
                {imgEl}
              </a>
            ) : sponsor.phone ? (
              <a href={`tel:${sponsor.phone}`} className="w-full h-full flex items-center justify-center p-3 sm:p-4">
                {imgEl}
              </a>
            ) : (
              <div className="w-full h-full flex items-center justify-center p-3 sm:p-4">{imgEl}</div>
            )

            return (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="group relative h-20 sm:h-24 bg-white rounded-sm overflow-hidden border border-white/10 hover:border-red-700/40 transition-colors duration-300"
              >
                {inner}
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA panel — 1/3 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative bg-red-700 rounded-sm p-6 sm:p-8 overflow-hidden flex flex-col justify-between min-h-[200px]"
        >
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}
          />
          <div className="relative">
            <h3 className="font-display text-2xl sm:text-3xl text-white mb-3">DEVENEZ PARTENAIRE</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Contactez le comité pour discuter des opportunités de sponsoring adaptées à votre entreprise.
            </p>
          </div>
          <div className="relative mt-6 flex flex-col gap-2.5">
            <Link
              to="/sponsoring"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-red-700 font-bold text-sm rounded-sm hover:bg-red-50 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Voir le dossier
            </Link>
            <a
              href="mailto:comiterbbc@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-white/30 hover:border-white text-white font-bold text-sm rounded-sm transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Envoyer un email
            </a>
            <a
              href="https://wa.me/32479471517"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-white/30 hover:border-white text-white font-bold text-sm rounded-sm transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0479/471 517
            </a>
          </div>
        </motion.div>
      </div>

      {/* Benefits row */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            className="flex items-start gap-4 p-5 bg-surface border border-white/10 rounded-sm hover:border-red-700/30 transition-colors duration-300 group"
          >
            <div className="w-0.5 h-full min-h-[2rem] bg-red-700/60 group-hover:bg-red-700 rounded-full flex-shrink-0 transition-colors duration-300" />
            <div>
              <h4 className="font-display text-lg text-white mb-1">{benefit.title}</h4>
              <p className="text-white/65 text-xs leading-relaxed">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
)

export default Sponsors

import { motion } from 'framer-motion'
import { getImagePath } from '../utils/images'

const values = [
  {
    title: 'Passion',
    description: 'Le basket comme mode de vie, pour les jeunes comme pour les seniors.',
  },
  {
    title: 'Formation',
    description: 'Du minibasket aux adultes, nous développons chaque joueur à son rythme.',
  },
  {
    title: 'Communauté',
    description: 'Un club ancré dans la région de Hainaut, ouvert à tous depuis 1961.',
  },
]

const About = () => (
  <section id="club" className="relative py-14 md:py-20 bg-off-black overflow-hidden">
    {/* Large background number */}
    <div
      className="pointer-events-none select-none absolute -right-8 top-1/2 -translate-y-1/2 font-display text-[20rem] leading-none text-white/[0.025] hidden xl:block"
      aria-hidden="true"
    >
      1961
    </div>

    <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label mb-4">Notre club</div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white leading-none mb-6">
            QUI SOMMES-<br />
            <span className="text-red-700">NOUS ?</span>
          </h2>
          <p className="text-white/55 text-base md:text-lg leading-relaxed mb-4">
            Fondé en <span className="text-white font-semibold">1961</span> à Blaregnies, en Province de Hainaut,
            le <span className="text-white font-semibold">Royal Blaregnies Basket Club</span> est l'un des clubs
            historiques du basketball wallon.
          </p>
          <p className="text-white/40 text-sm md:text-base leading-relaxed mb-10">
            Du minibasket aux équipes seniors en compétition, nous accueillons joueurs débutants et confirmés
            dans une ambiance familiale et exigeante. Notre objectif : donner à chacun les moyens de progresser
            et d'aimer le basket.
          </p>

          {/* Values */}
          <div className="grid sm:grid-cols-3 gap-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group p-4 bg-surface-2 border border-white/10 hover:border-red-700/40 rounded-sm transition-colors duration-300"
              >
                <div className="w-6 h-0.5 bg-red-700 mb-3 group-hover:w-8 transition-all duration-300" />
                <h4 className="font-display text-lg text-white mb-1">{value.title}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — Visual */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative flex flex-col gap-4"
        >
          {/* Main photo */}
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-sm overflow-hidden">
            <img
              src={getImagePath('/accueil1.jpg')}
              alt="Royal Blaregnies Basket Club"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Logo + tagline row */}
          <div className="flex items-center gap-4 p-4 bg-surface-2 border border-white/10 rounded-sm">
            <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-red-700/40 flex-shrink-0">
              <img
                src={getImagePath('/rbbc_icon.jpg')}
                alt="RBBC"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-display text-xl text-white leading-none">Royal Blaregnies Basket Club</p>
              <p className="text-white/35 text-xs mt-1 uppercase tracking-widest">Blaregnies · Province de Hainaut · Belgique</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
)

export default About

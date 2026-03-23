import { motion } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter'

const stats = [
  { value: 6,  suffix: ' ans', label: 'pour débuter' },
  { value: 11, suffix: '',     label: 'équipes actives' },
  { value: 3,  suffix: '',     label: 'équipes féminines' },
  { value: 8,  suffix: '+',    label: 'formateurs' },
]

const StatsBanner = () => (
  <section className="relative bg-red-700 overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}
    />
    <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/15">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.09 }}
            className="bg-red-700 flex flex-col items-center text-center py-8 px-4"
          >
            <div className="font-display text-5xl sm:text-6xl text-white leading-none">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2} />
            </div>
            <p className="mt-2 text-white/60 text-xs uppercase tracking-[0.2em]">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default StatsBanner

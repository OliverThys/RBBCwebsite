import { motion } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter'

const stats = [
  { value: 6,  suffix: ' ans', label: 'pour débuter' },
  { value: 11, suffix: '',     label: 'équipes actives' },
  { value: 3,  suffix: '',     label: 'équipes féminines' },
  { value: 8,  suffix: '+',   label: 'formateurs' },
]

const StatsBanner = () => (
  <section className="relative bg-red-700 overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}
    />
    <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="grid grid-cols-4 divide-x divide-white/20">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.09 }}
            className="flex flex-col items-center text-center py-4 sm:py-7 px-2 sm:px-4"
          >
            <div className="font-display text-2xl sm:text-5xl md:text-6xl text-white leading-none">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2} />
            </div>
            <p className="mt-1 sm:mt-2 text-white/70 text-[9px] sm:text-xs uppercase tracking-wider sm:tracking-[0.18em] leading-tight">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default StatsBanner

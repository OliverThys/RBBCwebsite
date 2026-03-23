import { motion } from 'framer-motion'
import { contactInfo } from '../data/contact'
import { getImagePath } from '../utils/images'

const Contact = () => (
  <section id="contact" className="relative py-14 md:py-20 bg-surface overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <div className="section-label mb-4">Viens nous rejoindre</div>
        <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white leading-none">
          ON T'ATTEND<br />
          <span className="text-red-700">AU RBBC</span>
        </h2>
      </motion.div>

      {/* Main grid */}
      <div className="grid lg:grid-cols-5 gap-6">

        {/* LEFT — Photo gym + adresse (3/5) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 relative min-h-[320px] lg:min-h-[420px] rounded-sm overflow-hidden"
        >
          <img
            src={getImagePath('/adresse.jpg')}
            alt={contactInfo.address.name}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <p className="text-white/70 text-xs uppercase tracking-widest mb-2">{contactInfo.address.name}</p>
            <p className="text-white font-semibold text-lg leading-snug mb-1">{contactInfo.address.street}</p>
            <p className="text-white/80 text-sm mb-5">{contactInfo.address.postalCode} {contactInfo.address.city}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={contactInfo.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white text-sm font-semibold rounded-sm transition-all duration-200 backdrop-blur-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Itinéraire
              </a>
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/8 border border-white/20 text-white/75 text-sm rounded-sm">
                <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Parking jusqu'à 22h
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Contact + CTA (2/5) */}
        <div className="lg:col-span-2 flex flex-col gap-4">

          {/* Committee card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-surface-2 border border-white/10 hover:border-red-700/30 rounded-sm p-6 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-red-700/15 border border-red-700/30 rounded-sm flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{contactInfo.committee.name}</p>
                <p className="text-white/40 text-xs uppercase tracking-widest">Comité</p>
              </div>
            </div>
            <div className="space-y-3">
              <a href={`tel:${contactInfo.committee.phone.replace(/\//g, '')}`} className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-white/5 rounded-sm flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-white/30 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-white/80 group-hover:text-white text-sm transition-colors">{contactInfo.committee.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.committee.email}`} className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-white/5 rounded-sm flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-white/40 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-white/80 group-hover:text-white text-sm transition-colors break-all">{contactInfo.committee.email}</span>
              </a>
            </div>
          </motion.div>

          {/* Red CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 relative bg-red-700 rounded-sm p-6 overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="relative">
              <h3 className="font-display text-2xl sm:text-3xl text-white mb-2">REJOINS LE RBBC</h3>
              <p className="text-white/85 text-sm leading-relaxed">Un club familial ouvert à tous — garçons et filles encadrés par des formateurs passionnés, du minibasket aux seniors.</p>
            </div>
            <div className="relative mt-6 space-y-2.5">
              <a
                href={`mailto:${contactInfo.committee.email}`}
                className="flex items-center justify-center gap-2 w-full py-3 bg-white text-red-700 font-bold text-sm rounded-sm hover:bg-red-50 transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Envoyer un email
              </a>
              <a
                href={`tel:${contactInfo.committee.phone.replace(/\//g, '')}`}
                className="flex items-center justify-center gap-2 w-full py-3 bg-transparent border-2 border-white/30 hover:border-white text-white font-bold text-sm rounded-sm transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appeler
              </a>
              <div className="flex gap-2 pt-1">
                <a href="https://www.facebook.com/BlaregniesBasketClub/" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/10 hover:bg-white/20 rounded-sm text-white text-xs font-semibold transition-colors duration-200" aria-label="Facebook">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
                <a href="https://www.instagram.com/royalblaregniesbasketclub?igsh=MTh4eXVzeGp4Z3lmMw==" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/10 hover:bg-white/20 rounded-sm text-white text-xs font-semibold transition-colors duration-200" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
)

export default Contact

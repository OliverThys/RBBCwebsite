import { motion } from 'framer-motion'
import { contactInfo } from '../data/contact'

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="section-label mb-4">Contactez-nous</div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white leading-none">
            RESTONS EN<br />
            <span className="text-red-700">CONTACT</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Contact cards — left column */}
          <div className="lg:col-span-3 space-y-4">

            {/* Comité card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-surface-2 border border-white/10 rounded-sm p-5 sm:p-6 md:p-8 hover:border-red-700/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-red-700/15 border border-red-700/30 rounded-sm flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-white">Comité</h3>
                  <p className="text-white/50 text-sm">{contactInfo.committee.name}</p>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={`tel:${contactInfo.committee.phone.replace(/\//g, '')}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 bg-white/5 rounded-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white/40 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-widest">Téléphone</p>
                    <p className="text-white font-medium group-hover:text-red-400 transition-colors">{contactInfo.committee.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${contactInfo.committee.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 bg-white/5 rounded-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white/40 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-widest">Email</p>
                    <p className="text-white font-medium group-hover:text-red-400 transition-colors break-all">{contactInfo.committee.email}</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Address card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-surface-2 border border-white/10 rounded-sm p-5 sm:p-6 md:p-8 hover:border-red-700/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-red-700/15 border border-red-700/30 rounded-sm flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-white">Adresse</h3>
                  <p className="text-white/50 text-sm">{contactInfo.address.name}</p>
                </div>
              </div>

              <a
                href={contactInfo.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-8 h-8 bg-white/5 rounded-sm flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white/40 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest">Lieu</p>
                  <p className="text-white font-medium group-hover:text-red-400 transition-colors">
                    {contactInfo.address.street}, {contactInfo.address.postalCode} {contactInfo.address.city}
                  </p>
                </div>
              </a>
            </motion.div>
          </div>

          {/* CTA panel — right column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2 bg-red-700 rounded-sm p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }} />

            <div className="relative">
              <h3 className="font-display text-2xl sm:text-3xl text-white mb-3">REJOIGNEZ LE RBBC</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-8">
                Joueur, coach, bénévole ou sponsor — nous serons ravis de vous accueillir dans notre club.
              </p>

              <div className="space-y-3">
                <a
                  href={`mailto:${contactInfo.committee.email}`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-white text-red-700 font-bold text-sm rounded-sm hover:bg-red-50 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Envoyer un email
                </a>
                <a
                  href={`tel:${contactInfo.committee.phone.replace(/\//g, '')}`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-transparent border-2 border-white/40 hover:border-white text-white font-bold text-sm rounded-sm transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Appeler
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="relative mt-8 pt-6 border-t border-white/20">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Suivez-nous</p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/BlaregniesBasketClub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-sm flex items-center justify-center text-white transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/royalblaregniesbasketclub?igsh=MTh4eXVzeGp4Z3lmMw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-sm flex items-center justify-center text-white transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

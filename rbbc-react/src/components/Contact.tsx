import { motion } from 'framer-motion'
import { contactInfo } from '../data/contact'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 uppercase tracking-wide">
            Contact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comment nous joindre
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8 shadow-lg"
          >
            <div className="w-16 h-16 bg-rbbc-red rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-4 uppercase">
              Comité
            </h3>
            <p className="text-gray-700 mb-2">
              <strong>{contactInfo.committee.name}</strong>
            </p>
            <p className="text-gray-700 mb-2">
              Téléphone :{' '}
              <a
                href={`tel:${contactInfo.committee.phone.replace(/\//g, '')}`}
                className="text-rbbc-red hover:underline"
              >
                {contactInfo.committee.phone}
              </a>
            </p>
            <p className="text-gray-700">
              Email :{' '}
              <a
                href={`mailto:${contactInfo.committee.email}`}
                className="text-rbbc-red hover:underline"
              >
                {contactInfo.committee.email}
              </a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8 shadow-lg"
          >
            <div className="w-16 h-16 bg-rbbc-red rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-4 uppercase">
              Adresse
            </h3>
            <p className="text-gray-700 mb-2">{contactInfo.address.name}</p>
            <p className="text-gray-700 mb-2">{contactInfo.address.street}</p>
            <p className="text-gray-700 mb-6">
              {contactInfo.address.postalCode} {contactInfo.address.city},{' '}
              {contactInfo.address.country}
            </p>
            <a
              href={contactInfo.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-rbbc-red hover:underline font-semibold"
            >
              Voir sur Google Maps
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact


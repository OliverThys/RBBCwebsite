import { motion } from 'framer-motion'
import { contactInfo } from '../data/contact'
import { getImagePath } from '../utils/images'

const Address = () => {
  return (
    <section id="adresse" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 uppercase tracking-wide">
            Notre Adresse
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Retrouvez-nous à la salle omnisports E.Severyns
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8 shadow-lg"
          >
            <div className="mb-6">
              <img
                src={getImagePath('/adresse.jpg')}
                alt="Salle omnisports"
                className="w-full h-64 object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-4 uppercase">
              {contactInfo.address.name}
            </h3>
            <p className="text-gray-700 mb-2">{contactInfo.address.street}</p>
            <p className="text-gray-700 mb-4">
              {contactInfo.address.postalCode} {contactInfo.address.city}, {contactInfo.address.country}
            </p>
            <p className="text-gray-700 mb-6 font-medium">
              Parking accessible jusqu'à 22h
            </p>
            <a
              href={contactInfo.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-rbbc-red text-white font-semibold rounded-lg hover:bg-rbbc-red-dark transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
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
              Itinéraire
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Address


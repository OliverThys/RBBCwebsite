import { useRef, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import SponsoringNavbar from './components/SponsoringNavbar'
import Footer from './components/Footer'
import { getImagePath } from './utils/images'

const RED  = '#C41230'
const DARK = '#09101f'


// ─── Scroll-triggered fade-up wrapper ──────────────────────────────────────
const FadeUp = ({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Simple carousel ────────────────────────────────────────────────────────
const CAROUSEL_H = 260 // px — hauteur fixe, ~20% sous proportion naturelle

const Carousel = ({ images }: { images: { src: string; alt: string }[] }) => {
  const [idx, setIdx] = useState(0)
  const n = images.length
  const prev = () => setIdx(i => (i - 1 + n) % n)
  const next = () => setIdx(i => (i + 1) % n)

  // Auto-play
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % n), 3000)
    return () => clearInterval(t)
  }, [n])

  return (
    <div className="relative">
      {/* Conteneur hauteur fixe — la page ne bouge pas */}
      <div
        className="relative overflow-hidden bg-gray-50"
        style={{ height: CAROUSEL_H }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={idx}
            src={images[idx].src}
            alt={images[idx].alt}
            className="absolute inset-0 w-full h-full object-contain"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </AnimatePresence>

        {/* Flèches */}
        <button
          onClick={prev}
          aria-label="Photo précédente"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-white text-2xl font-bold z-10"
          style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.7)')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.45)')}
        >‹</button>
        <button
          onClick={next}
          aria-label="Photo suivante"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-white text-2xl font-bold z-10"
          style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.7)')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.45)')}
        >›</button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className="w-2 h-2 rounded-full transition-colors"
            style={{ backgroundColor: i === idx ? RED : '#D1D5DB' }}
          />
        ))}
      </div>
    </div>
  )
}

// ─── Section label ──────────────────────────────────────────────────────────
const SectionLabel = ({ num, title }: { num: string; title: string }) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-[11px] font-bold tracking-[0.3em] uppercase" style={{ color: RED }}>
        {num.padStart(2, '0')}
      </span>
      <div className="h-px w-10" style={{ backgroundColor: RED }} />
    </div>
    <h2
      className="text-4xl sm:text-5xl uppercase leading-tight tracking-wide"
      style={{ fontFamily: "'Bebas Neue', sans-serif", color: DARK }}
    >
      {title}
    </h2>
  </div>
)

// ─── Pack card ──────────────────────────────────────────────────────────────
type Benefit = { category: string; text: string }

type Pack = {
  name: string
  tagline: string
  price: string
  accentColor: string
  headerGradient: string
  benefits: Benefit[]
  highlighted?: boolean
}

const PackCard = ({ pack, delay }: { pack: Pack; delay: number }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative flex flex-col overflow-hidden ${pack.highlighted ? 'shadow-2xl sm:scale-[1.02]' : 'shadow-md'}`}
      style={{
        border: `1px solid ${pack.accentColor}30`,
      }}
    >
      {/* Metallic header */}
      <div className="px-6 py-6 relative" style={{ background: pack.headerGradient }}>
        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 mb-1">Pack</div>
        <div
          className="text-2xl font-black uppercase tracking-tight text-white"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {pack.name}
        </div>
        <div className="text-sm text-white/70 mt-1 italic">{pack.tagline}</div>
      </div>

      {/* Price */}
      <div className="px-6 py-4 border-b" style={{ borderColor: '#e5e7eb', backgroundColor: '#f9fafb' }}>
        <div className="flex items-baseline gap-1.5">
          <span
            className="text-5xl font-black leading-none"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK }}
          >
            {pack.price}
          </span>
          <span className="text-sm text-gray-600 font-medium">€ / an</span>
        </div>
        <div className="text-[10px] text-gray-500 mt-1">
          Facture fournie · comm. : sponsor RBBC + pack choisi
        </div>
      </div>

      {/* Benefits */}
      <div className="px-6 py-5 flex-1 bg-white space-y-3">
        {pack.benefits.map((b, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <div
              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
              style={{ backgroundColor: pack.accentColor }}
            />
            <div className="text-sm leading-relaxed text-gray-800">
              {b.category && (
                <span className="font-semibold text-gray-900">{b.category} : </span>
              )}
              {b.text}
            </div>
          </div>
        ))}
      </div>

    </motion.div>
  )
}

// ─── Page ───────────────────────────────────────────────────────────────────
const SponsoringPage = () => {
  const packs: Pack[] = [
    {
      name: 'Partenaire',
      tagline: 'Affirmer votre présence locale',
      price: '250',
      accentColor: '#cd7f32',
      headerGradient: 'linear-gradient(135deg, #6b3410 0%, #cd7f32 55%, #8b4c1a 100%)',
      benefits: [
        { category: 'Salle', text: 'Logo sur le panneau collectif "Nos Partenaires" (entrée de salle).' },
        { category: 'Digital', text: 'Mention de remerciement dans les publications saisonnières sur nos réseaux sociaux.' },
        { category: 'Événement', text: 'Invitation à la soirée de fin de saison du club.' },
      ],
    },
    {
      name: 'Privilège',
      tagline: 'Visibilité dynamique & continue',
      price: '450',
      accentColor: '#c0c0c0',
      headerGradient: 'linear-gradient(135deg, #555 0%, #c0c0c0 55%, #777 100%)',
      highlighted: true,
      benefits: [
        { category: '', text: 'Tous les avantages du Pack Partenaire.' },
        { category: 'Salle', text: 'Présence visuelle du partenaire dans l’enceinte sportive, selon les possibilités validées.' },
        { category: 'Digital', text: 'Logo sur les visuels "Résultats du Week-end". Publication dédiée "Présentation du partenaire" par saison.' },
        { category: 'Site web', text: 'Logo affiché dans la section "Nos Partenaires" du site officiel, avec lien cliquable vers votre site.' },
        { category: 'Buvette', text: "Logo diffusé sur l'écran TV pendant les matchs à domicile." },
      ],
    },
    {
      name: 'Premium',
      tagline: 'Impact maximal, relation privilégiée',
      price: '750',
      accentColor: '#ffd700',
      headerGradient: 'linear-gradient(135deg, #9a6f00 0%, #ffd700 55%, #c8a800 100%)',
      benefits: [
        { category: '', text: 'Tous les avantages du Pack Privilège.' },
        { category: 'Salle', text: 'Visibilité renforcée dans les espaces de communication du club.' },
        { category: 'Digital Premium', text: 'Logo systématique sur le "Programme du Week-end".' },
        { category: 'Site web', text: 'Logo mis en avant (taille prioritaire) dans la section "Nos Partenaires" du site officiel, avec lien cliquable vers votre site.' },
        { category: 'Options complémentaires', text: 'Options complémentaires à forte valeur ajoutée disponibles, en concertation avec le référent sponsoring.' },
      ],
    },
  ]

  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: "'Barlow', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Barlow:wght@400;500;600;700&family=Bebas+Neue&display=swap');
        .hero-players { object-position: center top; }
      `}</style>

      <SponsoringNavbar />

      {/* ══ HERO — Fond parquet, joueurs sans background ════════════════════ */}
      <section
        className="relative overflow-hidden h-[42vh] sm:h-[58vh] max-h-[520px]"
        style={{
          minHeight: '220px',
          backgroundColor: '#d4a050',
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent 0px, transparent 62px,
              rgba(0,0,0,0.06) 62px, rgba(0,0,0,0.06) 64px
            ),
            repeating-linear-gradient(
              0deg,
              transparent 0px, transparent 7px,
              rgba(0,0,0,0.018) 7px, rgba(0,0,0,0.018) 8px
            ),
            linear-gradient(170deg, #e8bc72 0%, #d4a050 40%, #c8923c 70%, #d0a048 100%)
          `,
        }}
      >
        <motion.img
          src={getImagePath('/headerrbbcjeunes-nobg.png')}
          alt="Équipe RBBC"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 65%' }}
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Voile bas-gauche — protège uniquement la zone texte */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 75% 55% at 0% 100%, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.35) 55%, transparent 100%)',
          }}
        />

        {/* Contenu — ancré en bas à gauche */}
        <div className="relative h-full flex flex-col justify-end" style={{ paddingBottom: 'clamp(20px, 5vh, 47px)' }}>
          <div className="max-w-5xl mx-auto px-5 sm:px-14 w-full">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Titre principal : DOSSIER DE PARTENARIAT */}
              <h1
                className="font-black uppercase leading-none tracking-tight"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(2.4rem, 9vw, 6.5rem)',
                  color: '#ffffff',
                  textShadow: '0 2px 6px rgba(0,0,0,0.8), 0 4px 24px rgba(0,0,0,0.5)',
                }}
              >
                Dossier de
              </h1>
              <h1
                className="font-black uppercase leading-none tracking-tight mb-5"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(2.4rem, 9vw, 6.5rem)',
                  color: RED,
                  textShadow: '0 2px 6px rgba(0,0,0,0.75), 0 4px 24px rgba(0,0,0,0.45)',
                }}
              >
                Partenariat
              </h1>

              {/* Saison */}
              <p
                className="text-sm font-semibold uppercase tracking-[0.3em]"
                style={{ color: 'rgba(255,255,255,0.9)', textShadow: '0 1px 6px rgba(0,0,0,0.4)' }}
              >
                Saison 2026–2027
              </p>
            </motion.div>
          </div>
        </div>

      </section>

      <main>

        {/* ══ SECTION 1 — gris-bleu clair ══════════════════════════════════ */}
        <div style={{ backgroundColor: '#edf2f8' }}>
          <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16">
        <FadeUp>
          <SectionLabel num="1" title="Le RBBC : Un Pilier Sportif depuis 1961" />

          <div className="grid sm:grid-cols-5 gap-10 items-start">
            <div className="sm:col-span-3 space-y-4 text-gray-700 leading-relaxed text-[15px]">
              <blockquote
                className="text-2xl font-black italic leading-snug border-l-4 pl-5 mb-6"
                style={{
                  borderColor: RED,
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: DARK,
                }}
              >
                « Plus qu'un club, une institution locale. »
              </blockquote>

              <p>
                Fondé en 1961 à l'initiative de Stéphane Pilaete, le Royal Blaregnies Basket
                Club traverse les décennies avec une{' '}
                <strong className="text-gray-900">mission inchangée</strong> :{' '}
                <strong className="text-gray-900">
                  former des joueuses et joueurs dans un esprit de fair-play, de dépassement
                  de soi et de cohésion
                </strong>
                .
              </p>

              <p>
                Aujourd'hui, le RBBC est un{' '}
                <strong className="text-gray-900">acteur majeur de la vie sociale</strong> de
                l'entité de Quévy. Notre salle omnisports Emile Severyns est la{' '}
                <strong className="text-gray-900">seule infrastructure</strong> de ce type
                regroupant les habitants des{' '}
                <strong className="text-gray-900">10 villages</strong> de la commune.
              </p>

              <p className="font-semibold" style={{ color: RED }}>
                Chaque week-end, ce sont des dizaines de familles, de jeunes et de supporters
                qui s'y rassemblent.
              </p>

              <p>
                Avec plus de 10 équipes des U10 aux U18, 2 équipes d'hommes et une de dames,
                ce sont près de{' '}
                <strong className="text-gray-900">120 matchs qui se jouent à domicile</strong>{' '}
                soutenus par de nombreux supporters.
              </p>

              <p className="font-bold text-gray-900">
                Le club regroupe actuellement 200 affiliés et leurs familles.
              </p>
            </div>

            <div className="sm:col-span-2">
              <img
                src={getImagePath('/media/section1-photo.jpg')}
                alt="Équipe RBBC"
                className="w-full h-72 object-cover"
                style={{ objectPosition: 'center 25%' }}
              />
            </div>
          </div>
        </FadeUp>
          </div>
        </div>

        {/* ══ POURQUOI SPONSORISER — bleu légèrement plus soutenu ══════════ */}
        <div style={{ backgroundColor: '#e2eaf4' }}>
          <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16">
        <FadeUp>
          <div className="border-l-4 pl-6 mb-8" style={{ borderColor: RED }}>
            <h3
              className="text-2xl font-black uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK }}
            >
              Sponsoriser le RBBC, c'est :
            </h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                title: 'Image & Valeurs',
                text: "Associer votre image aux valeurs positives du sport : santé, jeunesse, cohésion d'équipe.",
              },
              {
                title: 'Visibilité Ciblée',
                text: "Bénéficier d'une exposition ciblée sur l'ensemble de la population de Quévy et ses 10 villages.",
              },
              {
                title: 'Engagement Local',
                text: 'Soutenir concrètement la formation des jeunes et la vie associative : fancy-fair, coupe du Hainaut, soirées, bingo, fête à Beria de Quévy, souper annuel...',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6"
                style={{ backgroundColor: '#ffffff', borderTop: `3px solid ${RED}` }}
              >
                <div
                  className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
                  style={{ color: RED }}
                >
                  0{i + 1}
                </div>
                <div
                  className="font-black text-base uppercase mb-3"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK }}
                >
                  {item.title}
                </div>
                <div className="text-sm text-gray-700 leading-relaxed">{item.text}</div>
              </div>
            ))}
          </div>
        </FadeUp>
          </div>
        </div>

        {/* ══ SECTION 2 — gris-bleu clair ══════════════════════════════════ */}
        <div style={{ backgroundColor: '#edf2f8' }}>
          <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16">
        <FadeUp>
          <SectionLabel num="2" title="Votre Visibilité : Une Exposition Unique" />

          <p className="text-gray-700 mb-10 text-[15px] leading-relaxed">
            En devenant partenaire, votre entreprise, restaurant ou commerce bénéficie d'une
            exposition multi-supports au cœur de l'action :
          </p>

          <div className="grid sm:grid-cols-3 gap-5 mb-10 items-start">
            {[
              {
                title: 'Sur le terrain',
                sub: 'Salle Emile Severyns',
                items: [
                  'Supports de visibilité dans la salle, selon les modalités en vigueur.',
                  'Totems et affiches dans les zones de passage.',
                ],
                img: getImagePath('/media/visibilite-terrain.jpg'),
              },
              {
                title: 'Sur le digital',
                sub: 'Réseaux Sociaux',
                items: [
                  'Logo intégré aux visuels hebdomadaires (programme du week-end, résultats du match, rendez-vous dédiés).',
                  'Publication dédiée "Présentation du partenaire" par saison.',
                ],
                img: getImagePath('/media/visibilite-digital.jpg'),
                contain: true,
              },
              {
                title: 'En buvette',
                sub: 'Convivialité',
                items: [
                  "Diffusion de votre logo ou vos offres sur l'écran TV pendant les matchs et les temps de repas.",
                ],
                img: getImagePath('/media/visibilite-buvette.jpg'),
              },
            ].map((channel, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="border border-gray-100 overflow-hidden flex flex-col">
                  <img
                    src={channel.img}
                    alt={channel.title}
                    className={`w-full aspect-square ${'contain' in channel && channel.contain ? 'object-contain bg-gray-50' : 'object-cover'}`}
                  />
                  <div className="p-5">
                    <div className="mb-4">
                      <div
                        className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-1"
                        style={{ color: RED }}
                      >
                        {channel.sub}
                      </div>
                      <div
                        className="font-black text-xl uppercase leading-tight"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK }}
                      >
                        {channel.title}
                      </div>
                    </div>
                    <ul className="space-y-2 flex-1">
                      {channel.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-gray-700 leading-snug"
                        >
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: RED }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Carousel — vie associative & visuels */}
          <Carousel images={[
            { src: getImagePath('/media/vie-asso-1.jpg'), alt: 'Kermesse' },
            { src: getImagePath('/media/vie-asso-2.jpg'), alt: 'Soirée club' },
            { src: getImagePath('/media/vie-asso-3.jpg'), alt: 'Événement' },
            { src: getImagePath('/media/equipe-1.jpg'),   alt: 'Visuel match dames' },
            { src: getImagePath('/media/equipe-2.jpg'),   alt: 'Coupe du Hainaut' },
            { src: getImagePath('/media/equipe-3.jpg'),   alt: 'Kermesse été' },
            { src: getImagePath('/media/equipe-4.jpg'),   alt: 'Soirée manille' },
            { src: getImagePath('/media/equipe-6.jpg'),   alt: 'Équipes RBBC' },
          ]} />
          <p className="text-xs italic text-center text-gray-600 mt-3">
            Vie associative participative : le club est très représenté et populaire.
          </p>
        </FadeUp>
          </div>
        </div>

        {/* ══ SECTION 3 — bleu moyen ════════════════════════════════════════ */}
        <div id="formules" style={{ backgroundColor: '#dce6f2' }}>
          <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16">
          <FadeUp>
            <SectionLabel num="3" title="Nos Formules de Partenariat" />
            <p className="text-gray-700 mb-10 text-[15px]">
              Trois niveaux d'engagement pour s'adapter à vos objectifs.
            </p>
          </FadeUp>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 items-start">
            {packs.map((pack, i) => (
              <PackCard key={i} pack={pack} delay={i * 0.12} />
            ))}
          </div>
          </div>
        </div>

        {/* ══ GALERIE ÉQUIPES — bleu soutenu ═══════════════════════════════ */}
        <div style={{ backgroundColor: '#cfdaec' }}>
          <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16">
          <FadeUp>
            <h3
              className="text-3xl font-black uppercase text-center mb-8"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: RED }}
            >
              Faites partie de notre équipe gagnante !
            </h3>
            <img
              src={getImagePath('/media/equipe-5.jpg')}
              alt="Équipes RBBC"
              className="h-auto block mx-auto"
              style={{ width: '80%' }}
            />
          </FadeUp>
          </div>
        </div>

        {/* ══ SECTION 4 — CTA / CONTACT — sombre ══════════════════════════ */}
        <FadeUp>
          <section
            id="contact"
            className="relative overflow-hidden"
            style={{ backgroundColor: DARK }}
          >
            {/* Subtle grid texture */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,1) 39px, rgba(255,255,255,1) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,1) 39px, rgba(255,255,255,1) 40px)',
              }}
            />

            <div className="relative px-5 sm:px-12 py-12 sm:py-16 max-w-5xl mx-auto">
              <div
                className="text-[10px] uppercase tracking-[0.35em] font-bold mb-3"
                style={{ color: RED }}
              >
                04
              </div>
              <h2
                className="text-5xl sm:text-6xl font-black uppercase mb-3 text-white leading-tight"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Rejoignez l'équipe
              </h2>
              <p className="text-white/80 text-base mb-10 max-w-lg leading-relaxed">
                Votre soutien permet directement de financer le matériel sportif, les
                inscriptions aux championnats et l'organisation d'événements pour nos jeunes.
              </p>

              {/* Contact grid */}
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="space-y-4">
                  {[
                    { label: 'Club', val: 'Royal Blaregnies Basket Club (RBBC)' },
                    {
                      label: 'Adresse',
                      val: 'Salle Emile Severyns, Rue de Sars, 7040 Blaregnies',
                    },
                    {
                      label: 'Compte bancaire',
                      val: 'BE31 0003 3688 6555 — comm. : sponsor RBBC + pack choisi (facture fournie)',
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="pb-4 border-b"
                      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                    >
                      <div className="text-[10px] uppercase tracking-wider text-white/60 mb-1">
                        {item.label}
                      </div>
                      <div className="text-sm text-white/90 font-medium leading-snug">
                        {item.val}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {[
                    {
                      label: 'Site web',
                      href: 'https://www.rbbc.be',
                      val: 'www.rbbc.be',
                    },
                    {
                      label: 'Email',
                      href: 'mailto:comiterbbc@gmail.com',
                      val: 'comiterbbc@gmail.com',
                    },
                    {
                      label: 'Téléphone / WhatsApp',
                      href: 'https://wa.me/32479471517',
                      val: '0479 / 471 517 (sponsoring uniquement)',
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="pb-4 border-b"
                      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                    >
                      <div className="text-[10px] uppercase tracking-wider text-white/60 mb-1">
                        {item.label}
                      </div>
                      <a
                        href={item.href}
                        className="text-sm font-semibold transition-opacity hover:opacity-75"
                        style={{ color: RED }}
                      >
                        {item.val}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a
                  href="mailto:comiterbbc@gmail.com?subject=Demande d'information - Partenariat RBBC"
                  className="inline-flex items-center justify-center px-8 py-4 font-bold uppercase tracking-wider text-sm text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: RED }}
                >
                  Devenir partenaire
                </a>
                <a
                  href="https://wa.me/32479471517"
                  className="inline-flex items-center justify-center px-8 py-4 font-bold uppercase tracking-wider text-sm transition-colors hover:bg-white/5"
                  style={{
                    border: '1px solid rgba(255,255,255,0.3)',
                    color: 'rgba(255,255,255,0.9)',
                  }}
                >
                  Nous contacter sur WhatsApp
                </a>
              </div>

              <blockquote
                className="pt-8 border-t text-sm italic leading-relaxed max-w-lg"
                style={{
                  borderColor: 'rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.6)',
                }}
              >
                « Le talent permet de gagner des matchs, mais le travail d'équipe et
                l'intelligence permettent de gagner les championnats. » — Michael Jordan
              </blockquote>
            </div>
          </section>
        </FadeUp>

      </main>


      <Footer />
    </div>
  )
}

export default SponsoringPage

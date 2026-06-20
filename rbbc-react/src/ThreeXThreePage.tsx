import { useRef, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getImagePath } from './utils/images'
import Footer from './components/Footer'

const ORANGE = '#EA580C'
const DARK = '#0B0F1A'
const RED = '#DC2626'

// ─── Fade-up sélectif (hero + moments clés uniquement) ──────────────────────
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
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Eyebrow éditorial (remplace SectionTag générique) ──────────────────────
const Eyebrow = ({ label }: { label: string }) => (
  <div
    className="text-[10px] font-bold uppercase tracking-[0.35em] mb-4"
    style={{ color: ORANGE }}
  >
    {label}
  </div>
)

// ─── Navbar ──────────────────────────────────────────────────────────────────
const ThreeNavbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #E5E7EB',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-orange-600/50 group-hover:ring-orange-500 transition-all duration-200">
              <img src={getImagePath('/rbbc_icon.jpg')} alt="RBBC" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block leading-none">
              <div className="font-display text-xl tracking-wide" style={{ color: DARK }}>RBBC</div>
              <div className="text-[10px] uppercase tracking-widest font-medium" style={{ color: '#9CA3AF' }}>
                Royal Blaregnies
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            <span
              className="text-[10px] font-bold uppercase tracking-[0.3em] px-3 py-1"
              style={{ color: ORANGE, border: `1px solid ${ORANGE}50`, backgroundColor: `${ORANGE}08` }}
            >
              Street Basket 3×3 · 28 juin
            </span>
          </div>

          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 group"
            style={{ color: '#6B7280' }}
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline">Retour au site</span>
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}

// ─── Countdown ───────────────────────────────────────────────────────────────
const Countdown = ({ light = false, large = false }: { light?: boolean; large?: boolean }) => {
  const target = new Date('2026-06-28T09:00:00')
  const [diff, setDiff] = useState(target.getTime() - Date.now())

  useEffect(() => {
    const id = setInterval(() => setDiff(target.getTime() - Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  if (diff <= 0) return null

  const days = Math.floor(diff / 86400000)
  const hours = Math.floor((diff % 86400000) / 3600000)
  const mins = Math.floor((diff % 3600000) / 60000)
  const secs = Math.floor((diff % 60000) / 1000)

  const numSize = large ? 'clamp(3.5rem, 7vw, 6rem)' : 'clamp(2.2rem, 5vw, 3rem)'
  const sepSize = large ? 'clamp(2.5rem, 5vw, 4rem)' : '1.8rem'

  const Block = ({ val, label }: { val: number; label: string }) => (
    <div className="flex flex-col items-center">
      <span
        className="font-black leading-none tabular-nums"
        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: numSize, color: light ? DARK : '#ffffff' }}
      >
        {String(val).padStart(2, '0')}
      </span>
      <span className="text-[10px] uppercase tracking-widest mt-1" style={{ color: light ? '#9CA3AF' : 'rgba(255,255,255,0.45)' }}>
        {label}
      </span>
    </div>
  )

  const Sep = () => (
    <span
      className="font-black mb-4"
      style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: sepSize, color: light ? '#D1D5DB' : 'rgba(255,255,255,0.3)' }}
    >
      :
    </span>
  )

  return (
    <div className="flex items-end gap-4 sm:gap-6">
      <Block val={days} label="jours" />
      <Sep />
      <Block val={hours} label="heures" />
      <Sep />
      <Block val={mins} label="min" />
      <Sep />
      <Block val={secs} label="sec" />
    </div>
  )
}

// ─── Logo sponsor (strip propre, sans card) ───────────────────────────────────
const SponsorLogo = ({ name, file }: { name: string; file: string }) => {
  const [hasImg, setHasImg] = useState(true)
  return (
    <div className="flex items-center justify-center">
      {hasImg ? (
        <img
          src={getImagePath(`/media/3x3/${file}`)}
          alt={name}
          className="h-10 w-auto max-w-[130px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
          onError={() => setHasImg(false)}
        />
      ) : (
        <span className="text-sm font-bold uppercase tracking-wide text-gray-400">{name}</span>
      )}
    </div>
  )
}

// ─── Hero content (partagé mobile/desktop) ───────────────────────────────────
const HeroContent = ({ large }: { large: boolean }) => (
  <>
    <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
      <span
        className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-white"
        style={{ backgroundColor: RED }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
        Inscriptions complètes
      </span>
      <span
        className="inline-flex items-center px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em]"
        style={{ border: `1px solid ${ORANGE}`, color: ORANGE }}
      >
        28 juin 2026
      </span>
    </div>

    <div className="text-[11px] font-semibold uppercase tracking-[0.35em] mb-4" style={{ color: '#9CA3AF' }}>
      Le RBBC & MDJ Le Terrier organisent le
    </div>

    <div className="mb-6">
      <h1
        className="uppercase leading-[0.88] block"
        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: large ? 'clamp(2.8rem, 5.5vw, 5.5rem)' : 'clamp(2.6rem, 9vw, 4rem)', color: DARK }}
      >
        Tournoi de
      </h1>
      <h1
        className="uppercase leading-[0.88] block"
        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: large ? 'clamp(2.8rem, 5.5vw, 5.5rem)' : 'clamp(2.6rem, 9vw, 4rem)', color: ORANGE }}
      >
        Street Basket
      </h1>
      <h1
        className="uppercase leading-[0.88] block"
        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: large ? 'clamp(2.8rem, 5.5vw, 5.5rem)' : 'clamp(2.6rem, 9vw, 4rem)', color: DARK }}
      >
        <span style={{ WebkitTextStroke: `2px ${DARK}`, color: 'transparent' }}>3</span>
        <span>×</span>
        <span style={{ WebkitTextStroke: `2px ${DARK}`, color: 'transparent' }}>3</span>
      </h1>
    </div>

    <div className="flex items-center justify-center gap-2 mb-6">
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke={ORANGE} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span
        className="font-bold uppercase tracking-wide"
        style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.1rem', color: '#374151' }}
      >
        Place de Quévy-le-Petit
      </span>
    </div>

    <div className="mb-6 flex flex-col items-center">
      <div className="text-[10px] uppercase tracking-[0.3em] mb-3" style={{ color: '#9CA3AF' }}>
        Compte à rebours
      </div>
      <Countdown light large={large} />
    </div>

    <p className="text-sm font-bold uppercase italic" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#9CA3AF' }}>
      Viens jouer, t'amuser et partager — Ambiance 100% Street !
    </p>
  </>
)

// ─── Page ────────────────────────────────────────────────────────────────────
const ThreeXThreePage = () => {
  const programme = [
    {
      time: 'Toute la journée',
      titre: 'Tournois 3×3',
      texte:
        "Les équipes s'affrontent sur demi-terrain dans un format rapide, intense et spectaculaire. Six catégories, des matchs qui s'enchaînent et une ambiance de feu garantie du matin jusqu'à la remise des prix.",
    },
    {
      time: 'Toute la journée',
      titre: 'Initiation Hip-Hop',
      texte:
        "Des initiations hip-hop sont proposées tout au long de la journée pour les curieux de tout âge. Moves, flow et culture urbaine — pas besoin d'être danseur pour participer et se laisser porter par l'ambiance.",
    },
    {
      time: 'Toute la journée',
      titre: 'Petite Restauration',
      texte:
        "Des partenaires locaux assurent la restauration sur place. Snacks, boissons et petite faim : de quoi tenir toute la journée sans quitter la place.",
    },
    {
      time: 'Dès la soirée',
      titre: 'Soirée DJ — MDJ Aulnois',
      texte:
        "La Maison des Jeunes d'Aulnois prend les platines pour une soirée hip-hop qui prolonge la journée en ambiance 100% street. Urban beats, bonne humeur et une place qui vibre jusqu'en soirée.",
    },
  ]

  const categories = [
    { cat: 'U14', detail: 'Hommes & Filles', desc: 'Né(e)s en 2012 et après' },
    { cat: 'U16 – U18', detail: 'Hommes & Filles', desc: 'Né(e)s entre 2008 et 2011' },
    { cat: 'Séniors Hommes', detail: 'Open', desc: 'À partir de 19 ans' },
    { cat: 'Séniors Dames', detail: 'Open', desc: 'À partir de 19 ans' },
  ]

  const sponsors = [
    { name: 'Le Soog', file: 'soho_horizontal.svg' },
    { name: 'Feta Gourmande', file: 'Fetagourmandelogo.png' },
    { name: 'The Play', file: 'theplay-logo.jpg' },
    { name: 'Fleurs Berthaut', file: 'fleurs berthaut logo.jpg' },
    { name: 'DJC Construct', file: 'DJCconstruct-logo.svg' },
    { name: 'Van Puy', file: 'VanPuy Logo.jpg' },
  ]

  const bonsCadeaux = [
    { name: "Chant d'Éole", file: 'chant-éole-logo.jpg' },
    { name: 'Intersport', file: 'intersport logo.svg' },
    { name: 'New Jump', file: 'logo-newjump-1024x508.png' },
  ]

  return (
    <div style={{ fontFamily: "'Barlow', sans-serif" }} className="bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@700;800;900&family=Barlow:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&display=swap');
        .court-pattern {
          background-color: #080c18;
          background-image:
            linear-gradient(rgba(234,88,12,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(234,88,12,0.05) 1px, transparent 1px);
          background-size: 52px 52px;
        }
      `}</style>

      <ThreeNavbar />

      {/* ══ HERO ════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">

        {/* ─── DESKTOP (≥ 1024px) ──────────────────────────────────────────── */}
        <div className="hidden lg:block" style={{ minHeight: '100vh' }}>
          <div className="absolute inset-0 bg-white" />
          <div className="absolute top-0 right-0 bottom-0" style={{ width: '35%', backgroundColor: '#080c18' }} />
          <div
            className="absolute top-0 bottom-0"
            style={{ left: 'calc(65% - 16px)', width: '32px', backgroundColor: ORANGE, transform: 'skewX(-2.5deg)', zIndex: 20 }}
          />

          <div className="relative grid grid-cols-[65fr_auto_35fr]" style={{ minHeight: '100vh', zIndex: 10 }}>
            <motion.div
              className="flex flex-col items-center justify-center text-center px-16 xl:px-24 py-28"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <HeroContent large />
            </motion.div>

            <div style={{ width: '32px' }} />

            <motion.div
              className="flex items-center justify-center"
              style={{ backgroundColor: '#080c18', padding: '5rem 3rem 5rem 2.5rem' }}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img
                src={getImagePath('/media/3x3-affiche.jpg')}
                alt="Affiche officielle — Tournoi Street Basket 3×3"
                style={{ maxHeight: '78vh', width: 'auto', transform: 'rotate(-2deg)', boxShadow: `0 0 50px rgba(234,88,12,0.35), 0 35px 70px rgba(0,0,0,0.9)` }}
              />
            </motion.div>
          </div>
        </div>

        {/* ─── MOBILE / TABLETTE (< 1024px) ────────────────────────────────── */}
        <div className="lg:hidden flex flex-col" style={{ minHeight: '100vh' }}>
          <div className="bg-white flex flex-col items-center justify-center text-center px-6 sm:px-12 pt-24 pb-10">
            <HeroContent large={false} />
          </div>
          <div
            className="flex-1 flex items-center justify-center py-10"
            style={{ backgroundColor: '#080c18', minHeight: '42vh' }}
          >
            <img
              src={getImagePath('/media/3x3-affiche.jpg')}
              alt="Affiche officielle — Tournoi Street Basket 3×3"
              style={{ maxHeight: '38vh', width: 'auto', boxShadow: `0 0 30px rgba(234,88,12,0.3), 0 20px 40px rgba(0,0,0,0.8)` }}
            />
          </div>
        </div>
      </section>

      {/* ══ ACCROCHE ÉDITORIALE ═════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <motion.p
            className="font-black uppercase leading-[1.05]"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)',
              color: DARK,
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Basket, hip-hop, graffiti et DJ —{' '}
            <span style={{ color: ORANGE }}>Quévy-le-Petit</span>{' '}
            reçoit le street le temps d'un dimanche.
          </motion.p>
          <motion.div
            className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-xs uppercase tracking-[0.25em] text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <span>Dimanche 28 juin 2026</span>
            <span className="text-gray-200">·</span>
            <span>Place de Quévy-le-Petit</span>
            <span className="text-gray-200">·</span>
            <span>Entrée libre</span>
          </motion.div>
        </div>
      </section>

      {/* ══ ARTICLE CORPS + INFOS ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="grid md:grid-cols-[1fr_260px] gap-12 lg:gap-20 items-start">

            {/* Prose éditoriale */}
            <div className="space-y-5 text-[16px] leading-relaxed" style={{ color: '#3D3D3D' }}>
              <p>
                Le <strong className="text-gray-900">Royal Blaregnies Basket Club</strong> et{' '}
                <strong className="text-gray-900">MDJ Le Terrier</strong> s'associent pour organiser un grand
                tournoi de <strong className="text-gray-900">street basket 3×3</strong> le dimanche{' '}
                <strong className="text-gray-900">28 juin 2026</strong>, sur la Place de{' '}
                <strong className="text-gray-900">Quévy-le-Petit</strong>.
              </p>
              <p>
                Un événement ouvert à tous. Compétiteurs, familles, curieux — la place devient, le temps d'un
                dimanche, un terrain de jeu, de culture urbaine et de rencontres. Basket, hip-hop, initiations,
                restauration locale et soirée DJ pour finir en beauté.
              </p>
              <p>
                Avec le soutien de la <strong className="text-gray-900">Commune de Quévy</strong> et de nombreux
                partenaires locaux, l'événement s'annonce festif et accessible à toute la famille.
              </p>
              <p className="font-bold" style={{ color: RED }}>
                Les inscriptions sont complètes — rendez-vous le 28 juin pour encourager les joueurs.
              </p>
            </div>

            {/* Infos encart style magazine */}
            <div className="border-l-4 pl-6 space-y-7" style={{ borderColor: ORANGE }}>
              {[
                { label: 'Date', value: 'Dimanche 28 juin 2026' },
                { label: 'Lieu', value: 'Place de Quévy-le-Petit' },
                { label: 'Participation', value: '15 € / équipe' },
                { label: 'Spectateurs', value: 'Entrée libre' },
                { label: 'Contact', value: 'blaregnies3x3@gmail.com' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-[10px] uppercase tracking-[0.25em] font-semibold text-gray-400 mb-0.5">
                    {item.label}
                  </div>
                  {item.label === 'Contact' ? (
                    <a
                      href={`mailto:${item.value}`}
                      className="font-bold text-sm hover:underline"
                      style={{ color: ORANGE }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="font-bold text-[15px]" style={{ color: DARK }}>{item.value}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROGRAMME ÉDITORIAL ═════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <FadeUp>
            <Eyebrow label="Programme" />
            <h2
              className="font-black uppercase mb-12"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 8vw, 5.5rem)', color: DARK, lineHeight: 1 }}
            >
              La journée
            </h2>
          </FadeUp>

          <div className="divide-y divide-gray-100">
            {programme.map((item, i) => (
              <div key={i} className="py-10 grid sm:grid-cols-[160px_1fr] gap-3 sm:gap-12">
                <div className="flex-shrink-0 pt-1">
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider"
                    style={{ color: ORANGE }}
                  >
                    {item.time}
                  </span>
                </div>
                <div>
                  <h3
                    className="font-black uppercase mb-3"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: DARK, lineHeight: 1.1 }}
                  >
                    {item.titre}
                  </h3>
                  <p className="text-[15px] leading-relaxed" style={{ color: '#4B5563' }}>
                    {item.texte}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ANDY REME — moment éditorial fort ══════════════════════════════ */}
      <section style={{ backgroundColor: '#080c18' }} className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <FadeUp>
              <div
                className="text-[10px] font-bold uppercase tracking-[0.35em] mb-10"
                style={{ color: ORANGE }}
              >
                Invité spécial
              </div>
              <img
                src={getImagePath('/media/3x3/graffeur-logo.jpg')}
                alt="Amty, graffeur"
                className="mb-8"
                style={{ height: '160px', width: 'auto', objectFit: 'contain' }}
              />
              <h3
                className="font-black uppercase text-white mb-5"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1 }}
              >
                Amty
              </h3>
              <p className="text-[15px] leading-relaxed max-w-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Graffeur et artiste urbain, Amty sera sur la Place de Quévy-le-Petit pour une
                création en live tout au long de la journée. Venez assister à la naissance d'une œuvre,
                entre les matchs, sous les dunks et le son du DJ.
              </p>
            </FadeUp>

            {/* Décoration typographique */}
            <div className="hidden md:flex items-center justify-end select-none">
              <div
                className="font-black uppercase leading-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(7rem, 12vw, 11rem)',
                  color: 'rgba(234,88,12,0.07)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                LIVE<br />ART
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CATÉGORIES — liste typographique ════════════════════════════════ */}
      <section className="py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <FadeUp>
            <Eyebrow label="Catégories" />
            <h2
              className="font-black uppercase mb-2"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 8vw, 5.5rem)', color: DARK, lineHeight: 1 }}
            >
              Qui peut jouer ?
            </h2>
            <p className="text-sm text-gray-400 mb-10">
              Équipes de 3 joueurs · 1 remplaçant optionnel
            </p>
          </FadeUp>

          <div className="divide-y divide-gray-100">
            {categories.map((cat, i) => (
              <div key={i} className="py-6 grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_160px_160px] items-center gap-4">
                <div
                  className="font-black uppercase"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', color: DARK, lineHeight: 1.1 }}
                >
                  {cat.cat}
                </div>
                <div className="hidden sm:block text-sm font-semibold uppercase tracking-wider text-gray-400">
                  {cat.detail}
                </div>
                <div className="text-xs text-gray-400 text-right sm:text-left">{cat.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-start gap-4 p-5 bg-red-50 border border-red-100">
            <div className="w-1 self-stretch flex-shrink-0 rounded" style={{ backgroundColor: RED }} />
            <div>
              <div className="font-bold text-sm text-red-800 mb-0.5">Inscriptions fermées</div>
              <div className="text-xs text-red-600">
                Toutes les équipes sont inscrites. Pour la prochaine édition :{' '}
                <a href="mailto:blaregnies3x3@gmail.com" className="underline font-semibold">
                  blaregnies3x3@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FORMAT 3×3 ══════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: '#F7F6F3' }}>
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="grid md:grid-cols-[1fr_200px] gap-12 items-start">
            <div>
              <FadeUp>
                <Eyebrow label="Le format" />
                <h2
                  className="font-black uppercase mb-6"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem, 7vw, 4.5rem)', color: DARK, lineHeight: 1 }}
                >
                  C'est quoi le 3×3 ?
                </h2>
              </FadeUp>
              <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: '#4B5563' }}>
                <p>
                  Discipline olympique depuis Tokyo 2021, le basketball 3×3 se joue sur un demi-terrain
                  avec un seul panier. Deux équipes de 3 joueurs, des matchs courts, un rythme intense
                  et un spectacle garanti.
                </p>
                <p>
                  Les tirs à deux points valent ici <strong className="text-gray-900">2 points</strong>,
                  les autres valent 1. La partie se joue en{' '}
                  <strong className="text-gray-900">10 minutes ou jusqu'à 21 points</strong>.
                  Le rythme ne s'arrête presque jamais.
                </p>
                <p>
                  Accessible, rapide à comprendre, le format phare du mouvement streetball mondial
                  depuis les playgrounds de New York.
                </p>
              </div>
            </div>

            <FadeUp delay={0.1}>
              <div className="space-y-6 md:mt-16">
                {[
                  { val: '3', label: 'joueurs par équipe' },
                  { val: '21', label: 'points pour gagner' },
                  { val: '10 min', label: 'par match' },
                ].map((s) => (
                  <div key={s.label} className="pb-6 border-b border-gray-200 last:border-0 last:pb-0">
                    <div
                      className="font-black leading-none mb-1"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '3rem', color: ORANGE }}
                    >
                      {s.val}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-gray-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══ SPONSORS — strip éditorial ══════════════════════════════════════ */}
      <section className="py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-center mb-10" style={{ color: ORANGE }}>
            Avec le soutien de
          </div>
          <FadeUp>
            <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14">
              {sponsors.map((s) => (
                <SponsorLogo key={s.name} name={s.name} file={s.file} />
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══ BONS CADEAUX ════════════════════════════════════════════════════ */}
      <section className="py-14 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-8">
            <div className="text-[10px] font-bold uppercase tracking-[0.35em] mb-2" style={{ color: ORANGE }}>
              Bons cadeaux offerts par
            </div>
            <p className="text-xs text-gray-400">
              Ces partenaires offrent des bons cadeaux remis lors de la journée.
            </p>
          </div>
          <FadeUp>
            <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14">
              {bonsCadeaux.map((p) => (
                <SponsorLogo key={p.name} name={p.name} file={p.file} />
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══ CTA FINAL ═══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden court-pattern"
        style={{ borderTop: `1px solid rgba(234,88,12,0.2)` }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(234,88,12,0.1) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-6 sm:px-10 py-20 text-center">
          <FadeUp>
            <h2
              className="font-black uppercase leading-none text-white mb-2"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem, 9vw, 6.5rem)' }}
            >
              Rendez-vous le
            </h2>
            <h2
              className="font-black uppercase leading-none mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem, 9vw, 6.5rem)', color: ORANGE }}
            >
              28 juin !
            </h2>
            <p className="text-sm mb-10 text-white/50">
              Place de Quévy-le-Petit · Entrée gratuite pour les spectateurs · Journée + soirée
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://www.facebook.com/BlaregniesBasketClub/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold uppercase tracking-wider text-sm text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: ORANGE }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Suivre sur Facebook
              </a>
              <a
                href="https://www.instagram.com/royalblaregniesbasketclub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-white/5 transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)' }}
              >
                @RBBC.Blaregnies
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ThreeXThreePage

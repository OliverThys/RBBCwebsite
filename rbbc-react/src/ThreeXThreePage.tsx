import { useRef, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getImagePath } from './utils/images'
import Footer from './components/Footer'

const ORANGE = '#EA580C'
const DARK = '#0F172A'

// ─── Scroll fade-up ─────────────────────────────────────────────────────────
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
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Section label ───────────────────────────────────────────────────────────
const SectionTag = ({ label }: { label: string }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="h-px w-8 flex-shrink-0" style={{ backgroundColor: ORANGE }} />
    <span className="text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: ORANGE }}>
      {label}
    </span>
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
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <span className="text-[10px] uppercase tracking-widest mt-1" style={{ color: light ? '#9CA3AF' : 'rgba(255,255,255,0.45)' }}>{label}</span>
    </div>
  )

  const Sep = () => (
    <span
      className="font-black mb-4"
      style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: sepSize, color: light ? '#D1D5DB' : 'rgba(255,255,255,0.3)' }}
    >:</span>
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

// ─── Logo sponsor ────────────────────────────────────────────────────────────
type LogoCardProps = {
  name: string
  file: string
  sub?: string
  delay?: number
}

const LogoCard = ({ name, file, sub, delay = 0 }: LogoCardProps) => {
  const [hasImg, setHasImg] = useState(true)

  return (
    <FadeUp delay={delay}>
      <div
        className="flex flex-col items-center justify-center gap-3 p-5 text-center h-full"
        style={{ backgroundColor: '#F8F9FA', border: '1px solid #E5E7EB' }}
      >
        {hasImg ? (
          <img
            src={getImagePath(`/media/3x3/${file}`)}
            alt={name}
            className="h-14 w-full object-contain"
            onError={() => setHasImg(false)}
          />
        ) : (
          <div
            className="text-lg font-black uppercase leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK }}
          >
            {name}
          </div>
        )}
        {sub && (
          <div className="text-[11px] uppercase tracking-wider" style={{ color: '#9CA3AF' }}>
            {sub}
          </div>
        )}
      </div>
    </FadeUp>
  )
}

// ─── Hero content (partagé mobile/desktop) ───────────────────────────────────
const HeroContent = ({ large }: { large: boolean }) => (
  <>
    {/* Badges */}
    <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
      <span
        className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-white"
        style={{ backgroundColor: '#DC2626' }}
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

    {/* Eyebrow */}
    <div className="text-[11px] font-semibold uppercase tracking-[0.35em] mb-4" style={{ color: '#9CA3AF' }}>
      Le RBBC & MDJ Le Terrier organisent le
    </div>

    {/* Titre */}
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

    {/* Lieu */}
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

    {/* Countdown */}
    <div className="mb-6 flex flex-col items-center">
      <div className="text-[10px] uppercase tracking-[0.3em] mb-3" style={{ color: '#9CA3AF' }}>
        Compte à rebours
      </div>
      <Countdown light large={large} />
    </div>

    {/* Slogan */}
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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth={1.5}/>
          <path strokeLinecap="round" strokeWidth={1.5} d="M8 12a4 4 0 018 0"/>
          <path strokeLinecap="round" strokeWidth={1.5} d="M12 8v1M12 15v1"/>
        </svg>
      ),
      titre: 'Tournois 3×3',
      texte:
        "Les équipes s'affrontent sur demi-terrain dans un format rapide, intense et spectaculaire. Six catégories, des matchs qui s'enchaînent et une ambiance de feu garantie du matin jusqu'à la remise des prix.",
    },
    {
      time: 'Toute la journée',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      titre: 'Initiation Hip-Hop',
      texte:
        "Des initiations hip-hop sont proposées tout au long de la journée pour les curieux de tout âge. Moves, flow et culture urbaine — pas besoin d'être danseur pour participer et se laisser porter par l'ambiance.",
    },
    {
      time: 'Toute la journée',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      titre: 'Petite Restauration',
      texte:
        "Des partenaires locaux assurent la restauration sur place. Snacks, boissons et petite faim : de quoi tenir toute la journée sans quitter la place.",
    },
    {
      time: 'Dès la soirée',
      timeColor: '#7C3AED',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      titre: 'Soirée DJ — MDJ Aulnois',
      texte:
        "La Maison des Jeunes d'Aulnois prend les platines pour une soirée hip-hop qui prolonge la journée en ambiance 100% street. Urban beats, bonne humeur et une place qui vibre jusqu'en soirée.",
    },
  ]

  const categories = [
    { cat: 'U14', detail: 'H & F', desc: 'Né(e)s en 2012 et après', color: '#3B82F6' },
    { cat: 'U16–U18', detail: 'H & F', desc: 'Né(e)s entre 2008 et 2011', color: '#8B5CF6' },
    { cat: 'Hommes', detail: 'Séniors', desc: 'Open — à partir de 19 ans', color: ORANGE },
    { cat: 'Dames', detail: 'Séniors', desc: 'Open — à partir de 19 ans', color: '#EC4899' },
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
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@700;800;900&family=Barlow:wght@400;500;600;700&display=swap');

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
          {/* Fond blanc gauche */}
          <div className="absolute inset-0 bg-white" />
          {/* Fond sombre droite */}
          <div className="absolute top-0 right-0 bottom-0" style={{ width: '35%', backgroundColor: '#080c18' }} />
          {/* Barre orange diagonale */}
          <div
            className="absolute top-0 bottom-0"
            style={{ left: 'calc(65% - 16px)', width: '32px', backgroundColor: ORANGE, transform: 'skewX(-2.5deg)', zIndex: 20 }}
          />

          <div className="relative grid grid-cols-[65fr_auto_35fr]" style={{ minHeight: '100vh', zIndex: 10 }}>
            {/* Gauche — texte */}
            <motion.div
              className="flex flex-col items-center justify-center text-center px-16 xl:px-24 py-28"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <HeroContent large />
            </motion.div>

            {/* Séparateur */}
            <div style={{ width: '32px' }} />

            {/* Droite — affiche */}
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
          {/* Zone texte blanche */}
          <div className="bg-white flex flex-col items-center justify-center text-center px-6 sm:px-12 pt-24 pb-10">
            <HeroContent large={false} />
          </div>
          {/* Affiche sur fond sombre — remplit le reste */}
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

      {/* ══ INTRO ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 py-20">
          <FadeUp>
            <SectionTag label="L'événement" />
            <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-8" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK }}>
              Le street basket débarque à Quévy-le-Petit
            </h2>
            <div className="space-y-4 text-[15px] leading-relaxed text-gray-600">
              <p>
                Le <strong className="text-gray-900">Royal Blaregnies Basket Club</strong> et{' '}
                <strong className="text-gray-900">MDJ Le Terrier</strong> s'associent pour organiser, ce dimanche{' '}
                <strong className="text-gray-900">28 juin 2026</strong>, un grand tournoi de{' '}
                <strong className="text-gray-900">street basket 3×3</strong> sur la Place de{' '}
                <strong className="text-gray-900">Quévy-le-Petit</strong>.
              </p>
              <p>
                Un événement ouvert à tous, compétiteurs comme spectateurs, dans une ambiance 100% urbaine.
                Basket, hip-hop, initiations, bonne bouffe, et une soirée DJ assurée par la{' '}
                <strong className="text-gray-900">Maison des Jeunes d'Aulnois</strong> pour finir la journée en beauté.
              </p>
              <p>
                Avec le soutien de la <strong className="text-gray-900">Commune de Quévy</strong> et de nombreux
                partenaires et sponsors locaux, l'événement s'annonce festif, animé et accessible à toute la famille.
              </p>
              <p className="font-bold text-lg" style={{ color: ORANGE }}>
                Les équipes sont au complet — rendez-vous le 28 juin pour encourager les joueurs !
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══ INFOS CLÉS ══════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-14">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke={ORANGE} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                label: 'Date',
                value: 'Dimanche 28 juin 2026',
                sub: 'Journée + soirée',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke={ORANGE} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                label: 'Lieu',
                value: 'Place de Quévy-le-Petit',
                sub: 'En plein air · accès libre',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke={ORANGE} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                label: 'Participation',
                value: '15 € par équipe',
                sub: 'Spectateurs · entrée gratuite',
              },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="bg-white p-6 shadow-sm h-full" style={{ borderTop: `3px solid ${ORANGE}`, border: '1px solid #E5E7EB', borderTopColor: ORANGE }}>
                  <div className="mb-4">{item.icon}</div>
                  <div className="text-[10px] uppercase tracking-[0.25em] font-semibold text-gray-400 mb-1">{item.label}</div>
                  <div className="font-black text-xl uppercase leading-tight mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK }}>{item.value}</div>
                  <div className="text-sm text-gray-500">{item.sub}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROGRAMME ═══════════════════════════════════════════════════════ */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-20">
          <FadeUp>
            <SectionTag label="Programme de la journée" />
            <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-12" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK }}>
              Une journée riche en street culture
            </h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 gap-5">
            {programme.map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="p-7 h-full" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E5E7EB' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5"
                      style={{
                        backgroundColor: (item.timeColor || ORANGE) + '15',
                        color: item.timeColor || ORANGE,
                        border: `1px solid ${(item.timeColor || ORANGE)}30`,
                      }}
                    >
                      {item.time}
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 flex items-center justify-center flex-shrink-0 rounded-sm" style={{ backgroundColor: (item.timeColor || ORANGE) + '12', color: item.timeColor || ORANGE }}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK }}>{item.titre}</h3>
                      <p className="text-sm leading-relaxed text-gray-600">{item.texte}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CATÉGORIES ══════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-20">
          <FadeUp>
            <SectionTag label="Catégories" />
            <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK }}>
              Tout le monde peut jouer
            </h2>
            <p className="text-sm text-gray-500 mb-10">
              Quatre catégories d'âge et de genre. Chaque équipe est composée de 3 joueurs (+ remplaçant optionnel).
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {categories.map((cat, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="bg-white p-6 text-center shadow-sm" style={{ borderTop: `4px solid ${cat.color}`, border: '1px solid #E5E7EB', borderTopColor: cat.color }}>
                  <div className="text-5xl font-black uppercase leading-none mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif", color: cat.color }}>{cat.cat}</div>
                  <div className="text-sm font-bold uppercase tracking-widest mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK }}>{cat.detail}</div>
                  <div className="text-xs text-gray-400">{cat.desc}</div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3}>
            <div className="p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-red-50" style={{ border: '1px solid #FECACA' }}>
              <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-red-600 rounded-sm">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-sm text-red-800">Inscriptions fermées</div>
                <div className="text-xs text-red-600 mt-0.5">
                  Toutes les équipes sont inscrites. Restez connectés pour la prochaine édition !
                  Questions : <a href="mailto:blaregnies3x3@gmail.com" className="underline font-semibold">blaregnies3x3@gmail.com</a>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══ À PROPOS DU 3×3 ════════════════════════════════════════════════ */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 py-20">
          <FadeUp>
            <SectionTag label="Comprendre le format" />
            <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-8" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK }}>
              C'est quoi le basketball 3×3 ?
            </h2>
            <div className="space-y-4 text-[15px] leading-relaxed text-gray-600">
              <p>
                Le <strong className="text-gray-900">basketball 3×3</strong> est une discipline olympique depuis les Jeux de Tokyo 2021.
                Joué sur un demi-terrain avec un seul panier, il oppose deux équipes de 3 joueurs dans des matchs courts, intenses et très spectaculaires.
              </p>
              <p>
                Les règles diffèrent du basket classique : les tirs à deux points valent ici{' '}
                <strong className="text-gray-900">2 points</strong>, et les autres valent 1. La partie se joue en{' '}
                <strong className="text-gray-900">10 minutes ou jusqu'à 21 points</strong>. Le rythme ne s'arrête presque jamais.
              </p>
              <p>
                C'est un format accessible, rapide à comprendre, idéal pour les spectateurs comme pour les débutants.
                Le 3×3 est aussi la discipline phare du mouvement streetball mondial.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { val: '3', label: 'joueurs par équipe' },
                { val: '21', label: 'points pour gagner' },
                { val: '10', label: 'minutes de match' },
              ].map((s, i) => (
                <div key={i} className="text-center p-5 bg-gray-50 border border-gray-100">
                  <div className="text-5xl font-black leading-none mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif", color: ORANGE }}>{s.val}</div>
                  <div className="text-xs uppercase tracking-wider text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══ SPONSORS ════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-20">
          <FadeUp>
            <SectionTag label="Sponsors" />
            <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK }}>
              Merci à nos sponsors
            </h2>
            <p className="text-sm text-gray-500 mb-10">
              Sans leur soutien, cet événement n'aurait pas lieu. Un grand merci à chacun d'eux.
            </p>
          </FadeUp>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {sponsors.map((s, i) => (
              <LogoCard key={s.name} name={s.name} file={s.file} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ BONS CADEAUX ════════════════════════════════════════════════════ */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-20">
          <FadeUp>
            <SectionTag label="Bons cadeaux" />
            <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: DARK }}>
              Des prix à gagner !
            </h2>
            <p className="text-sm text-gray-500 mb-10">
              Ces partenaires offrent généreusement des bons cadeaux qui seront distribués lors de la journée. Encore merci à eux !
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {bonsCadeaux.map((p, i) => (
              <LogoCard key={p.name} name={p.name} file={p.file} sub="Bon cadeau" delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ AFFICHE ═════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-xl mx-auto px-6 sm:px-10 py-16 text-center">
          <FadeUp>
            <SectionTag label="L'affiche officielle" />
            <img
              src={getImagePath('/media/3x3-affiche.jpg')}
              alt="Affiche officielle du Tournoi de Street Basket 3×3 – RBBC 28 juin 2026"
              className="mx-auto rounded-sm shadow-xl"
              style={{ maxWidth: '380px', width: '100%' }}
            />
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
            <h2 className="font-black uppercase leading-none text-white mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem, 9vw, 6.5rem)' }}>
              Rendez-vous le
            </h2>
            <h2 className="font-black uppercase leading-none mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem, 9vw, 6.5rem)', color: ORANGE }}>
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

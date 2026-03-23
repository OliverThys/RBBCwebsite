import { useEffect, useRef, useState, useMemo } from 'react'
import { sponsors } from '../data/sponsors'
import { getImagePath } from '../utils/images'

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const SponsorItem = ({ sponsor, prefix }: { sponsor: typeof sponsors[0]; prefix: string }) => {
  const img = (
    <img
      src={getImagePath(sponsor.image)}
      alt={sponsor.name}
      className="h-full w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
      loading="lazy"
    />
  )

  const wrapperClass = "flex-shrink-0 h-12 md:h-14 flex items-center"

  if (sponsor.link) {
    return (
      <div key={`${prefix}-${sponsor.id}`} className={wrapperClass}>
        <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className="block h-full hover:scale-105 transition-transform duration-300">
          {img}
        </a>
      </div>
    )
  }
  if (sponsor.phone) {
    return (
      <div key={`${prefix}-${sponsor.id}`} className={wrapperClass}>
        <a href={`tel:${sponsor.phone}`} className="block h-full hover:scale-105 transition-transform duration-300">
          {img}
        </a>
      </div>
    )
  }
  return (
    <div key={`${prefix}-${sponsor.id}`} className={wrapperClass}>
      {img}
    </div>
  )
}

const SponsorsBar = () => {
  const firstSetRef = useRef<HTMLDivElement>(null)
  const [scrollOffset, setScrollOffset] = useState('-50%')
  const shuffledSponsors = useMemo(() => shuffleArray(sponsors), [])

  useEffect(() => {
    const update = () => {
      if (firstSetRef.current) {
        const spacerWidth = window.innerWidth >= 768 ? 64 : 48
        setScrollOffset(`-${firstSetRef.current.offsetWidth + spacerWidth}px`)
      }
    }
    const timeout = setTimeout(update, 150)
    window.addEventListener('resize', update)
    return () => {
      clearTimeout(timeout)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <section className="bg-surface border-y border-white/10 py-6 overflow-hidden">
      <div className="flex items-center gap-6 mb-4 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <span className="section-label flex-shrink-0">Nos partenaires</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex items-center animate-sponsor-scroll"
          style={{
            width: 'fit-content',
            '--scroll-offset': scrollOffset,
            '--scroll-duration': `${Math.max(20, shuffledSponsors.length * 3)}s`,
          } as React.CSSProperties & { '--scroll-offset': string; '--scroll-duration': string }}
        >
          <div ref={firstSetRef} className="flex items-center gap-12 md:gap-16 flex-shrink-0 px-6">
            {shuffledSponsors.map((s) => (
              <SponsorItem key={`a-${s.id}`} sponsor={s} prefix="a" />
            ))}
          </div>
          <div className="flex-shrink-0 w-12 md:w-16" />
          <div className="flex items-center gap-12 md:gap-16 flex-shrink-0 px-6">
            {shuffledSponsors.map((s) => (
              <SponsorItem key={`b-${s.id}`} sponsor={s} prefix="b" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SponsorsBar

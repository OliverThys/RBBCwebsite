import { useState, useEffect, useCallback } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { getImagePath } from './utils/images'
import Footer from './components/Footer'
import albums from './data/albums'
import type { Album, Photo } from './data/albums'

const DARK = '#09101f'

// ─── Navbar ────────────────────────────────────────────────────────────────

const PhotosNavbar = ({ albumTitle }: { albumTitle?: string }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/96 backdrop-blur-md shadow-sm border-b border-gray-200' : 'bg-white border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-red-700/60 group-hover:ring-red-600 transition-all">
              <img src={getImagePath('/rbbc_icon.jpg')} alt="RBBC" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block leading-none">
              <div className="font-display text-xl tracking-wide" style={{ color: DARK }}>RBBC</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">Royal Blaregnies</div>
            </div>
          </Link>

          <div className="hidden lg:block text-center">
            <div className="text-[10px] uppercase tracking-[0.3em] font-medium text-gray-400">Galerie photos</div>
            {albumTitle && (
              <div className="font-display text-lg tracking-wide leading-tight" style={{ color: DARK }}>
                {albumTitle}
              </div>
            )}
          </div>

          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline">Retour au site</span>
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}

// ─── Lightbox ──────────────────────────────────────────────────────────────

const Lightbox = ({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photos: Photo[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const photo = photos[index]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: 'rgba(9,16,31,0.96)' }}
      onClick={onClose}
    >
      {/* Compteur */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium tracking-widest select-none">
        {index + 1} / {photos.length}
      </div>

      {/* Fermer */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
        aria-label="Fermer"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Flèche gauche */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-3 sm:left-6 w-11 h-11 flex items-center justify-center text-white/60 hover:text-white transition-colors disabled:opacity-20"
        disabled={index === 0}
        aria-label="Photo précédente"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={photo.src}
          src={getImagePath(photo.src)}
          alt={photo.caption ?? `Photo ${index + 1}`}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="max-h-[85vh] max-w-[85vw] object-contain rounded-sm select-none"
          onClick={(e) => e.stopPropagation()}
          draggable={false}
        />
      </AnimatePresence>

      {/* Flèche droite */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-3 sm:right-6 w-11 h-11 flex items-center justify-center text-white/60 hover:text-white transition-colors disabled:opacity-20"
        disabled={index === photos.length - 1}
        aria-label="Photo suivante"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Caption */}
      {photo.caption && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm text-center max-w-md px-4">
          {photo.caption}
        </div>
      )}
    </motion.div>
  )
}

// ─── Vue album (grille de photos) ──────────────────────────────────────────

const AlbumView = ({ album, onBack }: { album: Album; onBack: () => void }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (i: number) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const prevPhoto = useCallback(() => setLightboxIndex(i => (i !== null && i > 0 ? i - 1 : i)), [])
  const nextPhoto = useCallback(() => setLightboxIndex(i => (i !== null && i < album.photos.length - 1 ? i + 1 : i)), [album.photos.length])

  const formattedDate = new Date(album.date).toLocaleDateString('fr-BE', {
    day: 'numeric', month: 'long', year: 'numeric',
  })

  return (
    <>
      <motion.div
        key="album-view"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors mb-6 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Tous les albums
          </button>

          <span className="section-label mb-3 block">Galerie</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-2" style={{ color: DARK }}>
            {album.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>{formattedDate}</span>
            <span className="w-px h-3 bg-gray-300" />
            <span>{album.photos.length} photo{album.photos.length > 1 ? 's' : ''}</span>
          </div>
          {album.description && (
            <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-xl leading-relaxed">
              {album.description}
            </p>
          )}
        </div>

        {/* Grille photos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {album.photos.map((photo, i) => (
            <motion.button
              key={photo.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="relative aspect-square overflow-hidden rounded-sm bg-gray-100 group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-700"
              onClick={() => openLightbox(i)}
              aria-label={`Ouvrir photo ${i + 1}`}
            >
              <img
                src={getImagePath(photo.src)}
                alt={photo.caption ?? `Photo ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={album.photos}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevPhoto}
            onNext={nextPhoto}
          />
        )}
      </AnimatePresence>
    </>
  )
}

// ─── Vue albums (grille d'albums) ──────────────────────────────────────────

const AlbumsView = ({ onSelect }: { onSelect: (slug: string) => void }) => {
  const formattedDate = (date: string) =>
    new Date(date).toLocaleDateString('fr-BE', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <motion.div
      key="albums-view"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="mb-10 sm:mb-14">
        <span className="section-label mb-3 block">RBBC</span>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mb-3" style={{ color: DARK }}>
          GALERIE PHOTOS
        </h1>
        <p className="text-gray-500 text-sm sm:text-base max-w-md">
          Tous les moments forts du club, saison après saison.
        </p>
      </div>

      {albums.length === 0 ? (
        <div className="text-center py-24 text-gray-400">
          <div className="text-5xl mb-4">📷</div>
          <p className="text-lg font-medium">Aucun album pour l'instant</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {albums.map((album, i) => (
            <motion.button
              key={album.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-700 rounded-sm"
              onClick={() => onSelect(album.slug)}
            >
              {/* Cover */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-gray-100 mb-3">
                <img
                  src={getImagePath(album.cover)}
                  alt={album.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
                {/* Compteur */}
                <div
                  className="absolute bottom-3 right-3 px-2.5 py-1 rounded-sm text-xs font-semibold text-white"
                  style={{ background: 'rgba(9,16,31,0.72)', backdropFilter: 'blur(6px)' }}
                >
                  {album.photos.length} photo{album.photos.length > 1 ? 's' : ''}
                </div>
              </div>

              {/* Infos */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h2
                    className="font-display text-xl sm:text-2xl leading-tight mb-0.5 group-hover:text-red-700 transition-colors duration-200"
                    style={{ color: DARK }}
                  >
                    {album.title}
                  </h2>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    {formattedDate(album.date)}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 flex-shrink-0 mt-1 text-gray-300 group-hover:text-red-700 group-hover:translate-x-0.5 transition-all duration-200"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.button>
          ))}
        </div>
      )}
    </motion.div>
  )
}

// ─── Page principale ────────────────────────────────────────────────────────

const PhotosPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const albumSlug = searchParams.get('album')
  const currentAlbum = albumSlug ? albums.find(a => a.slug === albumSlug) ?? null : null

  const selectAlbum = (slug: string) => {
    setSearchParams({ album: slug })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goBack = () => {
    setSearchParams({})
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    document.title = currentAlbum
      ? `${currentAlbum.title} — RBBC Photos`
      : 'Galerie photos — RBBC'
    return () => { document.title = 'RBBC — Royal Blaregnies Basket Club' }
  }, [currentAlbum])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <PhotosNavbar albumTitle={currentAlbum?.title} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-20">
        <AnimatePresence mode="wait">
          {currentAlbum ? (
            <AlbumView key={currentAlbum.slug} album={currentAlbum} onBack={goBack} />
          ) : (
            <AlbumsView key="albums" onSelect={selectAlbum} />
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}

export default PhotosPage

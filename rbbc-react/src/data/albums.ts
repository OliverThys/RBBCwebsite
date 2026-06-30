export interface Photo {
  src: string
  caption?: string
}

export interface Album {
  slug: string
  title: string
  date: string
  cover: string
  description?: string
  photos: Photo[]
}

const albums: Album[] = [
  {
    slug: '3x3-streetbasket-2026',
    title: 'Tournoi Street Basket 3×3',
    date: '2026-06-28',
    cover: '/photos/3x3/3x3-og.jpg',
    description: '1ère édition du tournoi street basket 3×3 organisé par le RBBC et MDJ Le Terrier — Place de Quévy-le-Petit.',
    photos: Array.from({ length: 118 }, (_, i) => ({
      src: `/photos/3x3/${String(i + 1).padStart(3, '0')}.jpg`,
    })),
  },
  {
    slug: 'fete-fin-saison-2026',
    title: 'Fête de fin de saison 2026',
    date: '2026-04-25',
    cover: '/photos/fete-fin-saison-2026/01.jpg',
    description: 'La fête de fin de saison du RBBC — tous ensemble pour clôturer une belle année !',
    photos: [
      { src: '/photos/fete-fin-saison-2026/01.jpg' },
      { src: '/photos/fete-fin-saison-2026/02.jpg' },
      { src: '/photos/fete-fin-saison-2026/03.jpg' },
      { src: '/photos/fete-fin-saison-2026/04.jpg' },
      { src: '/photos/fete-fin-saison-2026/05.jpg' },
      { src: '/photos/fete-fin-saison-2026/06.jpg' },
      { src: '/photos/fete-fin-saison-2026/07.jpg' },
      { src: '/photos/fete-fin-saison-2026/08.jpg' },
      { src: '/photos/fete-fin-saison-2026/09.jpg' },
      { src: '/photos/fete-fin-saison-2026/10.jpg' },
    ],
  },
]

export default albums

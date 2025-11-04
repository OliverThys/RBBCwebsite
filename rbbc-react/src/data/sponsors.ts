export interface Sponsor {
  id: string;
  name: string;
  image: string;
  link?: string;
  phone?: string;
}

export const sponsors: Sponsor[] = [
  {
    id: 'sponsor1',
    name: 'Sponsor 1',
    image: '/Sponsors/sponsor1.png',
  },
  {
    id: 'sponsor2',
    name: 'Sponsor 2',
    image: '/Sponsors/sponsor2.png',
  },
  {
    id: 'sponsor3',
    name: 'Sponsor 3',
    image: '/Sponsors/sponsor3.png',
  },
  {
    id: 'sponsor4',
    name: 'Sponsor 4',
    image: '/Sponsors/sponsor4.png',
  },
  {
    id: 'sponsor5',
    name: 'Sponsor 5',
    image: '/Sponsors/sponsor5.png',
  },
  {
    id: 'sponsor6',
    name: 'Sponsor 6',
    image: '/Sponsors/sponsor6.png',
  },
  {
    id: 'sponsor7',
    name: 'Octopix',
    image: '/Sponsors/sponsor7.jpg',
    link: 'https://octopix.be/',
  },
  {
    id: 'sponsor8',
    name: 'Infirmières à domicile Elodie et Aurélie',
    image: '/Sponsors/sponsor8.jpg',
    phone: '+32479468043',
  },
  {
    id: 'sponsor9',
    name: 'Gérarbre',
    image: '/Sponsors/sponsor9.jpg',
    phone: '+32498505647',
  },
  {
    id: 'sponsor10',
    name: 'Alyxel',
    image: '/Sponsors/sponsor10.jpg',
    link: 'https://alyxel.be/',
  },
];


export interface Team {
  id: string;
  name: string;
  image: string;
  category: 'jeunes' | 'seniors';
}

export const teams: Team[] = [
  {
    id: 'minibasket',
    name: 'Minibasket (U6–U8)',
    image: 'https://picsum.photos/600/360?random=101',
    category: 'jeunes',
  },
  {
    id: 'u10',
    name: 'U10',
    image: 'https://picsum.photos/600/360?random=102',
    category: 'jeunes',
  },
  {
    id: 'u12',
    name: 'U12',
    image: '/U12.jpg',
    category: 'jeunes',
  },
  {
    id: 'u14',
    name: 'U14',
    image: 'https://picsum.photos/600/360?random=104',
    category: 'jeunes',
  },
  {
    id: 'u14f',
    name: 'U14 F',
    image: '/U14F.jpg',
    category: 'jeunes',
  },
  {
    id: 'u16',
    name: 'U16',
    image: '/U16.jpg',
    category: 'jeunes',
  },
  {
    id: 'u16f',
    name: 'U16 F',
    image: '/U16F.jpg',
    category: 'jeunes',
  },
  {
    id: 'p4',
    name: 'P4',
    image: 'https://picsum.photos/600/360?random=108',
    category: 'seniors',
  },
  {
    id: 'p2b',
    name: 'P2B',
    image: 'https://picsum.photos/600/360?random=109',
    category: 'seniors',
  },
  {
    id: 'p2a',
    name: 'P2A',
    image: '/P2A.jpg',
    category: 'seniors',
  },
  {
    id: 'p3d',
    name: 'P3 Dames',
    image: '/P3D.jpg',
    category: 'seniors',
  },
];

export interface TrainingSchedule {
  teamName: string;
  coach: string;
  days: string[];
}

export const trainingSchedules: TrainingSchedule[] = [
  // Seniors
  {
    teamName: 'P2A',
    coach: 'Joseph',
    days: ['Mardi 20h45-22h00', 'Jeudi 20h30-22h00'],
  },
  {
    teamName: 'P2B',
    coach: 'Fatch',
    days: ['Mardi 19h15-20h45'],
  },
  {
    teamName: 'P4',
    coach: 'Jamal',
    days: ['Mercredi 20h00-21h30'],
  },
  {
    teamName: 'P3 Dames',
    coach: 'Chris',
    days: ['Jeudi 19h00-20h30'],
  },
  // Jeunes
  {
    teamName: 'U14-U16',
    coach: 'Léo et Martin',
    days: ['Mardi 17h45-19h15', 'Vendredi 19h00-20h30'],
  },
  {
    teamName: 'U14F-U16F',
    coach: 'Oliver, Laura, Joël',
    days: ['Jeudi 17h45-19h00', 'Vendredi 19h30-21h00'],
  },
  {
    teamName: 'U12',
    coach: 'Jean-Phi',
    days: ['À confirmer'],
  },
  {
    teamName: 'U10',
    coach: 'Henri',
    days: ['À confirmer'],
  },
];


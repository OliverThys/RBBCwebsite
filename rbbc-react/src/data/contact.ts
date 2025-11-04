export interface ContactInfo {
  secretary: {
    name: string;
    phone: string;
    email: string;
  };
  address: {
    name: string;
    street: string;
    city: string;
    postalCode: string;
    country: string;
    mapsUrl: string;
  };
}

export const contactInfo: ContactInfo = {
  secretary: {
    name: 'Henri Maton',
    phone: '065/56 70 06',
    email: 'comiterbbc@gmail.com',
  },
  address: {
    name: 'Salle omnisports E.Severyns',
    street: 'Rue de Sars 7',
    city: 'Quévy',
    postalCode: '7040',
    country: 'Belgique',
    mapsUrl: 'https://www.google.com/maps/search/Rue+de+Sars+7,+7040+Quévy,+Belgium',
  },
};


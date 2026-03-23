export interface ContactInfo {
  committee: {
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
  committee: {
    name: 'Comité RBBC',
    phone: '065/56 70 06',
    email: 'comiterbbc@gmail.com',
  },
  address: {
    name: 'Salle omnisports de Blaregnies',
    street: 'Rue de Sars 5',
    city: 'Blaregnies',
    postalCode: '7040',
    country: 'Belgique',
    mapsUrl: 'https://www.google.com/maps/search/Rue+de+Sars+5,+7040+Blaregnies,+Belgium',
  },
};


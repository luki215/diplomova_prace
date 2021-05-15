import { SiteInfo } from '../shared/interfaces/site-info.interfaces';

export const siteInfo: SiteInfo = {
  name: 'Zahradnictví Patrícia',
  telephone: '+420 123 456 934',
  email: 'info@zahradnictvi-patricia.cz',
  address: {
    city: 'Praha 10',
    zip: '185 00',
    street: 'Pátkova 25',
  },
  openHours: [
    {
      day: 0,
      from: '03:00',
      to: '18:00',
    },
    {
      day: 1,
      from: '17:00',
      to: '18:00',
    },
    {
      day: 2,
      from: '20:00',
      to: '23:00',
    },
    {
      day: 3,
      from: '19:00',
      to: '23:00',
    },
    {
      day: 4,
      from: '09:00',
      to: '18:00',
    },
    {
      day: 5,
      from: '09:00',
      to: '18:00',
      closed: true
    },
    {
      day: 6,
      closed: true,
      from: '09:00',
      to: '18:00',
    },
  ],
};

import { SiteInfo } from '../shared/interfaces/site-info.interfaces';

export const siteInfo: SiteInfo = {
  name: 'Zahradnictví u Boženy',
  telephone: '+420 111 111 111',
  email: 'info@zahradnictvi-brezina.cz',
  address: {
    city: 'Praha 8',
    zip: '182 00',
    street: 'Pátkova 13',
  },
  openHours: [
    {
      day: 0,
      from: '09:00',
      to: '18:00',
    },
    {
      day: 1,
      from: '09:00',
      to: '18:00',
    },
    {
      day: 2,
      from: '09:00',
      to: '18:00',
    },
    {
      day: 3,
      from: '09:00',
      to: '18:00',
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
    },
    {
      day: 6,
      closed: true,
      from: '09:00',
      to: '18:00',
    },
  ],
};

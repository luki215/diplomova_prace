import { SiteInfo } from '../shared/interfaces/site-info.interfaces';

export const siteInfo: SiteInfo = {
  name: 'Zahradnictví u Juliuse',
  telephone: '+420 432 123 842',
  email: 'info@zahradnictvi-julius.cz',
  address: {
    city: 'Praha 14',
    zip: '171 00',
    street: 'Luční 13',
  },
  openHours: [
    {
      day: 0,
      from: '09:00',
      to: '17:00',
    },
    {
      day: 1,
      from: '09:00',
      to: '17:00',
      closed: true
    },
    {
      day: 2,
      from: '09:00',
      to: '17:00',
    },
    {
      day: 3,
      from: '09:00',
      to: '17:00',
    },
    {
      day: 4,
      from: '09:00',
      to: '17:00',
    },
    {
      day: 5,
      from: '09:00',
      to: '17:00',
    },
    {
      day: 6,
      closed: true,
      from: '09:00',
      to: '17:00',
    },
  ],
};

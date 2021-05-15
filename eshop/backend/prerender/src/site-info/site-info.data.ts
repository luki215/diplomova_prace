import { SiteInfo } from '../shared/interfaces/site-info.interfaces';

export const siteInfo: SiteInfo = {
  name: 'Kateřinino zahdradnictví',
  telephone: '+420 111 111 111',
  email: 'info@zahradnictvi-katerina.cz',
  address: {
    city: 'Praha 12',
    zip: '180 00',
    street: 'Seifertova 8',
  },
  openHours: [
    {
      day: 0,
      from: '09:00',
      to: '18:00',
      closed: true,
    },
    {
      day: 1,
      from: '09:00',
      to: '14:00',
    },
    {
      day: 2,
      from: '09:00',
      to: '19:00',
    },
    {
      day: 3,
      from: '09:00',
      to: '15:00',
    },
    {
      day: 4,
      from: '09:00',
      to: '21:00',
    },
    {
      day: 5,
      from: '09:00',
      to: '18:00',
      closed: true,
    },
    {
      day: 6,
      closed: true,
      from: '09:00',
      to: '18:00',
    },
  ],
};

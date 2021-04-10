import { SiteInfo } from '../interfaces/site-info.interfaces';

export const openingToday = (siteInfo: SiteInfo) => {
  const today = (new Date().getDay() + 1) % 7;
  return siteInfo.openHours.find((y) => y.day === today);
};

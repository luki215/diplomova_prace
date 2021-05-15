
export interface SiteInfo_OpenHours {
    day: number;
    from: string;
    to: string;
    closed?: boolean;
}

export interface SiteInfo {
    telephone: string;
    openHours: SiteInfo_OpenHours[];
    name: string;
    email: string;
    address: {
        street: string;
        city: string;
        zip: string;
    }
}
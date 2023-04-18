// TODO rename constants for PayPal
export const CLIENT_ID = process.env.APP_PAYPAL_CLIENT_ID || '<YOUR_CLIENT_ID>';
export const APP_SECRET = process.env.APP_PAYPAL_SECRET || '<YOUR_APP_SECRET>';

export const APP_EMAIL_SERVICE_ID = process.env.APP_EMAIL_SERVICE_ID || '';
export const APP_EMAIL_TEMPLATE_ID = process.env.APP_EMAIL_TEMPLATE_ID || '';
export const APP_EMAIL_PUBLIC_KEY = process.env.APP_EMAIL_PUBLIC_KEY || '';

export const APP_EMAIL_TEMPLATE_ID_AUTOSEND = process.env.APP_EMAIL_TEMPLATE_ID_AUTOSEND || '';
export const APP_EMAIL_TEMPLATE_ID_PERSON_CONTACT =
    process.env.APP_EMAIL_TEMPLATE_ID_PERSON_CONTACT || '';

export const APP_MAPBOX_TOKEN = process.env.APP_MAPBOX_TOKEN || '';

export const STATS_NUMBERS = [
    {
        id: 1,
        title: 'OurStats.subtitle1',
        number: '1830+',
    },
    {
        id: 2,
        title: 'OurStats.subtitle4',
        number: '220',
    },
    {
        id: 3,
        title: 'OurStats.subtitle3',
        number: '390',
    },
    {
        id: 4,
        title: 'OurStats.subtitle2',
        number: '834+',
    },
];

export const STATS_NUMBER_HOME = STATS_NUMBERS.filter(({ id }) => id !== 2);

export enum TAGS {
    App = 'App',
    Management = 'Management',
    CMR = 'CMR',
    BigData = 'Big Data',
    Media = 'Media',
    Future = 'Future',
    CIO = 'CIO',
    Startup = 'Startup',
    Team = 'Team',
    Data = 'Data',
    DataAnalytics = 'Data analytics',
    InformationSecurity = 'Information security',
    Proxy = 'Proxy',
}

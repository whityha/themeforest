import { SERVICES_CARDS_DATA } from '@/constants/Mocks/Services';

export type ServicesCardsDataType = typeof SERVICES_CARDS_DATA;
export interface FlexBox {
    children: React.ReactNode;
    d?: string;
    direction?: string;
    w?: number | string;
    alignSelf?: string;
    justifyContent?: string;
    alignItems?: string;
    rg?: number;
    cg?: number;
    background?: Backgrounds;
    grow?: number;
    maxw?: number | string;
    minw?: number | string;
}

export type FlexBoxStyle = Exclude<FlexBox, 'children'>;

export interface SolutionPage {
    [x: string]: {
        title: string;
        thesis: {
            id: number;
            title: string;
            subtext: string;
            image?: string;
        }[];
    };
}

export interface ServicesPage {
    [x: string]: {
        title: string;
        subtext: string;
        thesis: {
            id: number;
            title: string;
            subtext: string;
            image?: string;
        }[];
    };
}

export enum Backgrounds {
    Grey = 'background',
    DarkBlue = 'darkBlue',
    White = 'white',
    Blue = 'blue',
}

export interface BackgroundProps {
    background?: Backgrounds;
}
export interface SectionProps extends BackgroundProps {
    screenOnly?: SCREEN;
}

export enum Cards {
    Customers = 'customers',
    Testimonials = 'testimonials',
    Articles = 'articles',
}

export type AccordionItem = {
    id: number | string;
    title: string;
    subtext: string;
};

export enum SCREEN {
    Desktop = 'desktop',
    Mobile = 'mobile',
}

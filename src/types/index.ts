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

export enum Cards {
    Customers = 'customers',
    Testimonials = 'testimonials',
    Articles = 'articles',
}

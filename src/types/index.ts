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

export type Backgrounds = 'background' | 'darkBlue' | 'white';

export interface BackgroundProps {
    background?: Backgrounds;
}

export interface FlexBox {
    children: React.ReactNode;
    d?: string;
    direction?: string;
    w?: number | string;
    alignSelf?: string;
    justifyContent?: string;
    alignItems?: string;
}

export type FlexBoxStyle = Exclude<FlexBox, 'children'>;

export interface SectionProps {
    background?: boolean;
}

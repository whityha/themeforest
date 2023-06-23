import { DefaultTheme } from 'styled-components';

export interface SliderOptions {
    visibleSlidersCount?: number;
    slides: Array<React.ReactNode>;
    title: string;
    currentCard: keyof DefaultTheme['cardsWidth'];
}

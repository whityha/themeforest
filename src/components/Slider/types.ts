import { DefaultTheme } from 'styled-components';

export interface sliderOptions {
    visibleSlidersCount?: number;
    slides: Array<React.ReactNode>;
    title: string;
    currentCard: keyof DefaultTheme['cardsWidth'];
}

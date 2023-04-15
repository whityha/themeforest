import styled, { DefaultTheme } from 'styled-components';

import { getWrapperWidth } from '@/theme/UI/Common';
import { Title2 } from '@/theme/UI/Titles';

const paddingForShadows = 20;

export const Wrapper = styled.div`
    width: ${({ theme }) => getWrapperWidth(theme) + paddingForShadows * 2}px;
    margin: 0 auto;
`;

interface SliderBoxProps {}

export const Box = styled.div<SliderBoxProps>`
    width: 100%;
    overflow-x: hidden;
    padding: ${paddingForShadows}px;
    padding-top: ${({ theme }) => theme.padding.p3 + paddingForShadows}px;
`;

export const TopBox = styled.div<SliderBoxProps>`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 0px ${paddingForShadows}px;
`;

interface HiddenBox {
    count: number;
    currentSlide: number;
    currentCard: keyof DefaultTheme['cardsWidth'];
}

export const HiddenBox = styled.div<HiddenBox>`
    display: flex;
    width: ${({ theme, count, currentCard }) =>
        theme.cardsWidth[currentCard] * count + theme.gap.g3 * (count - 1)}px;
    column-gap: ${({ theme }) => theme.gap.g3}px;
    transform: ${({ theme, currentSlide, currentCard }) => {
        const X = currentSlide * theme.cardsWidth[currentCard] + theme.gap.g3 * currentSlide;
        return `translateX(-${X}px)`;
    }};
    transition: 0.5s;
`;

interface SliderButton {
    direction: 'right' | 'left';
}

export const Button = styled.button<SliderButton>`
    width: 110px;
    height: 60px;
    cursor: pointer;
    border-radius: ${({ theme }) => theme.borderRadius.large}px;
    margin-right: ${({ theme, direction }) => (direction === 'left' ? theme.margin.m2 : 0)}px;
    background: ${({ theme, direction, disabled }) => {
        if (disabled) {
            return `url(../../assets/icons/${direction}_arrow_disabled.svg) no-repeat center
                    ${theme.colors.tertiary};
            `;
        }
        return `url(../../assets/icons/${direction}_arrow.svg) no-repeat center
                ${theme.colors.tertiary};
        `;
    }};
    transition: background 0.2s;
    &:hover {
        background: ${({ theme, direction, disabled }) => {
            if (disabled) {
                return `url(../../assets/icons/${direction}_arrow_disabled.svg) no-repeat center
                    ${theme.colors.tertiary};
            `;
            }
            return `url(../../assets/icons/${direction}_arrow.svg) no-repeat center ${
                direction ? `${direction} 40%` : ''
            }
                ${theme.colors.tertiary};
        `;
        }};
    }
`;

export const Title = styled(Title2)`
    color: ${({ theme }) => theme.colors.black};
    margin-right: auto;
`;

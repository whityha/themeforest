import styled from 'styled-components';

import { Backgrounds } from '@/types';

import { WrapperTemplate } from '../UI/Templates';

interface HeaderProps {
    background: Backgrounds;
}

export const Wrapper = styled.header<HeaderProps>`
    background: ${({ theme, background }) => theme.colors[background]};
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        display: none;
    }
`;

export const WrapperMobile = styled.header`
    display: none;
    background: ${({ theme }) => theme.colors.white};
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        display: block;
    }
`;

export const InnerWrapper = styled(WrapperTemplate)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => `${theme.padding.p4}px 0px`};
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        height: 70px;
        padding: ${({ theme }) => `${theme.padding.p2}px 0px`};
        z-index: 5;
    }
`;

export const Burger = styled.img`
    display: none;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        display: inline;
    }
`;

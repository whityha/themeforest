import styled from 'styled-components';

import { Backgrounds, SCREEN, SectionProps } from '@/types';

export const SectionTemplate = styled.section<SectionProps>`
    display: ${({ screenOnly }) => (screenOnly === SCREEN.Mobile ? 'none' : 'block')};
    background: ${({ theme, background = Backgrounds.White }) => theme.colors[background]};
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        display: ${({ screenOnly }) => (screenOnly === SCREEN.Desktop ? 'none' : 'block')};
    }
`;

export const WrapperTemplate = styled.div`
    width: ${({ theme }) => theme.wrapperWidth.large}px;
    margin: 0 auto;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        width: 91%;
        margin: 0 auto;
    }
`;

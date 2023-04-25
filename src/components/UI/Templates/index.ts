import styled from 'styled-components';

import { BackgroundProps, Backgrounds } from '@/types';

export const SectionTemplate = styled.section<BackgroundProps>`
    background: ${({ theme, background = Backgrounds.White }) => theme.colors[background]};
`;

export const WrapperTemplate = styled.div`
    width: ${({ theme }) => theme.wrapperWidth.large}px;
    margin: 0 auto;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        width: 91%;
        margin: 0 auto;
    }
`;

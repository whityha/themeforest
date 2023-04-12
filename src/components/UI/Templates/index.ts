import styled from 'styled-components';

import { BackgroundProps } from '@/types';

export const SectionTemplate = styled.section<BackgroundProps>`
    background: ${({ theme, background = 'white' }) => theme.colors[background]};
`;

export const WrapperTemplate = styled.div`
    width: ${({ theme }) => theme.wrapperWidth.large}px;
    margin: 0 auto;
`;

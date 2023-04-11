import styled from 'styled-components';

import { SectionProps } from '@/types';

export const SectionTemplate = styled.section<SectionProps>`
    background: ${({ theme, background }) => (background ? theme.colors.background : null)};
`;

export const WrapperTemplate = styled.div`
    width: ${({ theme }) => theme.wrapperWidth.large}px;
    margin: 0 auto;
`;

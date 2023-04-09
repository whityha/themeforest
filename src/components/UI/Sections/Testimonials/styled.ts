import styled from 'styled-components';

import { SectionProps } from '@/types';

export const Wrapper = styled.section<SectionProps>`
    display: flex;
    padding: ${({ theme }) => `${theme.padding.p12}px 0`};
`;

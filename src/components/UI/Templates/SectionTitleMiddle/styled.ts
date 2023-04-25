import styled from 'styled-components';

import { SectionTemplate } from '@/components/UI/Templates';
import { Title1 } from '@/theme/UI/Titles';

export const Wrapper = styled(SectionTemplate)<{ screen?: 'mobile' | 'desktop' }>`
    display: ${({ screen }) => (screen === 'mobile' ? 'none' : 'flex')};
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) => `${theme.padding.p10}px 0 ${theme.padding.p12}px 0`};
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        display: ${({ screen }) => (screen === 'desktop' ? 'none' : 'flex')};
    }
`;

export const Title = styled(Title1)`
    text-align: center;
    max-width: 50%;
    color: ${({ theme }) => theme.colors.black};
`;

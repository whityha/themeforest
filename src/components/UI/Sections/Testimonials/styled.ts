import styled from 'styled-components';

import { SectionTemplate } from '@/components/UI/Templates';

export const Wrapper = styled(SectionTemplate)`
    padding: ${({ theme }) => `${theme.padding.p12}px 0`};
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        padding: ${({ theme }) => `${theme.padding.p5}px 0`};
    }
`;

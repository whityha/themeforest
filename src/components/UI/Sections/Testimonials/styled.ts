import styled from 'styled-components';

import { SectionTemplate } from '@/components/UI/Templates';

export const Wrapper = styled(SectionTemplate)`
    display: flex;
    padding: ${({ theme }) => `${theme.padding.p12}px 0`};
`;

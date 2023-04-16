import styled from 'styled-components';

import { SectionTemplate, WrapperTemplate } from '../../Templates';

export const Wrapper = styled(SectionTemplate)`
    padding: ${({ theme: { padding } }) => `${padding.p12 * 2}px 0 ${padding.p12}px 0`};
`;

export const Content = styled(WrapperTemplate)`
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.gap.g3}px;
`;

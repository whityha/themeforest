import styled from 'styled-components';

import { SectionTemplate, WrapperTemplate } from '../../Templates';

export const Wrapper = styled(SectionTemplate)`
    padding: ${({ theme }) => `${theme.padding.p12}px 0px`};
`;

export const Content = styled(WrapperTemplate)`
    display: flex;
    column-gap: ${({ theme }) => theme.gap.g3}px;
`;

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 57%;
`;

import styled from 'styled-components';

import { SectionTemplate, WrapperTemplate } from '@/components/UI/Templates';
import { Title1 } from '@/theme/UI/Titles';

export const Content = styled(WrapperTemplate)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Wrapper = styled(SectionTemplate)`
    padding: ${({ theme }) => `${theme.padding.p10}px 0 ${theme.padding.p12}px 0`};
`;

export const Title = styled(Title1)`
    text-align: center;
    max-width: 50%;
    color: ${({ theme }) => theme.colors.black};
`;

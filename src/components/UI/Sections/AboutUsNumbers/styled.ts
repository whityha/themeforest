import styled from 'styled-components';

import { Title1 } from '@/theme/UI/Titles';

import { SectionTemplate, WrapperTemplate } from '../../Templates';

export const Wrapper = styled(SectionTemplate)`
    padding: ${({ theme }) => `${theme.padding.p12}px 0px`};
`;

export const Content = styled(WrapperTemplate)`
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.gap.g12}px;
`;

export const Title = styled(Title1)`
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: ${({ theme }) => theme.margin.m8}px;
`;

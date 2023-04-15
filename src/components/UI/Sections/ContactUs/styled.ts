import styled from 'styled-components';

import { Parag1, Parag2 } from '@/theme/UI/Paragraphs';
import { Title2 } from '@/theme/UI/Titles';

import { SectionTemplate, WrapperTemplate } from '../../Templates';

export const Wrapper = styled(SectionTemplate)`
    padding: ${({ theme }) => `${theme.padding.p12}px 0px`};
`;

export const Content = styled(WrapperTemplate)`
    display: flex;
    column-gap: ${({ theme }) => theme.gap.g12}px;
`;

export const Title = styled(Title2)`
    color: ${({ theme }) => theme.colors.black};
    padding-bottom: ${({ theme }) => theme.padding.p1}px;
    position: relative;
`;

export const Subtext = styled(Parag1)`
    color: ${({ theme }) => theme.colors.grey};
`;

export const ContactItem = styled.p`
    color: ${({ theme }) => theme.colors.black};
    font-weight: 800;
`;

export const ContactName = styled(Parag2)`
    color: ${({ theme }) => theme.colors.grey};
    margin-bottom: ${({ theme }) => theme.margin.m1}px;
`;

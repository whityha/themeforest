import styled from 'styled-components';

import { Parag2 } from '@/theme/UI/Paragraphs';
import { Title3, Title4 } from '@/theme/UI/Titles';

import { SectionTemplate, WrapperTemplate } from '../../Templates';

export const Wrapper = styled(SectionTemplate)`
    padding: ${({ theme }) => `${theme.padding.p12}px 0px`};
`;

export const Content = styled(WrapperTemplate)`
    display: flex;
    column-gap: ${({ theme }) => theme.gap.g3}px;
`;

export const Title = styled(Title3)`
    color: ${({ theme }) => theme.colors.black};
`;

export const Subtext = styled(Parag2)`
    color: ${({ theme }) => theme.colors.grey};
    padding: ${({ theme }) => `${theme.padding.p3}px 0px`};
`;

interface Image {
    w?: number;
}

export const Image = styled.img<Image>`
    width: ${({ w }) => w || 100}%;
    margin-bottom: ${({ theme }) => theme.margin.m6}px;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    margin-left: ${({ theme }) => theme.margin.m3}px;
    row-gap: ${({ theme }) => theme.gap.g1}px;
`;

export const ListItem = styled.li`
    background: url('../../../../assets/icons/v_blue.svg') no-repeat center left;
    padding-left: ${({ theme }) => theme.padding.p3}px;
    font-size: ${({ theme }) => theme.fontSize.s6}px;
    line-height: ${({ theme }) => theme.lineHeight.large};
    color: ${({ theme }) => theme.colors.black};
`;

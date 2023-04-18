import styled from 'styled-components';

import { getWrapperWidth } from '@/theme/UI/Common';
import { Parag2 } from '@/theme/UI/Paragraphs';
import { Title2, Title6 } from '@/theme/UI/Titles';

import { SectionTemplate } from '../../Templates';

export const Wrapper = styled(SectionTemplate)`
    display: flex;
    column-gap: ${({ theme }) => theme.gap.g3}px;
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(50% - ${({ theme }) => theme.gap.g3 / 2}px);
`;

export const Content = styled.div`
    display: flex;
    max-width: ${({ theme }) => getWrapperWidth(theme) / 2 - theme.gap.g3 / 2}px;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.gap.g3}px;
    align-self: center;
`;

export const Title = styled(Title2)`
    color: ${({ theme }) => theme.colors.black};
`;

export const Subtext = styled(Parag2)`
    color: ${({ theme }) => theme.colors.grey};
    line-height: ${({ theme }) => theme.lineHeight.large};
`;

export const Image = styled.img`
    width: 100%;
    object-fit: auto;
`;

export const AdvantageList = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.gap.g3}px;
`;

export const AdvantageItem = styled.li`
    display: flex;
    flex-direction: column;
`;

export const AdvTitle = styled(Title6)`
    padding-left: ${({ theme }) => theme.padding.p3}px;
    background: url('/assets/icons/v_blue.svg') no-repeat center left;
    margin-bottom: ${({ theme }) => theme.margin.m1}px;
`;

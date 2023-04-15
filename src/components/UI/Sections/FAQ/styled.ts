import styled from 'styled-components';

import { SectionTemplate } from '@/components/UI/Templates';
import { getWrapperWidth } from '@/theme/UI/Common';
import { Parag1 } from '@/theme/UI/Paragraphs';
import { Title1, Title6 } from '@/theme/UI/Titles';

export const Wrapper = styled(SectionTemplate)``;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${({ theme }) => getWrapperWidth(theme)}px;
    margin: 0 auto;
    padding: ${({ theme }) => `${theme.padding.p4}px 0px ${theme.padding.p12}px 0px`};
`;

export const Title = styled(Title1)`
    color: ${({ theme }) => theme.colors.black};
    margin-top: ${({ theme }) => theme.margin.m2}px;
`;
export const Subtitle = styled(Title6)`
    color: ${({ theme }) => theme.colors.blue};
    line-height: ${({ theme }) => theme.lineHeight.large};
`;

export const Subtext = styled(Parag1)`
    text-align: center;
    width: 50%;
    color: ${({ theme }) => theme.colors.grey};
    margin-top: ${({ theme }) => theme.margin.m2}px;
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: ${({ theme }) => theme.gap.g4}px;
    column-gap: ${({ theme }) => theme.gap.g3}px;
`;

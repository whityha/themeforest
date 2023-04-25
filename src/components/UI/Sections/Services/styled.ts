import styled from 'styled-components';

import { SectionTemplate, WrapperTemplate } from '@/components/UI/Templates';
import { Parag1 } from '@/theme/UI/Paragraphs';
import { Title1, Title6 } from '@/theme/UI/Titles';

export const Wrapper = styled(SectionTemplate)``;

export const Content = styled(WrapperTemplate)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) => `${theme.padding.p4}px 0px ${theme.padding.p12}px 0px`};
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        padding: 0;
    }
`;

export const Title = styled(Title1)`
    color: ${({ theme }) => theme.colors.black};
    margin-top: ${({ theme }) => theme.margin.m2}px;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        text-align: center;
    }
`;
export const Subtitle = styled(Title6)`
    color: ${({ theme }) => theme.colors.blue};
    line-height: ${({ theme }) => theme.lineHeight.large};
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        font-size: ${({ theme }) => theme.fontSize.s6}px;
    }
`;

export const Subtext = styled(Parag1)`
    text-align: center;
    width: 50%;
    color: ${({ theme }) => theme.colors.grey};
    margin-top: ${({ theme }) => theme.margin.m2}px;
    margin-bottom: ${({ theme }) => theme.margin.m12}px;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        width: 100%;
        margin-bottom: ${({ theme }) => theme.margin.m5}px;
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: ${({ theme }) => theme.gap.g4}px;
    column-gap: ${({ theme }) => theme.gap.g3}px;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        flex-direction: column;
    }
`;

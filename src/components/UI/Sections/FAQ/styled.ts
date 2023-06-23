import styled from 'styled-components';

import { SectionTemplate, WrapperTemplate } from '@/components/UI/Templates';
import { Parag1 } from '@/theme/UI/Paragraphs';
import { Title1, Title6 } from '@/theme/UI/Titles';

export const Wrapper = styled(SectionTemplate)``;

export const Content = styled(WrapperTemplate)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({ theme: { padding } }) => `${padding.p4}px 0px ${padding.p12}px 0px`};
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        padding: ${({ theme: { padding } }) => `0px 0px ${padding.p5}px 0px`};
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
`;

export const Subtext = styled(Parag1)`
    text-align: center;
    width: 50%;
    color: ${({ theme }) => theme.colors.grey};
    margin-top: ${({ theme }) => theme.margin.m2}px;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        width: 100%;
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: ${({ theme }) => theme.gap.g4}px;
    column-gap: ${({ theme }) => theme.gap.g3}px;
`;

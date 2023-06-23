import styled from 'styled-components';

import { SectionTemplate, WrapperTemplate } from '@/components/UI/Templates';
import { Parag1 } from '@/theme/UI/Paragraphs';
import { Title2 } from '@/theme/UI/Titles';
import { Backgrounds } from '@/types';

export const Wrapper = styled(SectionTemplate)`
    padding: ${({ theme }) => `${theme.padding.p12}px 0`};
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        padding: ${({ theme }) => `${theme.padding.p5}px 0`};
        background: ${Backgrounds.White};
    }
`;

export const Content = styled(WrapperTemplate)`
    display: flex;
    column-gap: ${({ theme }) => theme.gap.g3}px;
    margin: 0 auto;
    align-items: center;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        flex-direction: column;
    }
`;

export const ContainerCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.gap.g3}px;
    padding-bottom: ${({ theme }) => theme.padding.p5}px;
    & > div:nth-child(even) {
        transform: translateY(50px);
    }
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        flex-wrap: nowrap;
        width: 100%;
        & > div:nth-child(even) {
            transform: translateY(0);
        }
    }
`;

export const WrapperCards = styled.div`
    flex-grow: 1;
    flex-basis: 40%;
    overflow-y: hidden;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        flex-basis: 100%;
        width: 100%;
        padding-top: ${({ theme }) => theme.padding.p3}px;
    }
`;

export const Title = styled(Title2)`
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: ${({ theme }) => theme.margin.m3}px;
`;
export const SubTitle = styled(Parag1)`
    color: ${({ theme }) => theme.colors.grey};
    line-height: ${({ theme }) => theme.lineHeight.large};
`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 40%;
    flex-grow: 1;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        width: 100%;
    }
`;

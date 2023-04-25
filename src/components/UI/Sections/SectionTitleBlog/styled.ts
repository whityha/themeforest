import styled from 'styled-components';

import { Parag1 } from '@/theme/UI/Paragraphs';
import { Title1, Title6 } from '@/theme/UI/Titles';

import { SectionTemplate, WrapperTemplate } from '../../Templates';

export const Wrapper = styled(SectionTemplate)`
    display: none;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        display: block;
    }
`;

export const Content = styled(WrapperTemplate)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) => `${theme.padding.p4}px 0px ${theme.padding.p12}px 0px`};
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        padding: ${({ theme }) => `0px 0px ${theme.padding.p5}px 0px`};
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
        margin-top: ${({ theme }) => theme.margin.m1}px;
    }
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

import styled from 'styled-components';

import { SectionTemplate, WrapperTemplate } from '@/components/UI/Templates';
import { Parag1 } from '@/theme/UI/Paragraphs';
import { Title2 } from '@/theme/UI/Titles';

export const Wrapper = styled(SectionTemplate)`
    padding: ${({
        theme: {
            padding: { p8, p12 },
        },
    }) => `${p12}px 0 ${p8}px 0`};
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        padding: ${({
            theme: {
                padding: { p5, p3 },
            },
        }) => `${p5}px 0 ${p3}px 0`};
    }
`;

export const Content = styled(WrapperTemplate)`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: ${({ theme }) => theme.gap.g5}px;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        width: ${({ theme }) => theme.wrapperWidth.small}px;
    }
`;

export const Title = styled(Title2)`
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
    width: 100%;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        font-size: ${({ theme }) => theme.fontSize.s3}px;
    }
`;

export const SubTitle = styled(Parag1)`
    color: ${({ theme }) => theme.colors.grey};
    line-height: ${({ theme }) => theme.lineHeight.large};
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        text-align: center;
        font-size: ${({ theme }) => theme.fontSize.s7}px;
        margin-top: ${({ theme }) => theme.margin.m2}px;
    }
`;

export const Container = styled.div`
    display: flex;
    column-gap: ${({ theme }) => theme.gap.g3}px;
    align-items: center;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        flex-direction: column;
    }
`;

export const ContentBox = styled.div`
    display: flex;
    width: 50%;
    column-gap: ${({ theme }) => theme.gap.g3}px;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        width: 100%;
    }
`;

export const ImageBlock = styled.img`
    width: calc(100% / 6);
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        width: calc(100% / 4);
    }
`;

export const PartnersContainer = styled.div`
    display: flex;
    overflow-y: auto;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        width: 100%;
    }
`;

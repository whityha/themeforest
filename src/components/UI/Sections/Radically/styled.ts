import styled from 'styled-components';

import { SectionTemplate } from '@/components/UI/Templates';
import { Button } from '@/theme/UI/Button';
import { getWrapperWidth } from '@/theme/UI/Common';
import { Parag1 } from '@/theme/UI/Paragraphs';
import { Title1 } from '@/theme/UI/Titles';

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(50% - ${({ theme }) => theme.gap.g3 / 2}px);
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        width: 100%;
    }
`;

export const Title = styled(Title1)`
    display: flex;
    color: ${({ theme }) => theme.colors.black};
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        padding: ${({ theme: { padding } }) => `${padding.p4}px 0px ${padding.p2}px 0px`};
        max-width: ${({ theme }) => theme.wrapperWidth.small}px;
        margin: 0 auto;
    }
`;

export const Content = styled.div`
    display: flex;
    width: 50%;
    max-width: ${({ theme }) => getWrapperWidth(theme) / 2 - theme.gap.g3 / 2}px;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.gap.g3}px;
    align-self: center;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        width: 100%;
        max-width: ${({ theme }) => theme.wrapperWidth.small}px;
        flex-direction: column;
        & > ${Title} {
            display: none;
        }
    }
`;

export const SubTitle = styled(Parag1)`
    color: ${({ theme }) => theme.colors.grey};
    line-height: ${({ theme }) => theme.lineHeight.large};
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        padding: ${({ theme: { padding } }) => `${padding.p2}px 0px`};
    }
`;

export const Image = styled.img`
    width: 100%;
    object-fit: auto;
`;

export const ButtonLearn = styled(Button)`
    width: ${({ theme }) => theme.buttonsWidth.large}px;
    padding-top: ${({ theme }) => theme.padding.p1 + 5}px;
    padding-bottom: ${({ theme }) => theme.padding.p1 + 5}px;
    box-shadow: ${({ theme }) => theme.shadows.shadowButton};
    margin-top: ${({ theme }) => theme.margin.m3}px;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        width: 100%;
        margin-bottom: ${({ theme }) => theme.margin.m7}px;
    }
`;

export const Wrapper = styled(SectionTemplate)`
    display: flex;
    column-gap: ${({ theme }) => theme.gap.g3}px;
    & > ${Title} {
        display: none;
    }
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        & > ${Title} {
            display: flex;
        }
        flex-direction: column;
    }
`;

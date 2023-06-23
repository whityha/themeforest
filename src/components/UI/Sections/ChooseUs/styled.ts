import styled from 'styled-components';

import { getWrapperWidth } from '@/theme/UI/Common';
import { Parag2 } from '@/theme/UI/Paragraphs';
import { Title2, Title6 } from '@/theme/UI/Titles';

import { SectionTemplate } from '../../Templates';

export const Wrapper = styled(SectionTemplate)`
    display: flex;
    column-gap: ${({ theme }) => theme.gap.g3}px;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        flex-direction: column;
        background: ${({ theme }) => theme.colors.white};
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(50% - ${({ theme }) => theme.gap.g3 / 2}px);
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        width: 100%;
    }
`;

export const Content = styled.div`
    display: flex;
    max-width: ${({ theme }) => getWrapperWidth(theme) / 2 - theme.gap.g3 / 2}px;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.gap.g3}px;
    align-self: center;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        max-width: auto;
        width: 91%;
        margin: 0 auto;
        margin: ${({ theme }) => `${theme.margin.m5}px 0px`};
    }
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
    color: ${({ theme }) => theme.colors.black};
    padding-left: ${({ theme }) => theme.padding.p3}px;
    background: url('/assets/icons/v_blue.svg') no-repeat center left;
    margin-bottom: ${({ theme }) => theme.margin.m1}px;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        font-size: ${({ theme }) => theme.fontSize.s5}px;
    }
`;

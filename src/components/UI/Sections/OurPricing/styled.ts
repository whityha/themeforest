import styled from 'styled-components';

import { Title2 } from '@/theme/UI/Titles';

import { SectionTemplate, WrapperTemplate } from '../../Templates';

export const Wrapper = styled(SectionTemplate)`
    padding: ${({ theme }) => `${theme.padding.p5}px 0px`};
`;

export const Content = styled(WrapperTemplate)``;

export const Title = styled(Title2)`
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: ${({ theme }) => theme.margin.m5}px;
`;

export const Cards = styled.div`
    display: flex;
    column-gap: ${({ theme }) => theme.gap.g3}px;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        min-width: 1100px;
    }
`;

export const CardsContainer = styled.div`
    padding: ${({ theme }) => `${theme.padding.p1}px`};

    overflow-x: auto;
`;

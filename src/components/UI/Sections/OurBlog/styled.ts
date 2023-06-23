import styled from 'styled-components';

import { SectionTemplate, WrapperTemplate } from '@/components/UI/Templates';
import { Button } from '@/theme/UI/Button';
import { Title1 } from '@/theme/UI/Titles';

export const Wrapper = styled(SectionTemplate)`
    display: flex;
    padding: ${({ theme }) => `${theme.padding.p12}px 0`};
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        padding-top: 0;
        padding-bottom: ${({ theme }) => `${theme.padding.p5}px`};
    }
`;

export const Content = styled(WrapperTemplate)`
    display: none;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        display: block;
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.gap.g3}px;
`;

export const Title = styled(Title1)`
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: ${({ theme }) => theme.margin.m3}px;
`;

export const ButtonLearn = styled(Button)`
    width: ${({ theme }) => theme.buttonsWidth.large}px;
    padding-top: ${({ theme }) => theme.padding.p1 + 5}px;
    padding-bottom: ${({ theme }) => theme.padding.p1 + 5}px;
    box-shadow: ${({ theme }) => theme.shadows.shadowButton};
    margin-top: ${({ theme }) => theme.margin.m3}px;
    width: 100%;
`;

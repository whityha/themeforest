import styled from 'styled-components';

import { Parag1, Parag2, Parag3 } from '@/theme/UI/Paragraphs';
import { Title4 } from '@/theme/UI/Titles';

import { ButtonReadMore } from '../../Buttons/ButtonsReadMore';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        display: none;
    }
`;

export const MobileWrapper = styled.div`
    display: none;
    flex-direction: column;
    border-radius: ${({ theme }) => theme.borderRadius.small}px;
    box-shadow: ${({ theme }) => theme.shadows.shadowCard3};
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        display: flex;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        padding: ${({
            theme: {
                padding: { p2 },
            },
        }) => `0px ${p2}px ${p2}px ${p2}px`};
    }
`;

export const Image = styled.img`
    width: 100%;
`;

export const Subtext = styled(Parag2)`
    margin-top: ${({ theme }) => theme.margin.m3}px;
    color: ${({ theme }) => theme.colors.grey};
`;

export const Title = styled(Title4)`
    margin-top: 10px;
`;

export const Date = styled(Parag3)`
    margin-top: 20px;
    color: ${({ theme }) => theme.colors.grey};
`;

export const Button = styled(ButtonReadMore)`
    margin-top: ${({ theme }) => theme.margin.m2}px;
`;

export const Tags = styled.ul`
    margin-top: ${({ theme }) => theme.margin.m1}px;
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.gap.g1}px;
`;

export const Tag = styled(Parag1)`
    color: ${({ theme }) => theme.colors.blue};
    border: 1px solid ${({ theme }) => theme.colors.background};
    border-radius: 6px;
    padding: 3px 11px;
    font-weight: 700;
`;

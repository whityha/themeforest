import styled from 'styled-components';

import { Parag2, Parag3 } from '@/theme/UI/Paragraphs';
import { Title4 } from '@/theme/UI/Titles';

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

export const Button = styled.button`
    margin-top: 20px;
    align-self: start;
    color: ${({ theme }) => theme.colors.blue};
    padding-right: ${({ theme }) => theme.padding.p3}px;
    background: url('../../../assets/icons/icon_arrow_right.svg') no-repeat center right 5px;
    transition: ${({ theme }) => theme.transition.fast}s;
    cursor: pointer;
    &:hover {
        background: url('../../../assets/icons/icon_arrow_right.svg') no-repeat center right;
    }
`;

export const Date = styled(Parag3)`
    margin-top: 20px;
    color: ${({ theme }) => theme.colors.grey};
`;

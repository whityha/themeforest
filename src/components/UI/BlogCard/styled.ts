import styled from 'styled-components';

import { Parag2, Parag3 } from '@/theme/UI/Paragraphs';
import { Title4 } from '@/theme/UI/Titles';

import { ButtonReadMore } from '../Buttons/ButtonsReadMore';

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

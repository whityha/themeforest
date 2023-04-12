import styled from 'styled-components';

import { Parag3 } from '@/theme/UI/Paragraphs';
import { Title5 } from '@/theme/UI/Titles';

import { ButtonReadMore } from '../../Buttons/ButtonsReadMore';

export const Wrapper = styled.div`
    padding: ${({ theme: { padding } }) => `${padding.p3}px`};
    min-width: 40%;
    flex-basis: 0;
    flex-grow: 1;
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius.small}px;
`;

export const Icon = styled.img`
    height: 70px;
    margin-bottom: ${({ theme }) => theme.margin.m2}px;
`;

export const Title = styled(Title5)`
    margin-bottom: ${({ theme }) => theme.margin.m2}px;
`;

export const Subtext = styled(Parag3)`
    line-height: ${({ theme }) => theme.lineHeight.large};
    color: ${({ theme }) => theme.colors.grey};
    margin-bottom: ${({ theme }) => theme.margin.m2}px;
`;

export const Button = styled(ButtonReadMore)``;

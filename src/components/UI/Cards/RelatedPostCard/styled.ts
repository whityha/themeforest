import styled from 'styled-components';

import { Parag2, Parag3 } from '@/theme/UI/Paragraphs';
import { Title6 } from '@/theme/UI/Titles';

export const Wrapper = styled.div`
    display: flex;
    transition: ${({ theme }) => theme.transition.fast}s;
    &:hover {
        transform: translateX(-3%);
    }
`;

export const Image = styled.img`
    max-width: 34%;
    aspect-ratio: 1.25;
    object-fit: cover;
    margin-right: ${({ theme }) => theme.margin.m2}px;
`;

export const Date = styled(Parag3)`
    color: ${({ theme }) => theme.colors.grey};
`;

export const Title = styled(Title6)``;

export const Subtext = styled(Parag2)`
    color: ${({ theme }) => theme.colors.grey};
`;

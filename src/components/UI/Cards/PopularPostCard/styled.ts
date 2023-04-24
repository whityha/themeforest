import styled from 'styled-components';

import { Parag3 } from '@/theme/UI/Paragraphs';
import { Title6 } from '@/theme/UI/Titles';

export const Wrapper = styled.div`
    display: flex;
`;

export const Image = styled.img`
    max-width: 45%;
    margin-right: ${({ theme }) => theme.margin.m2}px;
    object-fit: contain;
`;

export const Date = styled(Parag3)`
    color: ${({ theme }) => theme.colors.grey};
`;

export const Title = styled(Title6)``;

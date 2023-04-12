import styled from 'styled-components';

import { Parag3 } from '@/theme/UI/Paragraphs';
import { Title5 } from '@/theme/UI/Titles';

export const Wrapper = styled.div`
    padding: ${({ theme }) => theme.padding.p3}px;
    width: calc(50% - ${({ theme }) => theme.gap.g3 / 2}px);
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius.small}px;
    box-shadow: ${({ theme }) => theme.shadows.shadowCard2};
`;

export const Icon = styled.img`
    margin-bottom: ${({ theme }) => theme.margin.m2}px;
`;

export const Title = styled(Title5)`
    margin-bottom: ${({ theme }) => theme.margin.m1}px;
`;

export const Subtext = styled(Parag3)`
    color: ${({ theme }) => theme.colors.grey};
`;

import styled from 'styled-components';

import { Parag3 } from '@/theme/UI/Paragraphs';
import { Title6, Title7Light } from '@/theme/UI/Titles';

export const Wrapper = styled.div`
    position: relative;
    padding: ${({ theme }) => theme.padding.p3}px;
    width: ${({ theme }) => theme.cardsWidth.customers}px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius.small}px;
    box-shadow: ${({ theme }) => theme.shadows.shadowCard3};
`;

export const Icon = styled.img`
    position: absolute;
    top: -40px;
    width: 80px;
    height: 80px;
    align-self: center;
`;

export const Name = styled(Title6)``;

export const WhoIs = styled(Title7Light)`
    color: ${({ theme }) => theme.colors.grey};
`;

export const Subtext = styled(Parag3)`
    margin-top: ${({ theme }) => theme.margin.m4}px;
    margin-bottom: ${({ theme }) => theme.margin.m2}px;
    color: ${({ theme }) => theme.colors.grey};
`;

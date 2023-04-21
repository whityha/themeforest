import styled from 'styled-components';

import { Parag3 } from '@/theme/UI/Paragraphs';

export const Wrapper = styled.div`
    display: flex;
`;

export const Select = styled.select``;

export const Option = styled.option``;

export const Title = styled(Parag3)`
    color: ${({ theme }) => theme.colors.grey};
    margin-right: ${({ theme }) => theme.margin.m1}px;
`;

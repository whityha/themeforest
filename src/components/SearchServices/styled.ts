import styled from 'styled-components';

import { Button } from '@/theme/UI/Button';
import { Parag3 } from '@/theme/UI/Paragraphs';

export const Wrapper = styled.div`
    display: flex;
`;

export const Input = styled(Parag3).attrs({ as: 'input' })`
    flex-grow: 1;
    margin-right: ${({ theme }) => -theme.margin.m1}px;
    color: ${({ theme }) => theme.colors.grey};
    padding: ${({ theme }) => `${theme.padding.p1 + 5}px ${theme.padding.p2}px`};
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: ${({ theme }) => theme.borderRadius.small}px;
    outline: none;
`;
export const SearchButton = styled(Button)`
    font-size: ${({ theme }) => theme.fontSize.s6}px;
    padding: ${({ theme }) => `0px ${theme.padding.p3}px`};
`;

import styled from 'styled-components';

import { Title4 } from '@/theme/UI/Titles';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled(Title4)`
    margin-bottom: ${({ theme }) => theme.margin.m3}px;
    color: ${({ theme }) => theme.colors.black};
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.gap.g1}px;
`;

export const Tag = styled.button<{ active: boolean }>`
    padding: ${({ theme }) => `${theme.padding.p1 - 4}px ${theme.padding.p1}px`};
    border-radius: ${({ theme }) => theme.borderRadius.small}px;
    border: 1px solid ${({ theme }) => theme.colors.background};
    color: ${({ theme, active }) => (active ? theme.colors.white : theme.colors.blue)};
    background: ${({ theme, active }) => (active ? theme.colors.blue : theme.colors.white)};
    font-weight: 700;
    cursor: pointer;
    &:hover {
        background: ${({ theme, active }) => (active ? theme.colors.lightBlue : theme.colors.blue)};
        color: ${({ theme, active }) => (active ? theme.colors.white : theme.colors.white)};
    }
`;

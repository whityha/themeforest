import styled from 'styled-components';

export const Wrapper = styled.ul`
    display: flex;
    column-gap: ${({ theme }) => theme.gap.g4}px;
`;

export const ListItem = styled.li`
    color: ${({ theme }) => theme.colors.grey};
    &:hover {
        color: ${({ theme }) => theme.colors.black};
    }
`;

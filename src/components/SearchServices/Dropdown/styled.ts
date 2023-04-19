import styled from 'styled-components';

export const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: translateY(100%);
`;

export const ListItem = styled.li`
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.black};
    padding: ${({ theme }) => `${theme.padding.p1 + 5}px ${theme.padding.p2}px`};
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-top: none;
    border-radius: ${({ theme }) => theme.borderRadius.small}px;
    cursor: pointer;
    &:hover {
        background: ${({ theme }) => theme.colors.helperBlue3};
    }
`;

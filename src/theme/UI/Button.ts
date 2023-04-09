import styled from 'styled-components';

export const Button = styled.button`
    background: ${({ theme }) => theme.colors.blue};
    border-radius: ${({ theme }) => theme.borderRadius.small}px;
    color: ${({ theme }) => theme.colors.white};
    transition: ${({ theme }) => theme.transition.fast}s;
    &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.colors.lightBlue};
    }
    &:active {
        background: ${({ theme }) => theme.colors.blue};
    }
    &:disabled {
        background: ${({ theme }) => theme.colors.grey};
    }
`;

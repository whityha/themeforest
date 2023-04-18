import styled from 'styled-components';

export const ButtonReadMore = styled.button`
    align-self: start;
    color: ${({ theme }) => theme.colors.blue};
    font-weight: bold;
    letter-spacing: -0.5px;
    padding-right: ${({ theme }) => theme.padding.p3}px;
    background: url('/assets/icons/icon_arrow_right.svg') no-repeat center right 5px;
    transition: ${({ theme }) => theme.transition.fast}s;
    cursor: pointer;
    &:hover {
        background: url('/assets/icons/icon_arrow_right.svg') no-repeat center right;
    }
`;

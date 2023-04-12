import styled from 'styled-components';

export const Wrapper = styled.ul`
    display: flex;
    column-gap: ${({ theme }) => theme.gap.g4}px;
`;

interface ListItem {
    light: boolean;
}

export const ListItem = styled.li<ListItem>`
    color: ${({ theme, light }) => (light ? theme.colors.white : theme.colors.grey)};
    transition: ${({ theme }) => theme.transition.fast}s;
    &:hover {
        color: ${({ theme, light }) => (light ? theme.colors.grey : theme.colors.black)};
        transform: translate(0, -15%);
    }
`;

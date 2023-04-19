import styled from 'styled-components';

export const Wrapper = styled.ul`
    display: flex;
    column-gap: ${({ theme }) => theme.gap.g4}px;
`;

interface ListItem {
    light: boolean;
}

export const ListItem = styled.li<ListItem>`
    position: relative;
    color: ${({ theme, light }) => (light ? theme.colors.grey : theme.colors.white)};
    transition: ${({ theme }) => theme.transition.fast}s;
    &:hover {
        color: ${({ theme, light }) => (light ? theme.colors.black : theme.colors.white)};
    }
    &:after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 0;
        display: block;
        width: 100%;
        height: 1px;
        opacity: 0;
        /* background: ${({ theme, light }) =>
            light ? theme.colors.darkBlue : theme.colors.background}; */
        background: ${({ theme, light }) => (light ? theme.colors.darkBlue : theme.colors.white)};
        transition: ${({ theme }) => theme.transition.fast}s;
        transform: translateY(-100%);
    }
    &:hover:after {
        opacity: 1;
        transform: translateY(0);
    }
`;

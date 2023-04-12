import styled from 'styled-components';

import { Button } from '@/theme/UI/Button';

interface ButtonProps {
    light: boolean;
}

export const Wrapper = styled(Button)<ButtonProps>`
    color: ${({ theme, light }) => (light ? theme.colors.darkBlue : theme.colors.white)};
    padding: ${({
        theme: {
            padding: { p1, p4 },
        },
    }) => `${p1}px ${p1}px ${p1}px ${p4}px`};
    background: ${({ theme, light }) => {
        return `url('../../../assets/icons/${
            light ? 'play_dark' : 'play'
        }.svg') no-repeat center left 5%,
        ${light ? theme.colors.white : theme.colors.blue}`;
    }};
    &:hover {
        background: url('../../../assets/icons/play.svg') no-repeat center left 5%,
            ${({ theme }) => theme.colors.lightBlue};
        color: ${({ theme, light }) => (light ? theme.colors.white : theme.colors.darkBlue)};
    }
    &:active {
        background: url('../../../assets/icons/play.svg') no-repeat center left 5%,
            ${({ theme }) => theme.colors.blue};
    }
`;

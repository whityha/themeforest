import styled from 'styled-components';

import { Button } from '@/theme/UI/Button';

export const Wrapper = styled(Button)`
    padding: ${({
        theme: {
            padding: { p1, p4 },
        },
    }) => `${p1}px ${p1}px ${p1}px ${p4}px`};
    background: url('../../../assets/icons/play.svg') no-repeat center left 5%,
        ${({ theme }) => theme.colors.blue};
    &:hover {
        background: url('../../../assets/icons/play.svg') no-repeat center left 5%,
            ${({ theme }) => theme.colors.lightBlue};
    }
    &:active {
        background: url('../../../assets/icons/play.svg') no-repeat center left 5%,
            ${({ theme }) => theme.colors.blue};
    }
`;

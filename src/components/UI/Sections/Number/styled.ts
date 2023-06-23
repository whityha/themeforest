import styled from 'styled-components';

import { Parag2 } from '@/theme/UI/Paragraphs';

export const Wrapper = styled.div<{ border?: boolean }>`
    display: flex;
    flex-grow: 1;
    justify-content: center;
    &:not(:last-child) {
        border-right: ${({ theme, border }) => `1px solid ${border && theme.colors.helperBlue3}`};
    }
`;

export const Number = styled.span`
    font-size: ${({ theme }) => theme.fontSize.s1}px;
    color: ${({ theme }) => theme.colors.blue};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-weight: 800;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        font-size: ${({ theme }) => theme.fontSize.s3}px;
        align-self: center;
    }
`;

export const Subtitle = styled(Parag2)`
    color: ${({ theme }) => theme.colors.grey};
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        text-align: center;
        line-height: ${({ theme }) => theme.lineHeight.large};
    }
`;

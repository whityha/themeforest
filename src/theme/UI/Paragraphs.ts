import styled, { css, DefaultTheme } from 'styled-components';

const generalStyle = (theme: DefaultTheme) => {
    return css`
        font-family: ${theme.fontFamily.secondary};
    `;
};
export const Parag1 = styled.p`
    font-size: ${({ theme }) => theme.fontSize.s5}px;
    ${({ theme }) => generalStyle(theme)};
    font-weight: 400;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        font-size: ${({ theme }) => theme.fontSize.s7}px;
    }
`;

export const Parag2 = styled.p`
    font-size: ${({ theme }) => theme.fontSize.s6}px;
    ${({ theme }) => generalStyle(theme)};
    font-weight: 400;
`;

export const Parag2Bold = styled.p`
    font-size: ${({ theme }) => theme.fontSize.s6}px;
    ${({ theme }) => generalStyle(theme)};
    font-weight: 700;
`;

export const Parag3 = styled.p`
    font-size: ${({ theme }) => theme.fontSize.s7}px;
    ${({ theme }) => generalStyle(theme)};
    font-weight: 400;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        font-size: ${({ theme }) => theme.fontSize.s7}px;
    }
`;

export const Parag3Bold = styled.p`
    font-size: ${({ theme }) => theme.fontSize.s7}px;
    ${({ theme }) => generalStyle(theme)};
    font-weight: 600;
`;

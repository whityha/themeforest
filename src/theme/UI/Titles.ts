import styled, { css, DefaultTheme } from 'styled-components';

const generalStyle = (theme: DefaultTheme) => {
    return css`
        font-family: ${theme.fontFamily.main};
    `;
};
export const Title1 = styled.h1`
    ${({ theme }) => generalStyle(theme)};
    font-size: ${({ theme }) => theme.fontSize.s1}px;
    font-weight: 800;
`;
export const Title2 = styled.h2`
    ${({ theme }) => generalStyle(theme)};
    font-size: ${({ theme }) => theme.fontSize.s2}px;
    font-weight: 800;
`;
export const Title3 = styled.h3`
    font-size: ${({ theme }) => theme.fontSize.s3}px;
    ${({ theme }) => generalStyle(theme)};
    font-weight: 800;
`;
export const Title4 = styled.h4`
    ${({ theme }) => generalStyle(theme)};
    font-size: ${({ theme }) => theme.fontSize.s4}px;
    font-weight: 700;
`;
export const Title5 = styled.h5`
    ${({ theme }) => generalStyle(theme)};
    font-size: ${({ theme }) => theme.fontSize.s5}px;
    font-weight: 700;
`;
export const Title6 = styled.h6`
    ${({ theme }) => generalStyle(theme)};
    font-size: ${({ theme }) => theme.fontSize.s6}px;
    font-weight: 700;
`;
export const Title7 = styled.h6`
    ${({ theme }) => generalStyle(theme)};
    font-size: ${({ theme }) => theme.fontSize.s7}px;
    font-weight: 600;
`;
export const Title7Light = styled.h6`
    ${({ theme }) => generalStyle(theme)};
    font-size: ${({ theme }) => theme.fontSize.s7}px;
    font-weight: 500;
`;

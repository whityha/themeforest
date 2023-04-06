import styled from 'styled-components';

export const Parag1 = styled.p`
    font-size: ${({ theme }) => theme.fontSize.s5}px;
    font-family: ${({ theme }) => theme.fontFamily.openSans};
    font-weight: 400;
`;

export const Parag2 = styled.p`
    font-size: ${({ theme }) => theme.fontSize.s6}px;
    font-family: ${({ theme }) => theme.fontFamily.openSans};

    font-weight: 400;
`;

export const Parag2Bold = styled.p`
    font-size: ${({ theme }) => theme.fontSize.s6}px;
    font-family: ${({ theme }) => theme.fontFamily.openSans};
    font-weight: 700;
`;

export const Parag3 = styled.p`
    font-size: ${({ theme }) => theme.fontSize.s7}px;
    font-family: ${({ theme }) => theme.fontFamily.openSans};
    font-weight: 400;
`;

export const Parag3Bold = styled.p`
    font-size: ${({ theme }) => theme.fontSize.s7}px;
    font-family: ${({ theme }) => theme.fontFamily.openSans};
    font-weight: 600;
`;

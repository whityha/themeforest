import styled from 'styled-components';

export const Image = styled.img`
    width: ${({ theme }) => theme.logo.width}px;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        width: 94px;
    }
`;

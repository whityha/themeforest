import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.gap.g2}px;
    width: 100%;
    margin-top: ${({ theme }) => theme.margin.m12}px;
`;

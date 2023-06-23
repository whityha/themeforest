import styled from 'styled-components';

export const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.g2}px;
`;

const generalStyle = `
    color: ${({ theme: { color } }: { theme: { color: string } }) => color};
    margin: 0 auto;
`;
export const Title = styled.h1`
    ${generalStyle}
`;

export const Description = styled.h2`
    ${generalStyle}
`;

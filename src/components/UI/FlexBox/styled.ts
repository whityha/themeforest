import styled from 'styled-components';

import { FlexBoxStyle } from '@/types';

export const Wrapper = styled.div<FlexBoxStyle>`
    flex-grow: ${({ grow }) => `${grow}` || 1};
    display: ${({ d }) => d};
    width: ${({ w }) => {
        if (typeof w === 'number') return `${w}%`;
        return w;
    }};
    min-width: ${({ w, minw }) => {
        if (w) return undefined;
        if (typeof minw === 'number') return `${minw}%`;
        return minw;
    }};
    max-width: ${({ w, maxw }) => {
        if (w) return undefined;
        if (typeof maxw === 'number') return `${maxw}%`;
        return maxw;
    }};
    align-self: ${({ alignSelf }) => alignSelf};
    flex-direction: ${({ direction }) => direction};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems};
    row-gap: ${({ rg }) => rg && `${rg}px`};
    column-gap: ${({ cg }) => cg && `${cg}px`};
    background-color: ${({ theme, background }) =>
        background ? theme.colors[background] : 'inherit'};
`;

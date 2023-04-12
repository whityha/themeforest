import styled from 'styled-components';

import { FlexBoxStyle } from '@/types';

export const Wrapper = styled.div<FlexBoxStyle>`
    display: ${({ d }) => d};
    width: ${({ w }) => {
        if (typeof w === 'number') return `${w}%`;
        return w;
    }};
    align-self: ${({ alignSelf }) => alignSelf};
    flex-direction: ${({ direction }) => direction};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems};
    row-gap: ${({ rg }) => `${rg}px`};
    column-gap: ${({ cg }) => `${cg}px`};
`;

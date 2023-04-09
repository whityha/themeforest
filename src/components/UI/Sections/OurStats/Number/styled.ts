import styled from 'styled-components';

import { Parag2 } from '@/theme/UI/Paragraphs';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 160px;
`;

export const Number = styled.span`
    font-size: ${({ theme }) => theme.fontSize.s1}px;
    color: ${({ theme }) => theme.colors.blue};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-weight: bolder;
`;

export const Subtitle = styled(Parag2)`
    color: ${({ theme }) => theme.colors.grey};
`;

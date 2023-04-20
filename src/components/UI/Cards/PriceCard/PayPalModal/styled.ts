import styled from 'styled-components';

import { Parag1 } from '@/theme/UI/Paragraphs';
import { Title3 } from '@/theme/UI/Titles';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.gap.g2}px;
    padding: ${({ theme: { padding } }) => `${padding.p5}px ${padding.p2}px`};
    background: ${({ theme }) => theme.colors.background};
`;

export const Title = styled(Title3)`
    color: ${({ theme }) => theme.colors.black};
`;

export const Price = styled(Parag1)`
    color: ${({ theme }) => theme.colors.black};
`;

export const Possibilities = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.gap.g2}px;
`;

export const Possibility = styled.li`
    color: ${({ theme }) => theme.colors.black};
    padding-left: ${({ theme }) => theme.padding.p3}px;
    background: url(/assets/icons/v_blue.svg) no-repeat left center;
`;

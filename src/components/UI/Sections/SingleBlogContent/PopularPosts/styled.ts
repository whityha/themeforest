import styled from 'styled-components';

import { Title4 } from '@/theme/UI/Titles';

export const PopularPostsContainer = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.gap.g2}px;
`;

export const Title = styled(Title4)`
    margin-bottom: ${({ theme }) => theme.margin.m3}px;
    color: ${({ theme }) => theme.colors.black};
`;

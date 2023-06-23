import styled from 'styled-components';

import { Title4 } from '@/theme/UI/Titles';

export const Title = styled(Title4)`
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: ${({ theme }) => theme.margin.m3}px;
`;

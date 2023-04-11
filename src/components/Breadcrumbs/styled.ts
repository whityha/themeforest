import styled from 'styled-components';

import { getWrapperWidth } from '@/theme/UI/Common';

export const Wrapper = styled.ul`
    display: flex;
    margin: 0 auto;
    padding: ${({ theme }) => `${theme.padding.p2}px 0px`};
`;

export const CurrentPageName = styled.li`
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.s7}px;
    line-height: ${({ theme }) => theme.lineHeight.large};
    font-weight: bold;
`;

export const HistoryPageName = styled.li`
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSize.s7}px;
    line-height: ${({ theme }) => theme.lineHeight.large};
    &:first-child {
        padding-left: 0px;
    }
`;

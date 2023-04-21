import styled from 'styled-components';

import { BackgroundProps } from '@/types';

interface Breadcrumps {
    center?: boolean;
}

export const Wrapper = styled.ul<Breadcrumps>`
    display: flex;
    margin: ${({ center }) => center && '0 auto'};
    padding: ${({ theme }) => `${theme.padding.p2}px 0px`};
`;

export const CurrentPageName = styled.li<BackgroundProps>`
    color: ${({ theme, background }) =>
        background === 'darkBlue' ? theme.colors.white : theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.s7}px;
    line-height: ${({ theme }) => theme.lineHeight.large};
    font-weight: 600;
`;

export const HistoryPageName = styled.li`
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSize.s7}px;
    line-height: ${({ theme }) => theme.lineHeight.large};
    padding-right: 10px;
    &:after {
        content: '';
        display: inline-block;
        width: 1px;
        margin-left: 10px;
        height: ${({ theme }) => theme.fontSize.s8}px;
        background: ${({ theme }) => theme.colors.grey};
    }
    &:first-child {
        padding-left: 0px;
    }
`;

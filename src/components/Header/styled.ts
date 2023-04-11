import styled from 'styled-components';

import { getWrapperWidth } from '@/theme/UI/Common';

interface HeaderProps {
    background: 'darkBlue' | 'background' | 'white';
}

export const OuterWrapper = styled.header<HeaderProps>`
    background: ${({ theme, background }) => theme.colors[background]};
`;

export const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${({ theme }) => getWrapperWidth(theme)}px;
    margin: 0 auto;
    padding-top: ${({ theme }) => theme.padding.p4}px;
    padding-bottom: ${({ theme }) => theme.padding.p4}px;
`;

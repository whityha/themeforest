import styled from 'styled-components';

import { getWrapperWidth } from '@/theme/UI/Common';

export const OuterWrapper = styled.div`
    background: ${({ theme }) => theme.colors.background};
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

import styled from 'styled-components';

import { getWrapperWidth } from '@/theme/UI/Common';
import { Title2 } from '@/theme/UI/Titles';

import { SectionTemplate } from '../../Templates';

export const Wrapper = styled(SectionTemplate)`
    width: ${({ theme }) => getWrapperWidth(theme)}px;
    padding: ${({ theme }) => `${theme.padding.p6}px 0px`};
    margin: 0 auto;
`;

export const Title = styled(Title2)`
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: ${({ theme }) => theme.margin.m5}px;
`;

export const Cards = styled.div`
    display: flex;
    column-gap: ${({ theme }) => theme.gap.g3}px;
`;

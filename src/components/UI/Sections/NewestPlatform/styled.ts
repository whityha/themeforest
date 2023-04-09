import styled from 'styled-components';

import { Button } from '@/theme/UI/Button';
import { getWrapperWidth } from '@/theme/UI/Common';
import { Parag1 } from '@/theme/UI/Paragraphs';
import { Title1 } from '@/theme/UI/Titles';
import { SectionProps } from '@/types';

export const Wrapper = styled.section<SectionProps>`
    display: flex;
    width: ${({ theme }) => getWrapperWidth(theme)}px;
    column-gap: ${({ theme }) => theme.gap.g3}px;
    margin: 0 auto;
    padding: ${({
        theme: {
            padding: { p7, p9 },
        },
    }) => `${p7}px 0 ${p9}px 0`};
`;

export const Title = styled(Title1)`
    color: ${({ theme }) => theme.colors.black};
    width: 50%;
    font-size: ${({ theme }) => theme.fontSize.s0}px;
    line-height: ${({ theme }) => theme.lineHeight.small};
`;

export const SubTitle = styled(Parag1)`
    color: ${({ theme }) => theme.colors.grey};
    line-height: ${({ theme }) => theme.lineHeight.large};
`;

export const ButtonDiscover = styled(Button)`
    width: ${({ theme }) => theme.buttonsWidth.large}px;
    padding-top: ${({ theme }) => theme.padding.p1 + 5}px;
    padding-bottom: ${({ theme }) => theme.padding.p1 + 5}px;
    box-shadow: ${({ theme }) => theme.shadows.shadowButton};
    margin-top: ${({ theme }) => theme.margin.m3}px;
`;

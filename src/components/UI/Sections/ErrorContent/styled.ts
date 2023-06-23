import styled from 'styled-components';

import { getWrapperWidth } from '@/theme/UI/Common';
import { Parag1 } from '@/theme/UI/Paragraphs';
import { Title1 } from '@/theme/UI/Titles';

import { SectionTemplate } from '../../Templates';

export const Wrapper = styled(SectionTemplate)`
    display: flex;
    width: ${({ theme }) => getWrapperWidth(theme)}px;
    column-gap: ${({ theme }) => theme.gap.g3}px;
    margin: 0 auto;
    padding: ${({
        theme: {
            padding: { p12 },
        },
    }) => `${p12}px 0`};
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

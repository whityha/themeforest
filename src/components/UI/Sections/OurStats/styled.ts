import styled from 'styled-components';

import { SectionTemplate } from '@/components/UI/Templates';
import { getWrapperWidth } from '@/theme/UI/Common';
import { Parag1 } from '@/theme/UI/Paragraphs';
import { Title2 } from '@/theme/UI/Titles';

export const Wrapper = styled(SectionTemplate)`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: ${({ theme }) => theme.gap.g5}px;
    width: ${({ theme }) => getWrapperWidth(theme)}px;
    margin: 0 auto;
    padding: ${({
        theme: {
            padding: { p8, p12 },
        },
    }) => `${p12}px 0 ${p8}px 0`};
`;

export const Title = styled(Title2)`
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
    width: 100%;
`;

export const SubTitle = styled(Parag1)`
    color: ${({ theme }) => theme.colors.grey};
    line-height: ${({ theme }) => theme.lineHeight.large};
`;

export const Content = styled.div`
    display: flex;
    column-gap: ${({ theme }) => theme.gap.g3}px;
    align-items: center;
`;

export const ContentBox = styled.div`
    display: flex;
    width: 50%;
    column-gap: ${({ theme }) => theme.gap.g3}px;
`;

export const ImageBlock = styled.img`
    width: calc(100% / 6);
`;

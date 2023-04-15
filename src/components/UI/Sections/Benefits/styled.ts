import styled from 'styled-components';

import { SectionTemplate } from '@/components/UI/Templates';
import { getWrapperWidth } from '@/theme/UI/Common';
import { Parag1 } from '@/theme/UI/Paragraphs';
import { Title2 } from '@/theme/UI/Titles';

export const Wrapper = styled(SectionTemplate)`
    padding: ${({ theme }) => `${theme.padding.p12}px 0`};
`;

export const Content = styled.div`
    display: flex;
    column-gap: ${({ theme }) => theme.gap.g3}px;
    width: ${({ theme }) => getWrapperWidth(theme)}px;
    margin: 0 auto;
    align-items: center;
`;

export const ContainerCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    gap: ${({ theme }) => theme.gap.g3}px;
    max-width: calc(50% - 15px);
    padding-bottom: ${({ theme }) => theme.padding.p5}px;
    & > div:nth-child(even) {
        transform: translateY(50px);
    }
`;

export const Title = styled(Title2)`
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: ${({ theme }) => theme.margin.m3}px;
`;
export const SubTitle = styled(Parag1)`
    color: ${({ theme }) => theme.colors.grey};
    line-height: ${({ theme }) => theme.lineHeight.large};
`;

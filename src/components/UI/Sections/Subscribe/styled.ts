import styled from 'styled-components';

import { getWrapperWidth } from '@/theme/UI/Common';
import { Parag1 } from '@/theme/UI/Paragraphs';
import { Title2 } from '@/theme/UI/Titles';
import { SectionProps } from '@/types';

export const Wrapper = styled.section<SectionProps>`
    display: flex;
    padding: ${({ theme }) => `${theme.padding.p8}px 0`};
    background: ${({ theme }) => theme.colors.darkBlue};
`;

export const Content = styled.div`
    display: flex;
    width: ${({ theme }) => getWrapperWidth(theme)}px;
    margin: 0 auto;
`;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;

export const Title = styled(Title2)`
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${({ theme }) => theme.margin.m2}px;
`;

export const Subtext = styled(Parag1)`
    color: ${({ theme }) => theme.colors.white};
`;

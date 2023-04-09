import styled from 'styled-components';

import { Button } from '@/theme/UI/Button';
import { getWrapperWidth } from '@/theme/UI/Common';
import { Parag1 } from '@/theme/UI/Paragraphs';
import { Title1 } from '@/theme/UI/Titles';
import { SectionProps } from '@/types';

export const Wrapper = styled.section<SectionProps>`
    display: flex;
    background: ${({ theme }) => theme.colors.background};
    column-gap: ${({ theme }) => theme.gap.g3}px;
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(50% - ${({ theme }) => theme.gap.g3 / 2}px);
`;

export const Content = styled.div`
    display: flex;
    width: 50%;
    max-width: ${({ theme }) => getWrapperWidth(theme) / 2 - theme.gap.g3 / 2}px;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.gap.g3}px;
    align-self: center;
`;

export const Title = styled(Title1)`
    color: ${({ theme }) => theme.colors.black};
`;
export const SubTitle = styled(Parag1)`
    color: ${({ theme }) => theme.colors.grey};
    line-height: ${({ theme }) => theme.lineHeight.large};
`;

export const Image = styled.img`
    width: 100%;
    object-fit: auto;
`;

export const ButtonLearn = styled(Button)`
    width: ${({ theme }) => theme.buttonsWidth.large}px;
    padding-top: ${({ theme }) => theme.padding.p1 + 5}px;
    padding-bottom: ${({ theme }) => theme.padding.p1 + 5}px;
    box-shadow: ${({ theme }) => theme.shadows.shadowButton};
    margin-top: ${({ theme }) => theme.margin.m3}px;
`;

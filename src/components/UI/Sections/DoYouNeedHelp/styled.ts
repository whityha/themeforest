import styled from 'styled-components';

import { Button } from '@/theme/UI/Button';
import { getWrapperWidth } from '@/theme/UI/Common';
import { Parag2 } from '@/theme/UI/Paragraphs';
import { Title2 } from '@/theme/UI/Titles';
import { SectionProps } from '@/types';

export const Wrapper = styled.section<SectionProps>`
    display: flex;
    padding: ${({ theme }) => `${theme.padding.p10}px 0`};
    background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: ${({ theme }) => theme.gap.g3}px;
    width: ${({ theme }) => getWrapperWidth(theme) / 2}px;
    margin: 0 auto;
`;

export const Subtext = styled(Parag2)`
    text-align: center;
    color: ${({ theme }) => theme.colors.grey};
`;

export const Title = styled(Title2)`
    text-align: center;
    color: ${({ theme }) => theme.colors.black};
`;

export const ContactButton = styled(Button)`
    width: ${({ theme }) => theme.buttonsWidth.large}px;
    padding: ${({ theme: { padding } }) => `${padding.p2}px 0px`};
    box-shadow: ${({ theme }) => theme.shadows.shadowButton};
`;

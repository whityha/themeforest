import styled from 'styled-components';

import { SectionTemplate, WrapperTemplate } from '@/components/UI/Templates';
import { Parag3 } from '@/theme/UI/Paragraphs';

export const Wrapper = styled(SectionTemplate)`
    display: none;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        display: block;
    }
`;

export const Content = styled(WrapperTemplate)`
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.gap.g2}px;
    padding-bottom: ${({ theme }) => theme.padding.p4}px;
`;

export const Image = styled.img`
    margin-bottom: ${({ theme }) => theme.margin.m4}px;
`;

export const Subtext = styled(Parag3)`
    color: ${({ theme }) => theme.colors.grey};
    line-height: ${({ theme }) => theme.lineHeight.large};
`;

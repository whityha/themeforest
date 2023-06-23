import styled from 'styled-components';

import { Parag3 } from '@/theme/UI/Paragraphs';
import { Title1 } from '@/theme/UI/Titles';

import { SectionTemplate, WrapperTemplate } from '..';

export const Content = styled(WrapperTemplate)`
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.gap.g10}px;
`;

export const Title = styled(Title1)`
    width: 50%;
`;

export const Subtext = styled(Parag3)`
    line-height: ${({ theme }) => theme.lineHeight.large};
    width: 33%;
`;

export const Wrapper = styled(SectionTemplate)`
    padding: ${({ theme }) => `${theme.padding.p4}px 0px ${theme.padding.p9}px 0px`};
    color: ${({ theme, background }) =>
        background === 'darkBlue' ? theme.colors.white : theme.colors.black};
    & ${Subtext} {
        color: ${({ theme }) => theme.colors.background};
    }
`;

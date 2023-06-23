import styled from 'styled-components';

import { Parag1 } from '@/theme/UI/Paragraphs';
import { Title1 } from '@/theme/UI/Titles';

import { SectionTemplate, WrapperTemplate } from '../../Templates';

export const Wrapper = styled(SectionTemplate)`
    padding: ${({ theme }) => `${theme.padding.p12}px 0px`};
`;

export const Content = styled(WrapperTemplate)`
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.gap.g12}px;
`;

export const Title = styled(Title1)`
    color: ${({ theme }) => theme.colors.black};
`;

export const Subtext = styled(Parag1)`
    color: ${({ theme }) => theme.colors.grey};
    line-height: ${({ theme }) => theme.lineHeight.large};
`;

export const Image = styled.img`
    min-width: 56%;
    object-fit: contain;
`;

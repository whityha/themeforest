import styled from 'styled-components';

import { Button } from '@/theme/UI/Button';
import { Parag2 } from '@/theme/UI/Paragraphs';
import { Title2 } from '@/theme/UI/Titles';

import { SectionTemplate, WrapperTemplate } from '../../Templates';

export const Wrapper = styled(SectionTemplate)`
    display: flex;
    padding: ${({ theme }) => `${theme.padding.p10}px 0`};
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        padding: ${({
            theme: {
                padding: { p4, p5 },
            },
        }) => `${p4}px 0 ${p5}px 0`};
    }
`;

export const Content = styled(WrapperTemplate)`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: ${({ theme }) => theme.gap.g3}px;
    margin: 0 auto;
`;

export const Subtext = styled(Parag2)`
    text-align: center;
    width: 45%;
    color: ${({ theme }) => theme.colors.grey};
    line-height: ${({ theme }) => theme.lineHeight.large};
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        width: 100%;
    }
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

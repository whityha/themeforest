import styled from 'styled-components';

import { SectionTemplate, WrapperTemplate } from '@/components/UI/Templates';
import { Parag1 } from '@/theme/UI/Paragraphs';
import { Title2 } from '@/theme/UI/Titles';

export const Wrapper = styled(SectionTemplate)`
    position: relative;
    padding: ${({ theme }) => `${theme.padding.p8}px 0`};
    background: ${({ theme, background }) => background && theme.colors[background]};
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        padding: ${({ theme }) => `${theme.padding.p8}px 0 ${theme.padding.p12}px 0`};
        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 5%;
            width: 90%;
            height: 1px;
            background: ${({ theme }) => theme.colors.helperBlue2};
        }
    }
`;

export const Content = styled(WrapperTemplate)`
    display: flex;

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        flex-direction: column;
    }
`;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        text-align: center;
        width: 100%;
    }
`;

export const Title = styled(Title2)`
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${({ theme }) => theme.margin.m2}px;
`;

export const Subtext = styled(Parag1)`
    color: ${({ theme }) => theme.colors.white};
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        display: none;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        width: 100%;
    }
`;

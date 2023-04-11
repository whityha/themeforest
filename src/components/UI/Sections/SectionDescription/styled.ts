import styled from 'styled-components';

import { Parag3 } from '@/theme/UI/Paragraphs';
import { Title2 } from '@/theme/UI/Titles';

import { SectionTemplate, WrapperTemplate } from '../../Templates';

export const Wrapper = styled(SectionTemplate)``;

export const Content = styled(WrapperTemplate)`
    display: flex;
    align-items: flex-start;
    column-gap: ${({ theme }) => theme.gap.g5}px;
    padding: ${({ theme }) => `${theme.padding.p12}px 0px`};
`;

export const ThesisContainer = styled.ul`
    position: sticky;
    top: 100px;
    display: flex;
    flex-direction: column;
    flex-basis: 37%;
    min-width: 37%;
`;

interface ThesisProps {
    active?: boolean;
}

export const ThesisItem = styled.li<ThesisProps>`
    display: flex;
    align-items: center;
    height: 60px;
    color: ${({ theme }) => theme.colors.black};
    padding-left: ${({ theme }) => `${theme.padding.p3}px`};
    border-left: 5px solid
        ${({ theme, active }) => (active ? theme.colors.blue : theme.colors.helperBlue3)};
    transition: ${({ theme }) => theme.transition.fast}s;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 900px;
`;

export const Title = styled(Title2)`
    color: ${({ theme }) => theme.colors.black};
`;

export const Subtext = styled(Parag3)`
    color: ${({ theme }) => theme.colors.grey};
    width: 70%;
    margin-top: ${({ theme }) => theme.margin.m4}px;
    margin-bottom: ${({ theme }) => theme.margin.m4}px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

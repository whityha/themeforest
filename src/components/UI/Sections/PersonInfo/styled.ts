import styled from 'styled-components';

import { Parag1 } from '@/theme/UI/Paragraphs';
import { Title2, Title6 } from '@/theme/UI/Titles';

import { SectionTemplate, WrapperTemplate } from '../../Templates';

export const Wrapper = styled(SectionTemplate)`
    padding: ${({ theme: { padding } }) => `${padding.p12}px 0px`};
`;

export const Content = styled(WrapperTemplate)`
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.gap.g12}px;
`;

export const Photo = styled.img`
    width: 100%;
    max-height: 400px;
    object-fit: contain;
`;

export const PhotoContainer = styled.div`
    flex-basis: 40%;
    flex-grow: 1;
`;

export const Title = styled(Title6)`
    color: ${({ theme }) => theme.colors.blue};
    margin-bottom: 5px;
    &:not(:first-child) {
        margin-top: ${({ theme }) => theme.margin.m2}px;
    }
`;

export const Subtitle = styled(Parag1)`
    color: ${({ theme }) => theme.colors.black};
`;

export const Info = styled.div`
    display: flex;
    flex-basis: 40%;
    flex-grow: 1;
    flex-direction: column;
`;

export const QuestionTitle = styled(Title2)`
    flex-basis: 40%;
    flex-grow: 1;
    color: ${({ theme }) => theme.colors.black};
`;

const Link = styled.a`
    display: flex;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: ${({ theme }) => theme.transition.fast}s;
    &:hover {
        transform: translateY(-10%);
    }
`;

export const Linkedin = styled(Link)`
    background: url('/assets/icons/socials/icon_linkedin.svg') no-repeat center center;
`;

export const Facebook = styled(Link)`
    background: url('/assets/icons/socials/icon_facebook.svg') no-repeat center center;
`;

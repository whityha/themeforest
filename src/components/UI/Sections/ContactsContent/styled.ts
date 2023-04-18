import styled from 'styled-components';

import { Title7 } from '@/theme/UI/Titles';

import { SectionTemplate, WrapperTemplate } from '../../Templates';

export const Wrapper = styled(SectionTemplate)`
    padding-bottom: ${({ theme }) => `${theme.padding.p12}px`};
`;

export const Content = styled(WrapperTemplate)``;

export const Title = styled.h1`
    flex-basis: 40%;
    flex-grow: 1;
    line-height: 1.1;
    letter-spacing: -2px;
    font-size: ${({ theme }) => theme.fontSize.extra}px;
    color: ${({ theme }) => theme.colors.black};
`;

export const Contacts = styled.div`
    display: flex;
    column-gap: ${({ theme }) => theme.gap.g5}px;
`;

export const FormContainer = styled.div`
    display: flex;
    margin-top: ${({ theme }) => theme.margin.m7}px;
`;

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.grey};
    row-gap: ${({ theme }) => theme.gap.g1}px;
`;

export const TitleContact = styled(Title7)<{ icon: string }>`
    color: ${({ theme }) => theme.colors.black};
    padding-left: ${({ theme }) => theme.padding.p3}px;
    background: ${({ icon }) =>
        `url(/assets/icons/contacts/${icon}_grey.svg) no-repeat left center`};
`;

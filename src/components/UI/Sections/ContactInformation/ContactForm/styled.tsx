import { Field, Form } from 'formik';
import styled from 'styled-components';

import { Button } from '@/theme/UI/Button';

export const FormContainer = styled(Form)`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    flex-wrap: wrap;
    column-gap: ${({ theme }) => theme.gap.g3}px;
    margin-top: ${({ theme }) => theme.margin.m2}px;
`;

export const Input = styled(Field)`
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.background};
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
    padding: ${({ theme }) => `${theme.padding.p1}px 0px`};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.s7}px;
`;

interface InputContainer {
    title: string;
    full?: boolean;
}

export const InputContainer = styled.div<InputContainer>`
    position: relative;
    margin-bottom: ${({ theme }) => theme.margin.m5}px;
    min-width: ${({ full }) => (full ? 100 : 40)}%;
    flex-basis: 0;
    flex-grow: 1;
    &::before {
        content: attr(title);
        position: absolute;
        left: 0;
        top: ${({ theme }) => -theme.margin.m2}px;
        color: ${({ theme }) => theme.colors.grey};
        font-size: ${({ theme }) => theme.fontSize.s8}px;
    }
`;

export const SubmitButton = styled(Button)`
    padding: ${({ theme: { padding } }) => `${padding.p1}px ${padding.p5}px`};
    line-height: ${({ theme }) => theme.lineHeight.large};
    &:disabled {
        cursor: auto;
    }
`;

export const Error = styled.span`
    display: flex;
    position: absolute;
    left: 0;
    bottom: -20px;
    font-size: ${({ theme }) => theme.fontSize.s8}px;
    color: ${({ theme }) => theme.colors.red};
`;

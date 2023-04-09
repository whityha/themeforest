import { Field, Form } from 'formik';
import styled from 'styled-components';

import { Parag3 } from '@/theme/UI/Paragraphs';

interface ErrorProps {
    error?: string | boolean;
}
export const FormContainer = styled(Form)<ErrorProps>`
    display: flex;
    position: relative;
    width: ${({ theme }) => theme.buttonsWidth.max}px;
    outline: ${({ theme, error }) => (error ? theme.borders.error : null)};
    border-radius: ${({ theme }) => theme.borderRadius.small}px;
`;

export const Input = styled(Field)`
    position: relative;
    padding: ${({ theme: { padding } }) => `${padding.p2}px ${padding.p2}px`};
    color: ${({ theme }) => theme.colors.black};
    flex-grow: 1;
    outline: none;
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-size: ${({ theme }) => theme.fontSize.s7}px;
    background: ${({ theme }) => theme.colors.helperBlue3};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.small}px;
    margin-right: ${({ theme }) => -theme.margin.m1}px;
    &:disabled {
        color: ${({ theme }) => theme.colors.grey};
    }
`;

export const SendButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: ${({ theme }) => theme.buttonsWidth.medium}px;
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius.small}px;
    cursor: pointer;
    transition: ${({ theme }) => theme.transition.fast}s;
    &:disabled {
        color: ${({ theme }) => theme.colors.grey};
        cursor: auto;
    }
    &:not([disabled]) {
        width: ${({ theme }) => theme.buttonsWidth.medium + 30}px;
    }
    &:hover:not([disabled]) {
        background: ${({ theme }) => theme.colors.green};
        color: ${({ theme }) => theme.colors.white};
    }
`;

export const Error = styled(Parag3)<ErrorProps>`
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    color: ${({ theme }) => theme.colors.white};
    transition: ${({ theme }) => theme.transition.fast}s;
    transform: ${({ theme, error }) => (error ? `translateY(25px)` : null)};
`;

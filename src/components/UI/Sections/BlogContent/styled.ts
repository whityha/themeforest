import styled from 'styled-components';

import { Button } from '@/theme/UI/Button';

import { SectionTemplate, WrapperTemplate } from '../../Templates';

export const Wrapper = styled(SectionTemplate)`
    padding: ${({ theme }) => `${theme.padding.p12}px 0px`};
`;

export const Content = styled(WrapperTemplate)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArticlesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: ${({ theme }) => theme.gap.g3}px;
    row-gap: ${({ theme }) => theme.gap.g6}px;
`;

export const CardContainer = styled.div`
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;
`;

export const ButtonMoreContainer = styled.div<{ disabled: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.blue};
    border-radius: ${({ theme }) => theme.borderRadius.small}px;
    padding: ${({ theme: { padding } }) => `${padding.p2}px ${padding.p3}px`};
    min-width: ${({ theme }) => theme.buttonsWidth.large}px;
    min-height: 60px;
    margin-top: ${({ theme }) => theme.margin.m5}px;
    cursor: pointer;
    &:hover {
        background: ${({ theme }) => theme.colors.lightBlue};
    }
    &[disabled] {
        background: ${({ theme }) => theme.colors.lightBlue};
    }
    &[disabled]:hover {
        cursor: auto;
        background: ${({ theme }) => theme.colors.lightBlue};
    }
`;

export const ButtonMore = styled.button`
    cursor: pointer;
    height: 20px;
    color: ${({ theme }) => theme.colors.white};
`;

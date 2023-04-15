import styled from 'styled-components';

import { Parag1 } from '@/theme/UI/Paragraphs';
import { Title4 } from '@/theme/UI/Titles';

interface ActiveItem {
    active?: boolean;
}

export const Wrapper = styled.div<ActiveItem>`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: ${({ theme }) => theme.padding.p3 + 5}px;
    padding-right: ${({ theme }) => theme.padding.p9}px;
    border-radius: ${({ theme }) => theme.borderRadius.small}px;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    cursor: pointer;
    &:after {
        content: '';
        position: absolute;
        right: 35px;
        top: 50px;
        width: 18px;
        height: 2px;
        background-color: ${({ theme: { colors }, active }) =>
            active ? colors.blue : colors.black};
    }
    &:before {
        content: '';
        position: absolute;
        display: ${({ active }) => (active ? 'none' : 'block')};
        right: 43px;
        top: 42px;
        width: 2px;
        height: 18px;
        background-color: ${({ theme: { colors }, active }) =>
            active ? colors.blue : colors.black};
    }
`;

export const Title = styled(Title4)<ActiveItem>`
    color: ${({ theme: { colors }, active }) => (active ? colors.blue : colors.black)};
`;

export const Content = styled(Parag1)<ActiveItem>`
    color: ${({ theme }) => theme.colors.grey};
    display: ${({ active }) => (active ? 'block' : 'none')};
    margin-top: ${({ theme }) => theme.margin.m3}px;
`;

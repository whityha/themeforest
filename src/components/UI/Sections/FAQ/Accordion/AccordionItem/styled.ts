import styled from 'styled-components';

import { Parag1 } from '@/theme/UI/Paragraphs';
import { Title4 } from '@/theme/UI/Titles';

interface ActiveItem {
    active?: boolean;
}

export const Wrapper = styled.div<ActiveItem>`
    display: flex;
    flex-direction: column;
    border-radius: ${({ theme }) => theme.borderRadius.small}px;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    cursor: pointer;
`;

export const Title = styled(Title4)<ActiveItem>`
    position: relative;
    color: ${({ theme: { colors }, active }) => (active ? colors.blue : colors.black)};
    padding: ${({ theme }) => theme.padding.p3 + 5}px;
    padding-right: ${({ theme }) => theme.padding.p9}px;
    &:after {
        content: '';
        position: absolute;
        top: 50%;
        right: 30px;
        width: 18px;
        height: 2px;
        background-color: ${({ theme: { colors }, active }) =>
            active ? colors.blue : colors.black};
        transform: translateY(-50%);
    }
    &:before {
        content: '';
        position: absolute;
        top: 50%;
        right: 38px;
        display: ${({ active }) => (active ? 'none' : 'block')};
        width: 2px;
        height: 18px;
        transform: translateY(-50%);
        background-color: ${({ theme: { colors }, active }) =>
            active ? colors.blue : colors.black};
    }
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        padding: ${({ theme }) => theme.padding.p1 + 5}px;
        padding-right: ${({ theme }) => theme.padding.p9}px;
    }
`;

export const Content = styled(Parag1)<ActiveItem>`
    color: ${({ theme }) => theme.colors.grey};
    display: ${({ active }) => (active ? 'block' : 'none')};
    padding: ${({ theme }) => theme.padding.p3 + 5}px;
    padding-top: 0;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        padding: ${({ theme }) => theme.padding.p1 + 5}px;
        padding-top: 0;
    }
`;

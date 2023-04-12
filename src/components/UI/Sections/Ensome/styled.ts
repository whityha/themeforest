import styled from 'styled-components';

import { getWrapperWidth } from '@/theme/UI/Common';
import { Parag2 } from '@/theme/UI/Paragraphs';
import { Title1 } from '@/theme/UI/Titles';

import { SectionTemplate } from '../../Templates';

export const Content = styled.div`
    position: relative;
    display: flex;
    width: ${({ theme }) => getWrapperWidth(theme)}px;
    justify-content: space-between;
    margin: 0 auto;
    padding: ${({
        theme: {
            padding: { p7, p9 },
        },
    }) => `${p7}px 0 ${p9}px 0`};
`;

export const Title = styled(Title1)`
    color: ${({ theme }) => theme.colors.black};
    width: calc((540 / 1110) * 100%);
`;
export const SubTitle = styled(Parag2)`
    line-height: ${({ theme }) => theme.lineHeight.large};
    color: ${({ theme }) => theme.colors.grey};
`;

export const Wrapper = styled(SectionTemplate)``;

export const ButtonMore = styled.button`
    position: absolute;
    bottom: -60px;
    right: 20%;
    border: 10px solid white;
    width: 140px;
    height: 140px;
    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius.round}%;
    cursor: pointer;
    transition: 0.2s;
    &:after {
        content: '';
        position: absolute;
        min-width: 104px;
        min-height: 104px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1);
        border: 1px solid ${({ theme }) => theme.colors.white};
        border-radius: ${({ theme }) => theme.borderRadius.round}%;
        transition: 0.2s;
    }
    &:hover {
        background: ${({ theme }) => theme.colors.lightBlue};
    }
    &:hover:after {
        content: '';
        transition: 0.2s;
        transform: translate(-50%, -50%) scale(1.2);
    }
`;

export const Image = styled.img`
    aspect-ratio: 1920 / 560;
    display: block;
    width: 100%;
    object-fit: auto;
    margin: 0 auto;
`;

import styled from 'styled-components';

import { getWrapperWidth } from '@/theme/UI/Common';
import { Parag3 } from '@/theme/UI/Paragraphs';
import { Title6 } from '@/theme/UI/Titles';

import { IconProps } from './types';

export const Wrapper = styled.footer`
    display: flex;
    flex-direction: column;
    padding-top: ${({ theme: { padding } }) => `${padding.p5}px`};
    background: ${({ theme }) => theme.colors.darkBlue};
`;

export const Content = styled.div`
    display: flex;
    width: ${({ theme }) => getWrapperWidth(theme)}px;
    margin: 0 auto;
    justify-content: flex-end;
`;

export const SocialsBlock = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.gap.g2}px;
    width: 26%;
    margin-right: auto;
`;

export const Subtext = styled(Parag3)`
    color: ${({ theme }) => theme.colors.grey};
    line-height: ${({ theme }) => theme.lineHeight.large};
`;

export const IconsList = styled.ul`
    display: flex;
`;

export const Icon = styled.div<IconProps>`
    display: block;
    position: relative;
    margin-right: ${({ theme }) => theme.margin.m1 + 5}px;
    background: ${({ src }) => `url(${src}) no-repeat center center / 24px`};
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: ${({ theme }) => theme.transition.fast}s;
    &:after {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        border: 1px solid white;
        border-radius: ${({ theme }) => theme.borderRadius.round}%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: ${({ theme }) => theme.transition.fast}s;
    }
    &:hover {
        transform: scale(1.2);
    }
    &:hover:after {
        transform: translate(-50%, -50%) scale(1.6);
    }
`;

export const Title = styled(Title6)`
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${({ theme }) => theme.margin.m3}px;
`;

export const InfoBox = styled.div`
    margin-left: ${({ theme }) => theme.margin.m11}px;
    &:last-child {
        width: 25%;
        padding-right: ${({ theme }) => theme.padding.p5}px;
    }
`;

export const LinksList = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.gap.links}px;
`;

export const LinkItem = styled.li`
    color: ${({ theme }) => theme.colors.grey};
    line-height: ${({ theme }) => theme.lineHeight.large};
    font-size: ${({ theme }) => theme.fontSize.s7}px;
    cursor: pointer;
    transition: color ${({ theme }) => theme.transition.fast}s;
    &:hover {
        color: ${({ theme }) => theme.colors.white};
    }
`;

export const Policy = styled.div`
    display: flex;
    column-gap: ${({ theme }) => theme.gap.g2}px;
    border-top: 1px solid ${({ theme }) => theme.colors.helperBlue2};
    width: ${({ theme }) => getWrapperWidth(theme)}px;
    margin: ${({ theme }) => `${theme.margin.m5}px auto 0 auto`};
    padding: ${({ theme }) => `${theme.padding.p5}px 0px`};
`;

export const Rights = styled(Parag3)`
    color: ${({ theme }) => theme.colors.grey};
    margin-right: auto;
`;

export const Privacy = styled(Parag3)`
    color: ${({ theme }) => theme.colors.grey};
    margin-right: ${({ theme }) => theme.margin.m8}px;
`;

export const Terms = styled(Parag3)`
    color: ${({ theme }) => theme.colors.grey};
`;

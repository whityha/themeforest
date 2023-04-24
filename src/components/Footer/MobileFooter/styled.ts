import styled from 'styled-components';

import { WrapperTemplate } from '@/components/UI/Templates';
import { Parag3 } from '@/theme/UI/Paragraphs';

export const Wrapper = styled.div<{ background: 'white' | 'darkBlue' }>`
    display: none;
    padding-top: ${({ theme }) => theme.padding.p4}px;
    background: ${({ theme, background }) => theme.colors[background]};
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        display: flex;
    }
`;

export const Content = styled(WrapperTemplate)`
    color: ${({ theme }) => theme.colors.white};
`;

export const FollowUs = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.white};
    margin-top: ${({ theme }) => theme.margin.m6}px;
    margin-bottom: ${({ theme }) => theme.margin.m3}px;
`;
export const SocialList = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-basis: 60%;
`;

export const SocialItem = styled.li<{ image: string }>`
    width: 25px;
    height: 25px;
    background: ${({ image }) => `url(/assets/icons/socials/${image}.svg) no-repeat center center`};
`;

export const Subtext = styled(Parag3)`
    color: ${({ theme }) => theme.colors.tertiary};
    font-size: ${({ theme }) => theme.fontSize.s8}px;
    margin-bottom: ${({ theme }) => theme.margin.m1}px;
`;

export const Reserved = styled.div`
    padding: ${({ theme }) => `${theme.padding.p1}px 0px`};
    color: ${({ theme }) => theme.colors.helperBlue2};
    font-size: ${({ theme }) => theme.fontSize.s8}px;
    border-top: 1px solid ${({ theme }) => theme.colors.helperBlue2};
`;

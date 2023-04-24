import styled from 'styled-components';

import { WrapperTemplate } from '@/components/UI/Templates';

export const Wrapper = styled.div<{ background: 'white' | 'darkBlue' }>`
    width: 100%;
    position: absolute;
    min-height: calc(100vh - 70px);
    background: ${({ theme, background }) => theme.colors[background]};
    z-index: 2;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        display: flex;
    }
`;

export const Content = styled(WrapperTemplate)``;

export const FollowUs = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.black};
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
    background: ${({ image }) =>
        `url(/assets/icons/socials/${image}_blue.svg) no-repeat center center`};
`;

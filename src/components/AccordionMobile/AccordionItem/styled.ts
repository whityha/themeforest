import styled from 'styled-components';

type Opens = {
    isOpen: boolean;
    dark?: boolean;
};

type ColorBackground = {
    dark?: boolean;
};

export const Wrapper = styled.div<ColorBackground>`
    display: flex;
    width: 100%;
    color: ${({ dark, theme }) => {
        return dark ? `${theme.colors.white}` : `${theme.colors.black}`;
    }};
    flex-direction: column;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const Arrow = styled.span<Opens>`
    display: block;
    position: absolute;
    right: 20px;
    top: 50%;
    height: 12px;
    width: 12px;
    background: ${({ dark }) =>
        dark
            ? `url('/assets/icons/services/quote-white.svg') no-repeat center right`
            : `url('/assets/icons/services/quote.svg') no-repeat center right`};
    transform: ${({ isOpen }) =>
        isOpen ? `translateY(-50%) rotate(180deg)` : `translateY(-50%) rotate(0deg)`};
`;

export const Main = styled.div`
    position: relative;
    padding: ${({ theme }) => theme.padding.p2}px 0px;
    font-size: ${({ theme }) => theme.fontSize.s6}px;
    font-weight: 600;
    transition: background ${({ theme }) => theme.transition.fast}s;
    cursor: pointer;
`;

export const Details = styled.ul<Opens>`
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-start;
`;

export const LinkItem = styled.li<ColorBackground>`
    padding-left: ${({ theme }) => theme.padding.p3}px;
    padding-right: ${({ theme }) => theme.padding.p3}px;
    margin-bottom: ${({ theme }) => theme.margin.m1}px;
    font-size: ${({ theme }) => theme.fontSize.s7}px;
    font-weight: 600;
    background: ${({ dark }) =>
        dark
            ? `url(/assets/icons/header/arrow-right-white.svg) no-repeat center right`
            : `url(/assets/icons/header/arrow-right.svg) no-repeat center right`};
`;

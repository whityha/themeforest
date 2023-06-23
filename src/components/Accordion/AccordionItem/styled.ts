import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const Main = styled.div`
    padding: ${({ theme }) => theme.padding.p2}px 0px;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.s5}px;
    background: url('/assets/icons/services/quote.svg') no-repeat center right;
    transition: background ${({ theme }) => theme.transition.fast}s;
    cursor: pointer;
    &:hover {
        background: url('/assets/icons/services/quote.svg') no-repeat center right 5%;
    }
`;

interface Details {
    open: boolean;
}

export const Details = styled.div<Details>`
    padding: ${({ theme }) => theme.padding.p2}px 0px;
    color: ${({ theme }) => theme.colors.grey};
    display: ${({ open }) => (open ? 'block' : 'none')};
`;

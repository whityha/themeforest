import styled from 'styled-components';

import { Button } from '@/theme/UI/Button';
import { Title4, Title6 } from '@/theme/UI/Titles';

export const Title = styled(Title6)`
    margin-bottom: ${({ theme }) => theme.margin.m2}px;
    color: ${({ theme }) => theme.colors.black};
`;

export const ButtonPlan = styled(Button)`
    padding: ${({ theme }) => `${theme.padding.p1}px 0px`};
    margin: ${({ theme }) => `${theme.margin.m3}px 0px`};
`;

export const Price = styled(Title4)`
    color: ${({ theme }) => theme.colors.black};
    margin-right: auto;
`;

export const Possibilities = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.gap.g2}px;
`;

export const Possibility = styled.li`
    color: ${({ theme }) => theme.colors.black};
    padding-left: ${({ theme }) => theme.padding.p3}px;
    background: url(../../../assets/icons/v_blue.svg) no-repeat left center;
`;

export const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 41px;
    height: 32px;
    margin-left: ${({ theme }) => theme.margin.m1}px;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.blue};
    border: 1px solid ${({ theme }) => theme.colors.blue};
    border-radius: ${({ theme }) => theme.borderRadius.small}px;
    transition: ${({ theme }) => theme.transition.fast}s;
`;

export const Input = styled.input`
    display: none;
    transition: ${({ theme }) => theme.transition.fast}s;

    &:checked + ${Label} {
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.blue};
    }
`;
export const Wrapper = styled.div`
    display: flex;
    width: 25%;
    border-radius: ${({ theme }) => theme.borderRadius.small}px;
    flex-direction: column;
    box-shadow: ${({ theme }) => theme.shadows.shadowCard3};
    padding: ${({ theme: { padding } }) => `${padding.p3}px ${padding.p2}px`};
    transition: ${({ theme }) => theme.transition.fast}s;
    &:hover {
        background: ${({ theme }) => theme.colors.blue};
    }
    &:hover ${Title}, &:hover ${Price}, &:hover ${Possibility} {
        color: ${({ theme }) => theme.colors.white};
    }
    &:hover ${ButtonPlan} {
        color: ${({ theme }) => theme.colors.blue};
        background: ${({ theme }) => theme.colors.white};
    }
    &:hover ${Possibility} {
        background: url(../../../assets/icons/v_white.svg) no-repeat left center;
    }
    &:hover ${Label} {
        background: ${({ theme }) => theme.colors.blue};
        color: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.white};
    }

    &:hover ${Input} {
        &:checked + ${Label} {
            color: ${({ theme }) => theme.colors.blue};
            background: ${({ theme }) => theme.colors.white};
        }
    }
`;

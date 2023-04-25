import styled from 'styled-components';

import { Parag2 } from '@/theme/UI/Paragraphs';
import { Title5 } from '@/theme/UI/Titles';

export const Image = styled.img`
    transition: ${({ theme }) => theme.transition.fast}s;
    width: 100%;
    height: 100%;
`;

export const Socials = styled.div`
    display: flex;
    position: absolute;
    bottom: 25px;
    right: 25px;
    transform: translateY(100%);
    opacity: 0;
    transition: ${({ theme }) => theme.transition.fast}s;
`;
const Link = styled.a`
    display: flex;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: ${({ theme }) => theme.transition.fast}s;
    &:hover {
        transform: translateY(-10%);
    }
`;

export const Linkedin = styled(Link)`
    background: url('/assets/icons/socials/linkedin.svg') no-repeat center center;
`;

export const Facebook = styled(Link)`
    background: url('/assets/icons/socials/facebook.svg') no-repeat center center;
`;

export const Wrapper = styled.div`
    border-radius: ${({ theme }) => theme.borderRadius.small}px;
    overflow: hidden;
    position: relative;
    flex-basis: 30%;
    flex-grow: 1;
    cursor: pointer;
    &:hover ${Image} {
        transform: scale(1.03);
    }
    &:hover ${Socials} {
        transform: translateY(0);

        opacity: 1;
    }
`;

export const Name = styled(Title5)`
    color: ${({ theme }) => theme.colors.white};
`;

export const Profession = styled(Parag2)`
    color: ${({ theme }) => theme.colors.white};
`;

export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 25px;
    bottom: 25px;
`;

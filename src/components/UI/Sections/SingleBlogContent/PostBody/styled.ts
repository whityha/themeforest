import styled from 'styled-components';

import { Parag2, Parag3 } from '@/theme/UI/Paragraphs';
import { Title2 } from '@/theme/UI/Titles';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Image = styled.img`
    width: 100%;
    object-fit: contain;
    margin-bottom: ${({ theme }) => theme.margin.m2}px;
`;

export const InfoBox = styled(Parag3).attrs({ as: 'div' })<{ src: string }>`
    display: flex;
    align-items: start;
    color: ${({ theme }) => theme.colors.grey};
    padding-left: ${({ theme }) => theme.padding.p2}px;
    background: ${({ src }) => `url(${src}) no-repeat center left`};
`;

export const Title = styled(Title2)`
    color: ${({ theme }) => theme.colors.black};
    margin-top: ${({ theme }) => theme.margin.m4}px;
    margin-bottom: ${({ theme }) => theme.margin.m2}px;
`;

export const Subtext = styled(Parag2)`
    color: ${({ theme }) => theme.colors.grey};
    margin-bottom: ${({ theme }) => theme.margin.m4}px;
`;

export const SocialLink = styled.a<{ src: string }>`
    display: block;
    width: 25px;
    height: 25px;
    background: ${({ src }) => `url(${src}) no-repeat center center`};
    &:hover {
        background: ${({ src }) => `url(${src}) no-repeat center center / 100%`};
    }
`;

export const Tag = styled.p`
    font-size: ${({ theme }) => theme.fontSize.s7}px;
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 800;
    padding: ${({ theme }) => `3px ${theme.padding.p1}px`};
    border-radius: ${({ theme }) => theme.borderRadius.small}px;
    border: 1px solid ${({ theme }) => theme.colors.background};
`;

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.gap.g1}px;
    margin-left: ${({ theme }) => theme.margin.m1}px;
`;

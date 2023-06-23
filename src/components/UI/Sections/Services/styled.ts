import styled from 'styled-components';

import { SectionTemplate, WrapperTemplate } from '@/components/UI/Templates';

export const Wrapper = styled(SectionTemplate)``;

export const Content = styled(WrapperTemplate)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) => `${theme.padding.p4}px 0px ${theme.padding.p12}px 0px`};
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        padding: 0;
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: ${({ theme }) => theme.gap.g4}px;
    column-gap: ${({ theme }) => theme.gap.g3}px;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        flex-direction: column;
    }
`;

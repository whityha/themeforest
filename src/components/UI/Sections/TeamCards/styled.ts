import styled from 'styled-components';

import { SectionTemplate, WrapperTemplate } from '../../Templates';

export const Wrapper = styled(SectionTemplate)`
    padding: ${({ theme: { padding } }) => `${padding.p12 * 2}px 0 ${padding.p12}px 0`};
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        padding: 0;
        padding-bottom: ${({ theme: { padding } }) => padding.p5}px;
    }
`;

export const Content = styled(WrapperTemplate)`
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.gap.g3}px;
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        flex-direction: column;
    }
`;

export const CardContainer = styled.div`
    &:nth-child(3n + 2) {
        transform: translateY(-120px);
    }
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.small}px) {
        &:nth-child(3n + 2) {
            transform: translateY(0);
        }
    }
`;

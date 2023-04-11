import styled from 'styled-components';

import { Title1 } from '@/theme/UI/Titles';

import { SectionTemplate } from '../../Templates';

export const Wrapper = styled(SectionTemplate)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) => `${theme.padding.p10}px 0 ${theme.padding.p12}px 0`};
`;

export const Title = styled(Title1)`
    color: ${({ theme }) => theme.colors.black};
`;

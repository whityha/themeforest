import styled from 'styled-components';

import { Parag1 } from '@/theme/UI/Paragraphs';
import { Title2 } from '@/theme/UI/Titles';

import { SectionTemplate, WrapperTemplate } from '../../Templates';

export const Wrapper = styled(SectionTemplate)`
    padding: ${({ theme }) => `${theme.padding.p12}px 0px`};
`;

export const Content = styled(WrapperTemplate)`
    display: flex;
    justify-content: space-between;
`;

export const Title = styled(Title2)`
    color: ${({ theme }) => theme.colors.black};
    padding-bottom: ${({ theme }) => theme.padding.p1}px;
    position: relative;
    &:after {
        content: '';
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 20%;
        height: 4px;
        background: ${({ theme }) => theme.colors.blue};
    }
`;

export const Subtext = styled(Parag1)`
    color: ${({ theme }) => theme.colors.grey};
`;

interface ContactItem {
    image: string;
}

export const ContactItem = styled.p<ContactItem>`
    color: ${({ theme }) => theme.colors.black};
    padding-left: ${({ theme }) => theme.padding.p4}px;
    background: ${({ image }) => `url(${image}) no-repeat left center`};
`;

import styled from 'styled-components';

import { Button } from '@/theme/UI/Button';
import { getWrapperWidth } from '@/theme/UI/Common';
import { Parag1 } from '@/theme/UI/Paragraphs';
import { Title1 } from '@/theme/UI/Titles';
import { SectionProps } from '@/types';

export const SectionWrapper = styled.section<SectionProps>`
    position: relative;
    background: ${({ theme, background }) => (background ? theme.colors.background : null)};
    display: flex;
    ${({ theme }) => getWrapperWidth(theme)};
    justify-content: space-between;
    margin: 0 auto;
    padding: ${({
        theme: {
            padding: { p7, p9 },
        },
    }) => `${p7}px 0 ${p9}px 0`};
`;

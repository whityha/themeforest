import React from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import { Backgrounds } from '@/types';

import { Title, Wrapper } from './styled';

interface SectionTitleMiddle {
    path?: string[];
    title: string;
}
const SectionTitleMiddle = ({ title, path }: SectionTitleMiddle) => {
    return (
        <Wrapper background={Backgrounds.Grey}>
            <Title>{title}</Title>
            {path ? (
                <Breadcrumbs paths={[...path, `${title}`]} />
            ) : (
                <Breadcrumbs paths={['Home', `${title}`]} />
            )}
        </Wrapper>
    );
};

export default SectionTitleMiddle;

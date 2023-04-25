import React from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import { Backgrounds } from '@/types';

import { Title, Wrapper } from './styled';

interface SectionTitleMiddle {
    title: string;
    path?: string[];
    screen?: 'desktop' | 'mobile';
}
const SectionTitleMiddle = ({ title, path, screen }: SectionTitleMiddle) => {
    return (
        <Wrapper screen={screen} background={Backgrounds.Grey}>
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

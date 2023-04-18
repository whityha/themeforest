import React from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import { Backgrounds } from '@/types';

import { Title, Wrapper } from './styled';

const SectionTitleMiddle = ({ title, path }: { path?: string[]; title: string }) => {
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

import React from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import { Backgrounds } from '@/types';

import { Title, Wrapper } from './styled';

const SectionTitleMiddle = ({ title }: { title: string }) => {
    return (
        <Wrapper background={Backgrounds.Grey}>
            <Title>{title}</Title>
            <Breadcrumbs paths={['Home', `${title}`]} />
        </Wrapper>
    );
};

export default SectionTitleMiddle;

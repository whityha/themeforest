import React from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';

import { Title, Wrapper } from './styled';

const SectionSolutionTitle = () => {
    return (
        <Wrapper background>
            <Title>Data visualization</Title>
            <Breadcrumbs paths={['Home', 'Data visualization']} />
        </Wrapper>
    );
};

export default SectionSolutionTitle;

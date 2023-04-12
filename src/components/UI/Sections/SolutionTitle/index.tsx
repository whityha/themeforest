import React from 'react';
import { useTranslation } from 'react-i18next';

import Breadcrumbs from '@/components/Breadcrumbs';
import { SOLUTIONS_PAGE_DATA } from '@/constants/Mocks/Solutions';

import { Title, Wrapper } from './styled';

const SectionSolutionTitle = ({ id }: { id: string }) => {
    const { title } = SOLUTIONS_PAGE_DATA[id as keyof typeof SOLUTIONS_PAGE_DATA];
    const { t } = useTranslation();
    return (
        <Wrapper background="background">
            <Title>{t(title)}</Title>
            <Breadcrumbs paths={['Home', `${t(title)}`]} />
        </Wrapper>
    );
};

export default SectionSolutionTitle;

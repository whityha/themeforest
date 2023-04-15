import React from 'react';
import { useTranslation } from 'react-i18next';

import SectionTitleMiddle from '@/components/UI/Templates/SectionTitleMiddle';
import { SOLUTIONS_PAGE_DATA } from '@/constants/Mocks/Solutions';

const SectionSolutionTitle = ({ id }: { id: string }) => {
    const { title } = SOLUTIONS_PAGE_DATA[id as keyof typeof SOLUTIONS_PAGE_DATA];
    const { t } = useTranslation();
    return <SectionTitleMiddle title={t(title)} />;
};

export default SectionSolutionTitle;

import React from 'react';
import { useTranslation } from 'react-i18next';

import SectionTitleMiddle from '@/components/UI/Templates/SectionTitleMiddle';
import { BLOG_NEWS } from '@/constants/Mocks/Blogs';

const SectionSingleBlogTitle = ({ id }: { id: string }) => {
    const { title } = BLOG_NEWS[Number(id)];
    const { t } = useTranslation();
    return <SectionTitleMiddle title={t(title)} />;
};

export default SectionSingleBlogTitle;

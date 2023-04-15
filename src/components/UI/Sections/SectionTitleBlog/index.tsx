import React from 'react';
import { useTranslation } from 'react-i18next';

import { Backgrounds } from '@/types';

import SectionTitleBetween from '../../Templates/SectionTitleBetween';

const SectionTitleBlog = () => {
    const { t } = useTranslation();
    return (
        <SectionTitleBetween
            background={Backgrounds.DarkBlue}
            title="Blog"
            subtext={t('Blog.subtext')}
        />
    );
};

export default SectionTitleBlog;

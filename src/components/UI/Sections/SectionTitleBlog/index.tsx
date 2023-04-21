import React from 'react';
import { useTranslation } from 'react-i18next';

import { Backgrounds } from '@/types';

import SectionTitleBetween from '../../Templates/SectionTitleBetween';

const SectionTitleBlog = () => {
    const { t: translation } = useTranslation();
    return (
        <SectionTitleBetween
            background={Backgrounds.DarkBlue}
            title="Blog"
            subtext={translation('Blog.subtext')}
        />
    );
};

export default SectionTitleBlog;

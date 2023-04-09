import React from 'react';
import { useTranslation } from 'react-i18next';

import Slider from '@/components/Slider';
import BlogCard from '@/components/UI/BlogCard';

import { BLOG_NEWS } from './config';
import { Wrapper } from './styled';

const SectionOurBlog = () => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <Slider
                title={t('OurBlog.title')}
                slides={BLOG_NEWS.map(({ link, title, date, subtext, imageLink }) => {
                    return (
                        <BlogCard
                            key={link}
                            options={{
                                title,
                                link,
                                date,
                                imageLink,
                                subtext,
                            }}
                        />
                    );
                })}
            />
        </Wrapper>
    );
};

export default SectionOurBlog;

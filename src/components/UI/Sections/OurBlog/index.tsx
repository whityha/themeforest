import React from 'react';
import { useTranslation } from 'react-i18next';

import Slider from '@/components/Slider';
import BlogCard from '@/components/UI/Cards/BlogCard';
import { BLOG_NEWS } from '@/constants/Mocks/Blogs';
import { Cards } from '@/types';

import { Wrapper } from './styled';

const SectionOurBlog = () => {
    const { t: translation } = useTranslation();
    return (
        <Wrapper>
            <Slider
                title={translation('OurBlog.title')}
                currentCard={Cards.Articles}
                slides={BLOG_NEWS.map(({ id, title, date, subtext, imageLink }) => {
                    return (
                        <BlogCard
                            key={id}
                            options={{
                                title,
                                id,
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

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Slider from '@/components/Slider';
import BlogCard from '@/components/UI/Cards/BlogCard';
import { BLOG_NEWS } from '@/constants/Mocks/Blogs';
import { PATHS } from '@/routes';
import { theme } from '@/theme';
import { Title6 } from '@/theme/UI/Titles';
import { Cards } from '@/types';

import PopularPostCard from '../../Cards/PopularPostCard';

import { ButtonLearn, CardsContainer, Content, Title, Wrapper } from './styled';

const SectionOurBlog = () => {
    const [isMobile] = useState(() => window.innerWidth <= theme.wrapperWidth.large);
    const { t: translation } = useTranslation();
    return (
        <Wrapper>
            {!isMobile && (
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
            )}
            <Content>
                <Title>{translation('OurBlog.title')}</Title>
                <CardsContainer>
                    {BLOG_NEWS.slice(0, 3).map(({ date, imageLink, title, id }) => {
                        return (
                            <PopularPostCard
                                date={date}
                                icon={imageLink}
                                id={id}
                                title={title}
                                key={id}
                            />
                        );
                    })}
                </CardsContainer>
                <Link to={PATHS.Blog}>
                    <ButtonLearn>
                        <Title6>{translation('Radically.button')}</Title6>
                    </ButtonLearn>
                </Link>
            </Content>
        </Wrapper>
    );
};

export default SectionOurBlog;

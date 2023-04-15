import React, { useState } from 'react';
import { Puff } from 'react-loader-spinner';

import { BLOG_NEWS } from '@/constants/Mocks/Blogs';
import { Title7 } from '@/theme/UI/Titles';

import BlogCard from '../../Cards/BlogCard';

import { ADD_CARDS, START_ARTICLES_COUNT } from './config';
import {
    ArticlesContainer,
    ButtonMore,
    ButtonMoreContainer,
    CardContainer,
    Content,
    Wrapper,
} from './styled';

const SectionBlogContent = () => {
    const [articlesCount, setArticlesCount] = useState(START_ARTICLES_COUNT);
    const [isLoading, setIsLoading] = useState(false);
    const handleMoreArticles = () => {
        setIsLoading(true);
        setTimeout(() => {
            setArticlesCount((prevState) => prevState + ADD_CARDS);
            setIsLoading(false);
        }, 2000);
    };
    return (
        <Wrapper>
            <Content>
                <ArticlesContainer>
                    {BLOG_NEWS.slice(0, articlesCount).map(
                        ({ link, date, title, subtext, imageLink }) => (
                            <CardContainer key={link}>
                                <BlogCard options={{ link, date, title, imageLink, subtext }} />
                            </CardContainer>
                        )
                    )}
                </ArticlesContainer>
                <ButtonMoreContainer
                    onClick={isLoading ? undefined : handleMoreArticles}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <Puff color="#ffffff" height="20px" />
                    ) : (
                        <ButtonMore disabled={isLoading}>
                            <Title7>More articles</Title7>
                        </ButtonMore>
                    )}
                </ButtonMoreContainer>
            </Content>
        </Wrapper>
    );
};

export default SectionBlogContent;

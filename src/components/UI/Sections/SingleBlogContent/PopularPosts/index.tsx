import React from 'react';

import PopularPostCard from '@/components/UI/Cards/PopularPostCard';
import { sortPostsByView } from '@/utils/sortPostsByView';

import { POPULAR_POSTS_COUNT } from '../config';
import { SameTagsPosts } from '../types';

import { PopularPostsContainer, Title } from './styled';

const PopularPosts = ({ posts }: { posts: SameTagsPosts }) => {
    const { data } = sortPostsByView(posts);
    return (
        <PopularPostsContainer>
            <Title>Popular posts</Title>
            {data.length ? (
                data.slice(0, POPULAR_POSTS_COUNT).map(({ date, id, imageLink, title }) => {
                    return (
                        <PopularPostCard
                            date={date}
                            title={title}
                            icon={imageLink}
                            key={id}
                            id={id}
                        />
                    );
                })
            ) : (
                <Title>Not found</Title>
            )}
        </PopularPostsContainer>
    );
};

export default PopularPosts;

import React, { useEffect, useState } from 'react';

import RelatedPostCard from '@/components/UI/Cards/RelatedPostCard';
import { Article } from '@/constants/Mocks/Blogs';
import { getPostsWithSameTags } from '@/utils/getPostsWithSameTags';

import { POPULAR_POSTS_COUNT } from '../config';

import { RelatedPostsContainer, Title } from './styled';

const RelatedPosts = ({ currentPost }: { currentPost: Article }) => {
    const [postsWithSameTags, setPostsWithSameTags] = useState<Article[]>([]);

    useEffect(() => {
        const { id } = currentPost;
        setPostsWithSameTags(getPostsWithSameTags(id).data);
    });

    return (
        <RelatedPostsContainer>
            <Title>Related posts</Title>
            {postsWithSameTags.length ? (
                postsWithSameTags
                    .slice(0, POPULAR_POSTS_COUNT)
                    .map(({ date, id, imageLink, title, subtext }) => {
                        return (
                            <RelatedPostCard
                                date={date}
                                title={title}
                                icon={imageLink}
                                key={id}
                                id={id}
                                subtext={subtext}
                            />
                        );
                    })
            ) : (
                <Title>Not found</Title>
            )}
        </RelatedPostsContainer>
    );
};

export default RelatedPosts;

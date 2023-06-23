import React, { useEffect, useState } from 'react';

import { TAGS } from '@/constants';
import { BLOG_NEWS } from '@/constants/Mocks/Blogs';

import { SameTagsPosts, SOURCES } from '../types';

import { List, Tag, Title, Wrapper } from './styled';

const Tags = ({ setPosts }: { setPosts: (items: SameTagsPosts) => void }) => {
    const [activeTags, setActiveTags] = useState<string[]>([]);
    const tags = Object.values(TAGS);

    const clearActiveTags = () => {
        setActiveTags([]);
    };

    const handleActiveTag = (tagName: string) => () => {
        setActiveTags((prevTags) => {
            if (prevTags.includes(tagName)) return prevTags.filter((tag) => tag !== tagName);
            return [...prevTags, tagName];
        });
    };

    useEffect(() => {
        if (activeTags.length !== 0) {
            const activeArticles = BLOG_NEWS.filter((article) => {
                return article.tags.some((tag) => activeTags.includes(tag));
            }).sort((a, b) => b.views - a.views);
            setPosts({ data: activeArticles, source: SOURCES.Tags });
        } else {
            setPosts({ data: [], source: undefined });
        }
    }, [activeTags]);

    return (
        <Wrapper>
            <Title>Tags</Title>
            <List>
                <Tag onClick={clearActiveTags} active={!activeTags.length}>
                    All topics
                </Tag>
                {tags.map((tag) => {
                    const isActive = activeTags.includes(tag);
                    return (
                        <Tag onClick={handleActiveTag(tag)} active={isActive} key={tag}>
                            {tag}
                        </Tag>
                    );
                })}
            </List>
        </Wrapper>
    );
};

export default Tags;

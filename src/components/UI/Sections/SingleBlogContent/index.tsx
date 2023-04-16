import React, { useLayoutEffect, useState } from 'react';

import Accordion from '@/components/Accordion';
import { BLOG_NEWS } from '@/constants/Mocks/Blogs';
import { getPostsWithSameTags } from '@/utils/getPostsWithSameTags';

import FlexBox from '../../FlexBox';

import { CATEGORIES } from './config';
import PopularPosts from './PopularPosts';
import PostBody from './PostBody';
import RelatedPosts from './RelatedPosts';
import Search from './Search';
import { Content, LeftColumn, Wrapper } from './styled';
import Tags from './Tags';
import { SameTagsPosts as SameTagsPostsType, SOURCES } from './types';

const SectionContentSingleBlog = ({ id }: { id: string }) => {
    const [currentPost, setCurrentPost] = useState(BLOG_NEWS[Number(id)]);
    const [sameTagsPosts, setSameTagsPosts] = useState<SameTagsPostsType>({
        data: [],
    });

    const setSameTagsPostsByPage = (id: number) => {
        setSameTagsPosts(getPostsWithSameTags(id));
    };

    useLayoutEffect(() => {
        setCurrentPost(BLOG_NEWS[Number(id)]);
        if (sameTagsPosts.source === undefined || sameTagsPosts.source === SOURCES.Page)
            setSameTagsPostsByPage(Number(id));
    }, [id, sameTagsPosts.source]);
    return (
        <Wrapper>
            <Content>
                <LeftColumn>
                    <PostBody post={currentPost} />
                    <RelatedPosts currentPost={currentPost} />
                </LeftColumn>
                <FlexBox w={40} direction="column" rg={60}>
                    <Search setPosts={setSameTagsPosts} />
                    <PopularPosts posts={sameTagsPosts} />
                    <Accordion title="Categories" data={CATEGORIES} />
                    <Tags setPosts={setSameTagsPosts} />
                </FlexBox>
            </Content>
        </Wrapper>
    );
};

export default SectionContentSingleBlog;

import React from 'react';

import FlexBox from '@/components/UI/FlexBox';
import { Article } from '@/constants/Mocks/Blogs';

import { ICONS, SOCIALS } from './config';
import { Image, InfoBox, SocialLink, Subtext, Tag, TagsContainer, Title, Wrapper } from './styled';

const PostBody = ({
    post: { imageLink, date, author, title, subtext, views, tags },
}: {
    post: Article;
}) => {
    return (
        <Wrapper>
            <Image src={imageLink} />
            <FlexBox cg={30}>
                <InfoBox src={ICONS.date}>{date}</InfoBox>
                <InfoBox src={ICONS.user}>{author}</InfoBox>
            </FlexBox>
            <Title>{title}</Title>
            <Subtext>{subtext}</Subtext>
            <FlexBox cg={30} alignItems="start">
                <FlexBox minw={20}>
                    <InfoBox src={ICONS.views}>{views} Views</InfoBox>
                </FlexBox>
                <FlexBox minw={30}>
                    <InfoBox src={ICONS.share}>
                        Share:
                        <FlexBox>
                            {SOCIALS.map((item) => {
                                return <SocialLink key={item} src={item} href="#" />;
                            })}
                        </FlexBox>
                    </InfoBox>
                </FlexBox>
                <FlexBox alignItems="start">
                    <InfoBox src={ICONS.tags}>Tags:</InfoBox>
                    <TagsContainer>
                        {tags.map((item) => {
                            return <Tag key={item}>{item}</Tag>;
                        })}
                    </TagsContainer>
                </FlexBox>
            </FlexBox>
        </Wrapper>
    );
};

export default PostBody;

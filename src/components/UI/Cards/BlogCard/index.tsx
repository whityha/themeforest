import React from 'react';
import { Link } from 'react-router-dom';

import { TAGS } from '@/constants';

import {
    Button,
    Content,
    Date,
    Image,
    MobileWrapper,
    Subtext,
    Tag,
    Tags,
    Title,
    Wrapper,
} from './styled';

interface BlogCard {
    options: {
        imageLink: string;
        date: string;
        subtext: string;
        title: string;
        id: number;
        tags?: TAGS[];
    };
}

const BlogCard = ({ options }: BlogCard) => {
    const { date, subtext, title, id, imageLink, tags } = options;
    return (
        <>
            <Wrapper>
                <Image src={imageLink} />
                <Content>
                    <Date>{date}</Date>
                    <Title>{title}</Title>
                    <Subtext>{subtext}</Subtext>
                    <Link to={`/blog/${id}`}>
                        <Button>Read more</Button>
                    </Link>
                </Content>
            </Wrapper>
            <MobileWrapper>
                <Link to={`/blog/${id}`}>
                    <Image src={imageLink} />
                    <Content>
                        <Date>{date}</Date>
                        <Title>{title}</Title>
                        {tags && (
                            <Tags>
                                {tags.map((tag) => {
                                    return <Tag key={tag}>{tag}</Tag>;
                                })}
                            </Tags>
                        )}
                    </Content>
                </Link>
            </MobileWrapper>
        </>
    );
};

export default BlogCard;

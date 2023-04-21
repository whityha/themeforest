import React from 'react';
import { Link } from 'react-router-dom';

import FlexBox from '../../FlexBox';

import { Button, Date, Image, Subtext, Title } from './styled';

interface BlogCard {
    options: {
        imageLink: string;
        date: string;
        subtext: string;
        title: string;
        id: number;
    };
}

const BlogCard = ({ options }: BlogCard) => {
    const { date, subtext, title, id, imageLink } = options;
    return (
        <FlexBox direction="column">
            <Image src={imageLink} />
            <Date>{date}</Date>
            <Title>{title}</Title>
            <Subtext>{subtext}</Subtext>
            <Link to={`/blog/${id}`}>
                <Button>Read more</Button>
            </Link>
        </FlexBox>
    );
};

export default BlogCard;

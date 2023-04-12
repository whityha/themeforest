import React from 'react';

import FlexBox from '../../FlexBox';

import { Button, Date, Image, Subtext, Title } from './styled';

const BlogCard = ({
    options,
}: {
    options: {
        imageLink: string;
        date: string;
        subtext: string;
        title: string;
        link: string;
    };
}) => {
    const { date, subtext, title, link, imageLink } = options;
    return (
        <FlexBox direction="column">
            <Image src={imageLink} />
            <Date>{date}</Date>
            <Title>{title}</Title>
            <Subtext>{subtext}</Subtext>
            <Button>Read more</Button>
        </FlexBox>
    );
};

export default BlogCard;

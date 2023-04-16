import React from 'react';
import { Link } from 'react-router-dom';

import { cutString } from '@/utils/cutString';

import FlexBox from '../../FlexBox';

import { SUBTEXT_LIMIT } from './config';
import { Date, Image, Subtext, Title, Wrapper } from './styled';

const RelatedPostCard = ({
    id,
    title,
    date,
    icon,
    subtext,
}: {
    id: number;
    title: string;
    date: string;
    icon: string;
    subtext: string;
}) => {
    return (
        <Link to={`/blog/${id}`}>
            <Wrapper>
                <Image src={icon} />
                <FlexBox direction="column" justifyContent="space-between">
                    <Date>{date}</Date>
                    <Title>{title}</Title>
                    <Subtext>{cutString(subtext, SUBTEXT_LIMIT)}</Subtext>
                </FlexBox>
            </Wrapper>
        </Link>
    );
};

export default RelatedPostCard;

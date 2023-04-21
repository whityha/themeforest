import React from 'react';
import { Link } from 'react-router-dom';

import { ButtonReadMore } from '../../Buttons/ButtonsReadMore';
import FlexBox from '../../FlexBox';

import { Date, Image, Title, Wrapper } from './styled';

interface PopularPostCard {
    id: number;
    title: string;
    date: string;
    icon: string;
}

const PopularPostCard = ({ id, title, date, icon }: PopularPostCard) => {
    return (
        <Wrapper>
            <Image src={icon} />
            <FlexBox direction="column" justifyContent="space-between">
                <Date>{date}</Date>
                <Title>{title}</Title>
                <ButtonReadMore>
                    <Link to={`/blog/${id}`}>Read more</Link>
                </ButtonReadMore>
            </FlexBox>
        </Wrapper>
    );
};

export default PopularPostCard;

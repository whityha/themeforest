import React from 'react';

import FlexBox from '../FlexBox';

import { Icon, Name, Subtext, WhoIs, Wrapper } from './styled';

const TestimonialsCard = ({
    options,
}: {
    options: {
        icon: string;
        name: string;
        testimonial: string;
        whoIs: string;
    };
}) => {
    const { icon, whoIs, name, testimonial } = options;
    return (
        <Wrapper>
            <FlexBox>
                <Icon src={icon} />
                <FlexBox direction="column" alignSelf="center">
                    <Name>{name}</Name>
                    <WhoIs>{whoIs}</WhoIs>
                </FlexBox>
            </FlexBox>
            <Subtext>{testimonial}</Subtext>
        </Wrapper>
    );
};

export default TestimonialsCard;

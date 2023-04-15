import React from 'react';

import FlexBox from '../../FlexBox';

import { Icon, Name, Subtext, WhoIs, Wrapper } from './styled';

const CustomerCard = ({
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
            <Icon src={icon} />
            <Subtext>{testimonial}</Subtext>
            <FlexBox direction="column" alignSelf="center">
                <Name>{name}</Name>
                <WhoIs>{whoIs}</WhoIs>
            </FlexBox>
        </Wrapper>
    );
};

export default CustomerCard;

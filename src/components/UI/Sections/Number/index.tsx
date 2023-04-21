import React from 'react';
import { useTranslation } from 'react-i18next';

import FlexBox from '../../FlexBox';

import { Number, Subtitle, Wrapper } from './styled';

const NumberBlock = ({
    children,
    number,
    center,
    border = false,
}: {
    center?: boolean;
    border?: boolean;
    children: string;
    number: string;
}) => {
    const { t: translation } = useTranslation();
    return (
        <Wrapper border={border}>
            <FlexBox direction="column" alignItems={center ? 'center' : 'auto'}>
                <Number>{number}</Number>
                <Subtitle>{translation(children)}</Subtitle>
            </FlexBox>
        </Wrapper>
    );
};

export default NumberBlock;

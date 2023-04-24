import React from 'react';
import { useTranslation } from 'react-i18next';

import FlexBox from '../../FlexBox';

import { Number, Subtitle, Wrapper } from './styled';

interface NumberBlock {
    center?: boolean;
    border?: boolean;
    children: string;
    number: string;
}

const NumberBlock = ({ children, number, center, border = false }: NumberBlock) => {
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

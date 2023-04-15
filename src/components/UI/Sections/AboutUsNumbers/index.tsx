import React from 'react';

import { STATS_NUMBERS } from '@/constants';
import { Backgrounds } from '@/types';

import FlexBox from '../../FlexBox';
import NumberBlock from '../Number';

import { Content, Title, Wrapper } from './styled';

const SectionAboutUsNumbers = () => {
    return (
        <Wrapper background={Backgrounds.Grey}>
            <Content>
                <FlexBox cg={30} direction="column" alignItems="center">
                    <Title>Ensome in numbers</Title>
                    <FlexBox justifyContent="space-around" w={100}>
                        {STATS_NUMBERS.map(({ id, number, title }) => (
                            <NumberBlock border center key={id} number={number}>
                                {title}
                            </NumberBlock>
                        ))}
                    </FlexBox>
                </FlexBox>
            </Content>
        </Wrapper>
    );
};

export default SectionAboutUsNumbers;

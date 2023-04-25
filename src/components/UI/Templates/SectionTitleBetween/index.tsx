import React from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import { Backgrounds } from '@/types';

import FlexBox from '../../FlexBox';

import { Content, Subtext, Title, Wrapper } from './styled';

interface SectionTitleBetween {
    background: Backgrounds;
    title: string;
    subtext: string;
    screen?: 'desktop' | 'mobile';
}

const SectionTitleBetween = ({ screen, background, title, subtext }: SectionTitleBetween) => {
    return (
        <Wrapper screen={screen} background={background}>
            <Content>
                <Breadcrumbs background={background} paths={['Home', title]} />
                <FlexBox justifyContent="space-between" alignItems="center">
                    <Title>{title}</Title>
                    <Subtext>{subtext}</Subtext>
                </FlexBox>
            </Content>
        </Wrapper>
    );
};

export default SectionTitleBetween;

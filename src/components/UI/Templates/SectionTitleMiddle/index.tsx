import React from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import { Backgrounds, SCREEN } from '@/types';

import { Content, Title, Wrapper } from './styled';

interface SectionTitleMiddle {
    title: string;
    path?: string[];
    screenOnly?: SCREEN;
}
const SectionTitleMiddle = ({ title, path, screenOnly }: SectionTitleMiddle) => {
    return (
        <Wrapper screenOnly={screenOnly} background={Backgrounds.Grey}>
            <Content>
                <Title>{title}</Title>
                {path ? (
                    <Breadcrumbs paths={[...path, `${title}`]} />
                ) : (
                    <Breadcrumbs paths={['Home', `${title}`]} />
                )}
            </Content>
        </Wrapper>
    );
};

export default SectionTitleMiddle;

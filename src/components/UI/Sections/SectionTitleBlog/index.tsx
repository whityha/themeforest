import React from 'react';
import { useTranslation } from 'react-i18next';

import Breadcrumbs from '@/components/Breadcrumbs';
import SectionTitleBetween from '@/components/UI/Templates/SectionTitleBetween';
import { Backgrounds } from '@/types';

import FlexBox from '../../FlexBox';

import { Content, Subtext, Subtitle, Title, Wrapper } from './styled';

const SectionTitleBlog = () => {
    const { t: translation } = useTranslation();
    return (
        <>
            <SectionTitleBetween
                background={Backgrounds.DarkBlue}
                title="Blog"
                subtext={translation('Blog.subtext')}
                screen="desktop"
            />
            <Wrapper>
                <Content>
                    <FlexBox alignSelf="start">
                        <Breadcrumbs paths={['Home', 'Blog']} />
                    </FlexBox>
                    <Subtitle>{translation('Blog.subtitle')}</Subtitle>
                    <Title>{translation('Blog.title')}</Title>
                    <Subtext>{translation('Blog.subtext')}</Subtext>
                </Content>
            </Wrapper>
        </>
    );
};

export default SectionTitleBlog;

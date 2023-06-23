import React from 'react';
import { useTranslation } from 'react-i18next';

import Breadcrumbs from '../Breadcrumbs';
import FlexBox from '../UI/FlexBox';

import { Content, Subtext, Subtitle, Title, Wrapper } from './styled';

const MobilePageTitle = ({ pageName }: { pageName: string }) => {
    const { t: translation } = useTranslation();
    return (
        <Wrapper>
            <Content>
                <FlexBox alignSelf="start">
                    <Breadcrumbs paths={['Home', `${pageName}`]} />
                </FlexBox>
                <Subtitle>{translation(`${pageName}.subtitle`)}</Subtitle>
                <Title>{translation(`${pageName}.title`)}</Title>
                <Subtext>{translation(`${pageName}.subtext`)}</Subtext>
            </Content>
        </Wrapper>
    );
};

export default MobilePageTitle;

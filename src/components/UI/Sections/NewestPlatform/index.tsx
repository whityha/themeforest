import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { PATHS } from '@/routes';
import { Title6 } from '@/theme/UI/Titles';
import { makeSubstringBlue } from '@/utils/makeSubstringBlue';

import { ButtonDiscover, Content, SubtextContainer, SubTitle, Title, Wrapper } from './styled';

const SectionNewestPlatform = () => {
    const { t: translation } = useTranslation();
    return (
        <Wrapper>
            <Content>
                <Title>{makeSubstringBlue(translation('NewestPlatform.title'), 'newest')}</Title>
                <SubtextContainer>
                    <SubTitle>{translation('NewestPlatform.subtext')}</SubTitle>
                    <Link to={PATHS.Solutions}>
                        <ButtonDiscover>
                            <Title6>{translation('NewestPlatform.button')}</Title6>
                        </ButtonDiscover>
                    </Link>
                </SubtextContainer>
            </Content>
        </Wrapper>
    );
};

export default SectionNewestPlatform;

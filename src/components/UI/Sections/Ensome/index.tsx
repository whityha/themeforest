import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { PATHS } from '@/routes';
import { BlueText } from '@/theme/UI/BlueText';
import { Title7 } from '@/theme/UI/Titles';

import { ButtonMore, Content, Image, SubtextContainer, SubTitle, Title, Wrapper } from './styled';

const SectionEnsome = () => {
    const { t: translation } = useTranslation();
    return (
        <Wrapper>
            <Content>
                <Title>
                    {translation('Ensome.title')} <BlueText>Ensome</BlueText>
                </Title>
                <SubtextContainer>
                    <SubTitle>{translation('Ensome.subtext')}</SubTitle>
                </SubtextContainer>
                <Link to={PATHS.Services}>
                    <ButtonMore>
                        <Title7>{translation('Ensome.button')}</Title7>
                    </ButtonMore>
                </Link>
            </Content>
            <Image desktop src="/assets/images/home_large.webp" alt="teamImage" />
            <Image mobile src="/assets/images/home_mobile.png" alt="teamImage" />
        </Wrapper>
    );
};

export default SectionEnsome;

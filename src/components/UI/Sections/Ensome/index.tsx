import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import FlexBox from '@/components/UI/FlexBox';
import { PATHS } from '@/routes';
import { BlueText } from '@/theme/UI/BlueText';
import { Title7 } from '@/theme/UI/Titles';

import { ButtonMore, Content, Image, SubTitle, Title, Wrapper } from './styled';

const SectionEnsome = () => {
    const { t: translation } = useTranslation();
    return (
        <Wrapper>
            <Content>
                <Title>
                    {translation('Ensome.title')} <BlueText>Ensome</BlueText>
                </Title>
                <FlexBox d="flex" w={33}>
                    <SubTitle>{translation('Ensome.subtext')}</SubTitle>
                </FlexBox>
                <Link to={PATHS.Services}>
                    <ButtonMore>
                        <Title7>{translation('Ensome.button')}</Title7>
                    </ButtonMore>
                </Link>
            </Content>
            <Image src="/assets/images/home_large.webp" alt="teamImage" />
        </Wrapper>
    );
};

export default SectionEnsome;

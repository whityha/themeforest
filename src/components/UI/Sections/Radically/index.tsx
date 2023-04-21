import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { PATHS } from '@/routes';
import { Title6 } from '@/theme/UI/Titles';
import { Backgrounds } from '@/types';

import { ButtonLearn, Content, Image, ImageContainer, SubTitle, Title, Wrapper } from './styled';

const SectionRadically = () => {
    const { t: translation } = useTranslation();
    return (
        <Wrapper background={Backgrounds.Grey}>
            <ImageContainer>
                <Image src="/assets/images/radically_image.webp" alt="teamImage" />
            </ImageContainer>
            <Content>
                <Title>{translation('Radically.title')}</Title>
                <SubTitle>{translation('Radically.subtext')}</SubTitle>
                <Link to={PATHS.Solutions}>
                    <ButtonLearn>
                        <Title6>{translation('Radically.button')}</Title6>
                    </ButtonLearn>
                </Link>
            </Content>
        </Wrapper>
    );
};

export default SectionRadically;

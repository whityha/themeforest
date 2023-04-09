import React from 'react';
import { useTranslation } from 'react-i18next';

import FlexBox from '@/components/UI/FlexBox';
import { BlueText } from '@/theme/UI/BlueText';
import { Title7 } from '@/theme/UI/Titles';

import { ButtonMore, Content, Image, SubTitle, Title, Wrapper } from './styled';

const SectionEnsome = () => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <Content>
                <Title>
                    {t('Ensome.title')} <BlueText>Ensome</BlueText>
                </Title>
                <FlexBox d="flex" w={33}>
                    <SubTitle>{t('Ensome.subtext')}</SubTitle>
                </FlexBox>
                <ButtonMore>
                    <Title7>{t('Ensome.button')}</Title7>
                </ButtonMore>
            </Content>
            <Image src="../../assets/images/home_large.webp" alt="teamImage" />
        </Wrapper>
    );
};

export default SectionEnsome;

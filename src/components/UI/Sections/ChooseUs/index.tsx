import React from 'react';
import { useTranslation } from 'react-i18next';

import { Title6 } from '@/theme/UI/Titles';
import { Backgrounds } from '@/types';

import { ADVANTAGES } from './config';
import {
    AdvantageItem,
    AdvantageList,
    AdvTitle,
    Content,
    Image,
    ImageContainer,
    Subtext,
    Title,
    Wrapper,
} from './styled';

const SectionChooseUs = () => {
    const { t } = useTranslation();
    return (
        <Wrapper background={Backgrounds.Grey}>
            <ImageContainer>
                <Image src="../../../../assets/images/choose_us_image.webp" alt="teamImage" />
            </ImageContainer>
            <Content>
                <Title>{t('ChooseUs.title')}</Title>
                <AdvantageList>
                    {ADVANTAGES.map(({ id, title, subtext }) => {
                        return (
                            <AdvantageItem key={id}>
                                <AdvTitle>{t(title)}</AdvTitle>
                                <Subtext>{t(subtext)}</Subtext>
                            </AdvantageItem>
                        );
                    })}
                </AdvantageList>
            </Content>
        </Wrapper>
    );
};

export default SectionChooseUs;

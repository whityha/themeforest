import React from 'react';
import { useTranslation } from 'react-i18next';

import { Title6 } from '@/theme/UI/Titles';

import { ContactButton, Content, Subtext, Title, Wrapper } from './styled';

const SectionNeedHelp = () => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <Content>
                <Title>{t('DoYouNeedHelp.title')}</Title>
                <Subtext>{t('DoYouNeedHelp.subtext')}</Subtext>
                <ContactButton type="button">
                    <Title6> {t('DoYouNeedHelp.button')}</Title6>
                </ContactButton>
            </Content>
        </Wrapper>
    );
};

export default SectionNeedHelp;

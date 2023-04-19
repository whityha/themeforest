import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { PATHS } from '@/routes';
import { Title6 } from '@/theme/UI/Titles';
import { Backgrounds } from '@/types';

import { ContactButton, Content, Subtext, Title, Wrapper } from './styled';

const SectionNeedHelp = () => {
    const { t } = useTranslation();
    return (
        <Wrapper background={Backgrounds.Grey}>
            <Content>
                <Title>{t('DoYouNeedHelp.title')}</Title>
                <Subtext>{t('DoYouNeedHelp.subtext')}</Subtext>
                <Link to={PATHS.Contacts}>
                    <ContactButton type="button">
                        <Title6> {t('DoYouNeedHelp.button')}</Title6>
                    </ContactButton>
                </Link>
            </Content>
        </Wrapper>
    );
};

export default SectionNeedHelp;

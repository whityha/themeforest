import React from 'react';
import { useTranslation } from 'react-i18next';

import EmailSender from '@/components/EmailSenderInput';

import FlexBox from '../../FlexBox';

import { Content, DescriptionContainer, Subtext, Title, Wrapper } from './styled';

const SectionSubscribe = () => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <Content>
                <DescriptionContainer>
                    <Title>{t('Subscribe.title')}</Title>
                    <Subtext>{t('Subscribe.subtext')}</Subtext>
                </DescriptionContainer>
                <FlexBox w={50} alignItems="center" justifyContent="center">
                    <EmailSender />
                </FlexBox>
            </Content>
        </Wrapper>
    );
};

export default SectionSubscribe;

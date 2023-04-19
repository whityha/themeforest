import React from 'react';
import { useTranslation } from 'react-i18next';

import SubscribeInput from '@/components/SubscribeInput';
import { Backgrounds } from '@/types';

import FlexBox from '../../FlexBox';

import { Content, DescriptionContainer, Subtext, Title, Wrapper } from './styled';

const SectionSubscribe = ({ background }: { background?: Backgrounds }) => {
    const { t } = useTranslation();
    return (
        <Wrapper background={background}>
            <Content>
                <DescriptionContainer>
                    <Title>{t('Subscribe.title')}</Title>
                    <Subtext>{t('Subscribe.subtext')}</Subtext>
                </DescriptionContainer>
                <FlexBox w={50} alignItems="center" justifyContent="flex-end">
                    <SubscribeInput />
                </FlexBox>
            </Content>
        </Wrapper>
    );
};

export default SectionSubscribe;

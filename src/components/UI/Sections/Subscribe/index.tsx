import React from 'react';
import { useTranslation } from 'react-i18next';

import SubscribeInput from '@/components/SubscribeInput';
import { Backgrounds, SCREEN } from '@/types';

import { Content, DescriptionContainer, InputContainer, Subtext, Title, Wrapper } from './styled';

interface SectionSubscribe {
    screenOnly?: SCREEN;
    background?: Backgrounds;
}

const SectionSubscribe = ({ background, screenOnly }: SectionSubscribe) => {
    const { t: translation } = useTranslation();
    return (
        <Wrapper screenOnly={screenOnly} background={background}>
            <Content>
                <DescriptionContainer>
                    <Title>{translation('Subscribe.title')}</Title>
                    <Subtext>{translation('Subscribe.subtext')}</Subtext>
                </DescriptionContainer>
                <InputContainer>
                    <SubscribeInput />
                </InputContainer>
            </Content>
        </Wrapper>
    );
};

export default SectionSubscribe;

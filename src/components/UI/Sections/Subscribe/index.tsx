import React from 'react';
import { useTranslation } from 'react-i18next';

import SubscribeInput from '@/components/SubscribeInput';
import { Backgrounds } from '@/types';

import { Content, DescriptionContainer, InputContainer, Subtext, Title, Wrapper } from './styled';

interface SectionSubscribe {
    screen?: 'mobile' | 'desktop';
    background?: Backgrounds;
}

const SectionSubscribe = ({ background, screen }: SectionSubscribe) => {
    const { t: translation } = useTranslation();
    return (
        <Wrapper screen={screen} background={background}>
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

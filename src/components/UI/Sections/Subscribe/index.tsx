import React from 'react';
import { useTranslation } from 'react-i18next';

import SubscribeInput from '@/components/SubscribeInput';
import { Backgrounds } from '@/types';

import { Content, DescriptionContainer, InputContainer, Subtext, Title, Wrapper } from './styled';

const SectionSubscribe = ({ background }: { background?: Backgrounds }) => {
    const { t: translation } = useTranslation();
    return (
        <Wrapper background={background}>
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

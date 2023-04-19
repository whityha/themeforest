import React from 'react';
import { useTranslation } from 'react-i18next';

import FlexBox from '@/components/UI/FlexBox';

import { SubTitle, Title, Wrapper } from './styled';

const ErrorContent = () => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <Title>404 ERROR</Title>
            <FlexBox d="flex" direction="column" w={50}>
                <SubTitle>PAGE NOT FOUND</SubTitle>
            </FlexBox>
        </Wrapper>
    );
};

export default ErrorContent;

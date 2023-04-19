import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import FlexBox from '@/components/UI/FlexBox';
import { PATHS } from '@/routes';
import { Title6 } from '@/theme/UI/Titles';
import { makeSubstringBlue } from '@/utils/makeSubstringBlue';

import { ButtonDiscover, SubTitle, Title, Wrapper } from './styled';

const SectionNewestPlatform = () => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <Title>{makeSubstringBlue(t('NewestPlatform.title'), 'newest')}</Title>
            <FlexBox d="flex" direction="column" w={50}>
                <SubTitle>{t('NewestPlatform.subtext')}</SubTitle>
                <Link to={PATHS.Solutions}>
                    <ButtonDiscover>
                        <Title6>{t('NewestPlatform.button')}</Title6>
                    </ButtonDiscover>
                </Link>
            </FlexBox>
        </Wrapper>
    );
};

export default SectionNewestPlatform;

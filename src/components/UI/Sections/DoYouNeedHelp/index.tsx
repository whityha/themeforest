import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { PATHS } from '@/routes';
import { Title6 } from '@/theme/UI/Titles';
import { Backgrounds, SCREEN } from '@/types';

import { ContactButton, Content, Subtext, Title, Wrapper } from './styled';

const SectionNeedHelp = ({ screenOnly }: { screenOnly?: SCREEN }) => {
    const { t: translation } = useTranslation();
    return (
        <Wrapper screenOnly={screenOnly} background={Backgrounds.Grey}>
            <Content>
                <Title>{translation('DoYouNeedHelp.title')}</Title>
                <Subtext>{translation('DoYouNeedHelp.subtext')}</Subtext>
                <Link to={PATHS.Contacts}>
                    <ContactButton type="button">
                        <Title6> {translation('DoYouNeedHelp.button')}</Title6>
                    </ContactButton>
                </Link>
            </Content>
        </Wrapper>
    );
};

export default SectionNeedHelp;

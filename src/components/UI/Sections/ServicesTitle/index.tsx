import React from 'react';
import { useTranslation } from 'react-i18next';

import Breadcrumbs from '@/components/Breadcrumbs';
import { SERVICES_PAGE_DATA } from '@/constants/Mocks/Services';
import { Backgrounds } from '@/types';

import FlexBox from '../../FlexBox';

import { Content, Subtext, Title, Wrapper } from './styled';

const SectionServicesTitle = ({ background, id }: { id: string; background: Backgrounds }) => {
    const { title, subtext } = SERVICES_PAGE_DATA[id];
    const { t } = useTranslation();
    return (
        <Wrapper background={background}>
            <Content>
                <Breadcrumbs background={background} paths={['Home', t(title)]} />
                <FlexBox justifyContent="space-between" alignItems="center">
                    <Title>{t(title)}</Title>
                    <Subtext>{t(subtext)}</Subtext>
                </FlexBox>
            </Content>
        </Wrapper>
    );
};

export default SectionServicesTitle;

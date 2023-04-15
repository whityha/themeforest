import React from 'react';
import { useTranslation } from 'react-i18next';

import Slider from '@/components/Slider';
import FlexBox from '@/components/UI/FlexBox';
import { Cards } from '@/types';

import CustomerCard from '../../Cards/CustomerCard';

import { CUSTOMERS, PARTNERS } from './config';
import { Content, ContentBox, ImageBlock, SubTitle, Title, Wrapper } from './styled';

const SectionOurCustomers = () => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <Title>{t('OurCustomers.title')}</Title>
            <Content>
                <ContentBox>
                    <SubTitle>{t('OurCustomers.subtext')}</SubTitle>
                </ContentBox>
            </Content>
            <FlexBox>
                {PARTNERS.map((src) => (
                    <ImageBlock src={src} key={src} alt="partnerLogo" />
                ))}
            </FlexBox>
            <Slider
                title={t('OurCustomers.whatSay')}
                visibleSlidersCount={2}
                currentCard={Cards.Customers}
                slides={CUSTOMERS.map(({ id, name, icon, whoIs, testimonial }) => {
                    return (
                        <CustomerCard
                            key={id}
                            options={{
                                name,
                                icon,
                                whoIs,
                                testimonial,
                            }}
                        />
                    );
                })}
            />
        </Wrapper>
    );
};

export default SectionOurCustomers;

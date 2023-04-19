import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Logo from '@/components/Logo';
import { PATHS } from '@/routes';

import { Address, Email, Phone } from '../Contacts';

import { SOCIAL_ICONS } from './config';
import {
    Content,
    Icon,
    IconsList,
    InfoBox,
    LinkItem,
    LinksList,
    Policy,
    Privacy,
    Rights,
    SocialsBlock,
    Subtext,
    Terms,
    Title,
    Wrapper,
} from './styled';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <Content>
                <SocialsBlock>
                    <Logo color="white" />
                    <Subtext>{t('footer.subtext')}</Subtext>
                    <IconsList>
                        {SOCIAL_ICONS.map((name) => (
                            <Icon key={name} src={`/assets/icons/socials/${name}.svg`} />
                        ))}
                    </IconsList>
                </SocialsBlock>
                <InfoBox>
                    <Title>{t('footer.quick')}</Title>
                    <LinksList>
                        <LinkItem>
                            <Link to={PATHS.Home}>Home</Link>
                        </LinkItem>
                        <LinkItem>
                            <Link to={PATHS.Solutions}>Solutions</Link>
                        </LinkItem>
                        <LinkItem>
                            <Link to={PATHS.Blog}>Blog</Link>
                        </LinkItem>
                        <LinkItem>
                            <Link to={PATHS.Contacts}>Contacts</Link>
                        </LinkItem>
                        <LinkItem>
                            <Link to={PATHS.Team}>Our team</Link>
                        </LinkItem>
                        <LinkItem>
                            <Link to={PATHS.AboutUs}>About Us</Link>
                        </LinkItem>
                        <LinkItem>
                            <Link to={PATHS.Services}>Services</Link>
                        </LinkItem>
                        <LinkItem>
                            <Link to={PATHS.Faq}>FAQ</Link>
                        </LinkItem>
                    </LinksList>
                </InfoBox>
                <InfoBox>
                    <Title>{t('footer.service')}</Title>
                    <LinksList>
                        <LinkItem>Pages</LinkItem>
                        <LinkItem>Elements</LinkItem>
                        <LinkItem>
                            <Link to={PATHS.Faq}>FAQ</Link>
                        </LinkItem>
                        <LinkItem>Pricing</LinkItem>
                        <LinkItem>Site map</LinkItem>
                    </LinksList>
                </InfoBox>
                <InfoBox>
                    <Title>{t('footer.contact')}</Title>
                    <LinksList>
                        <LinkItem>
                            <Email />
                        </LinkItem>
                        <LinkItem>
                            <Phone />
                        </LinkItem>
                        <LinkItem>
                            <Address />
                        </LinkItem>
                    </LinksList>
                </InfoBox>
            </Content>
            <Policy>
                <Rights>{t('footer.policy.rights')}</Rights>
                <Privacy>{t('footer.policy.privacy')}</Privacy>
                <Terms>{t('footer.policy.terms')}</Terms>
            </Policy>
        </Wrapper>
    );
};

export default Footer;

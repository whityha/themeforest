import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Logo from '@/components/Logo';

import { Address, Email, Phone } from '../Contacts';
import LanguageSelect from '../LanguageSelect';

import { QUICK_LINKS, SERVICES_LINKS, SOCIAL_ICONS } from './config';
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
    const { t: translation } = useTranslation();
    return (
        <Wrapper>
            <Content>
                <SocialsBlock>
                    <Logo color="white" />
                    <Subtext>{translation('footer.subtext')}</Subtext>
                    <IconsList>
                        {SOCIAL_ICONS.map((name) => (
                            <Icon key={name} src={`/assets/icons/socials/${name}.svg`} />
                        ))}
                    </IconsList>
                </SocialsBlock>
                <InfoBox>
                    <Title>{translation('footer.quick.title')}</Title>
                    <LinksList>
                        {QUICK_LINKS.map(({ path, name }) => {
                            return (
                                <LinkItem key={name}>
                                    <Link to={path}>{translation(name)}</Link>
                                </LinkItem>
                            );
                        })}
                    </LinksList>
                </InfoBox>
                <InfoBox>
                    <Title>{translation('footer.services.title')}</Title>
                    <LinksList>
                        {SERVICES_LINKS.map(({ name, path }) => {
                            return (
                                <LinkItem key={name}>
                                    <Link to={path}>{translation(name)}</Link>
                                </LinkItem>
                            );
                        })}
                    </LinksList>
                </InfoBox>
                <InfoBox>
                    <Title>{translation('footer.contact')}</Title>
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
                <Rights>{translation('footer.policy.rights')}</Rights>
                <LanguageSelect />
                <Privacy>{translation('footer.policy.privacy')}</Privacy>
                <Terms>{translation('footer.policy.terms')}</Terms>
            </Policy>
        </Wrapper>
    );
};

export default Footer;

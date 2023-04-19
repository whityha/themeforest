import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import Accordion from '@/components/Accordion';
import SearchServices from '@/components/SearchServices';
import { SERVICES_CARDS_DATA, SERVICES_PAGE_DATA } from '@/constants/Mocks/Services';

import FlexBox from '../../FlexBox';

import { Content, Image, List, ListItem, Subtext, Title, Wrapper } from './styled';

const SectionServicesContent = ({ routeID }: { routeID: string }) => {
    const services = SERVICES_CARDS_DATA.filter(({ id }) => id !== routeID);
    const { thesis } = useMemo(() => SERVICES_PAGE_DATA[routeID], [routeID]);
    const { t: translate } = useTranslation();
    return (
        <Wrapper>
            <Content>
                <FlexBox w={59} direction="column">
                    <Title>Customer</Title>
                    <Subtext>{translate(thesis[0].subtext)}</Subtext>
                    <Image src="/assets/images/services/1.webp" alt="serviceImage" />
                    <Title>Challenge</Title>
                    <Subtext>{translate(thesis[1].subtext)}</Subtext>
                    <Title>Solution</Title>
                    <Subtext>{translate(thesis[2].subtext)}</Subtext>
                    <FlexBox>
                        <Image w={53} src="/assets/images/services/2.webp" alt="serviceImage" />
                        <List>
                            <ListItem>Hid mobile access </ListItem>
                            <ListItem>Location services</ListItem>
                            <ListItem>Visitor management</ListItem>
                            <ListItem>Cybersecurity coordination</ListItem>
                        </List>
                    </FlexBox>
                    <Title>Results</Title>
                    <Subtext>{translate(thesis[3].subtext)}</Subtext>
                    <Title>Technologies</Title>
                    <Subtext>{translate(thesis[4].subtext)}</Subtext>
                </FlexBox>
                {/* TODO добавить перевод */}
                <FlexBox w={39} direction="column">
                    <SearchServices />
                    <Accordion data={services} />
                </FlexBox>
            </Content>
        </Wrapper>
    );
};

export default SectionServicesContent;

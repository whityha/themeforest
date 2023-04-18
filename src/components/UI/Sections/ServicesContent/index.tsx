import React from 'react';

import Accordion from '@/components/Accordion';
import SearchServices from '@/components/SearchServices';
import { SERVICES_CARDS_DATA } from '@/constants/Mocks/Services';

import FlexBox from '../../FlexBox';

import { Content, Image, List, ListItem, Subtext, Title, Wrapper } from './styled';

const SectionServicesContent = ({ routeID }: { routeID: string }) => {
    const currentServices = SERVICES_CARDS_DATA.filter(({ id }) => id !== routeID);
    return (
        <Wrapper>
            <Content>
                <FlexBox w={59} direction="column">
                    <Title>Customer</Title>
                    <Subtext>
                        Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus
                        consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies.
                        Integer ante sapien, consequat et dolor vel.
                    </Subtext>
                    <Image src="/assets/images/services/1.webp" alt="serviceImage" />
                    <Title>Challenge</Title>
                    <Subtext>
                        Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus
                        consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies.
                        Integer ante sapien, consequat et dolor vel. Morbi urna massa, imperdiet in
                        mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam
                        ligula id, lacinia auctor orci.
                    </Subtext>
                    <Title>Solution</Title>
                    <Subtext>
                        Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus
                        consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies.
                        Integer ante sapien, consequat et dolor vel.
                    </Subtext>
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
                    <Subtext>
                        Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus
                        consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies.
                        Integer ante sapien, consequat et dolor vel. Morbi urna massa, imperdiet in
                        mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam
                        ligula id, lacinia auctor orci.
                    </Subtext>
                    <Title>Technologies</Title>
                    <Subtext>
                        Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus
                        consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies.
                        Integer ante sapien, consequat et dolor vel.
                    </Subtext>
                </FlexBox>
                {/* TODO добавить перевод */}
                <FlexBox w={39} direction="column">
                    <SearchServices />
                    <Accordion data={currentServices} />
                </FlexBox>
            </Content>
        </Wrapper>
    );
};

export default SectionServicesContent;

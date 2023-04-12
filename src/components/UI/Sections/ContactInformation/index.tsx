import React from 'react';

import ContactForm from '@/components/ContactForm';

import FlexBox from '../../FlexBox';

import { CONTACTS_LIST } from './config';
import { ContactItem, Content, Subtext, Title, Wrapper } from './styled';

const SectionContactInformation = () => {
    return (
        <Wrapper background="background">
            <Content>
                <FlexBox rg={40} direction="column" w={40}>
                    <Title>Contact information</Title>
                    <Subtext>
                        Fill up the form and our Team will get back to you with 25 hours.
                    </Subtext>
                    <FlexBox direction="column" rg={20}>
                        {CONTACTS_LIST.map(({ icon, element }) => {
                            return (
                                <ContactItem key={icon} image={icon}>
                                    {element}
                                </ContactItem>
                            );
                        })}
                    </FlexBox>
                </FlexBox>
                <FlexBox w={50}>
                    <ContactForm />
                </FlexBox>
            </Content>
        </Wrapper>
    );
};

export default SectionContactInformation;

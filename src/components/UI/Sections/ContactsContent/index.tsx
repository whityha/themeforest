import React from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import { Address, Email, Phone } from '@/components/Contacts';
import { makeSubstringBlue } from '@/utils/makeSubstringBlue';

import ContactForm from './ContactForm';
import {
    ContactContainer,
    Contacts,
    Content,
    FormContainer,
    Title,
    TitleContact,
    Wrapper,
} from './styled';

const SectionContactsContent = () => {
    return (
        <Wrapper>
            <Content>
                <Breadcrumbs paths={['Home', 'Contacts']} />
                <FormContainer>
                    <Title>{makeSubstringBlue('How can we help you?', 'help you?')}</Title>
                    <ContactForm />
                </FormContainer>
                <Contacts>
                    <ContactContainer>
                        <TitleContact icon="mail">Email</TitleContact>
                        <Email />
                    </ContactContainer>
                    <ContactContainer>
                        <TitleContact icon="phone">Phone</TitleContact>
                        <Phone />
                    </ContactContainer>
                    <ContactContainer>
                        <TitleContact icon="address">Address</TitleContact>
                        <Address />
                    </ContactContainer>
                </Contacts>
            </Content>
        </Wrapper>
    );
};

export default SectionContactsContent;

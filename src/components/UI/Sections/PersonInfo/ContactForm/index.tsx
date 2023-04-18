import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Puff } from 'react-loader-spinner';
import emailjs from '@emailjs/browser';
import { Formik } from 'formik';

import {
    APP_EMAIL_PUBLIC_KEY,
    APP_EMAIL_SERVICE_ID,
    APP_EMAIL_TEMPLATE_ID_PERSON_CONTACT,
} from '@/constants';
import { Title6 } from '@/theme/UI/Titles';

import { Error, FormContainer, Input, InputContainer, SubmitButton } from './styled';
import { onSubmit } from './types';
import BasicFormSchema from './yupConfig';

const ContactForm = ({ personName }: { personName: string }) => {
    const { t } = useTranslation();
    const [isSending, setIsSending] = useState(false);
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (values: object, { resetForm }: onSubmit) => {
        if (form.current) {
            setIsSending(true);
            emailjs
                .sendForm(
                    APP_EMAIL_SERVICE_ID,
                    APP_EMAIL_TEMPLATE_ID_PERSON_CONTACT,
                    form.current,
                    APP_EMAIL_PUBLIC_KEY
                )
                .then(() => {
                    setIsSending(false);
                    resetForm();
                });
            // TODO Добавить положительную анимацию отправки письма
        }
    };
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                theme: '',
                message: '',
                person: personName,
            }}
            validationSchema={BasicFormSchema}
            onSubmit={sendEmail}
        >
            {({ errors, isValid, touched }) => {
                return (
                    <FormContainer ref={form}>
                        <InputContainer title="Name*">
                            <Input name="name" type="text" />
                            {errors.name && touched.name && <Error>{errors.name}</Error>}
                        </InputContainer>
                        <InputContainer title="Email*">
                            <Input name="email" type="text" />
                            {errors.email && touched.email && <Error>{errors.email}</Error>}
                        </InputContainer>
                        <InputContainer full title="Theme*">
                            <Input name="theme" type="text" />
                            {errors.theme && touched.theme && <Error>{errors.theme}</Error>}
                        </InputContainer>
                        <InputContainer full title="Message">
                            <Input name="message" type="text" />
                            {errors.message && touched.message && <Error>{errors.message}</Error>}
                        </InputContainer>
                        <InputContainer hidden full title="Person">
                            <Input name="person" type="text" />
                        </InputContainer>
                        <SubmitButton type="submit" disabled={!isValid || !touched.email}>
                            {isSending ? (
                                <Puff height="30" width="30" radius={1} color="#b9b9b9" visible />
                            ) : (
                                <Title6>{t('EmailSender.button')}</Title6>
                            )}
                        </SubmitButton>
                    </FormContainer>
                );
            }}
        </Formik>
    );
};

export default ContactForm;

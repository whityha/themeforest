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

import { Error, FormContainer, Input, InputContainer, SubmitButton, Textarea } from './styled';
import { onSubmit } from './types';
import BasicFormSchema from './yupConfig';

const ContactForm = () => {
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
            }}
            validationSchema={BasicFormSchema}
            onSubmit={sendEmail}
        >
            {({ errors, isValid, touched }) => {
                return (
                    <FormContainer ref={form}>
                        <InputContainer>
                            <Input name="email" type="text" placeholder="Your email" />
                            {errors.email && touched.email && <Error>{errors.email}</Error>}
                        </InputContainer>
                        <InputContainer>
                            <Input name="name" type="text" placeholder="Your name" />
                            {errors.name && touched.name && <Error>{errors.name}</Error>}
                        </InputContainer>
                        <InputContainer full>
                            <Input name="theme" type="text" placeholder="Theme" />
                            {errors.theme && touched.theme && <Error>{errors.theme}</Error>}
                        </InputContainer>
                        <InputContainer full>
                            <Textarea name="message" type="text" placeholder="Message" rows={7} />
                            {errors.message && touched.message && <Error>{errors.message}</Error>}
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

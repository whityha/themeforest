import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Puff } from 'react-loader-spinner';
import emailjs from '@emailjs/browser';
import { Formik } from 'formik';

import { APP_EMAIL_PUBLIC_KEY, APP_EMAIL_SERVICE_ID, APP_EMAIL_TEMPLATE_ID } from '@/constants';
import { Title6 } from '@/theme/UI/Titles';

import { Error, FormContainer, Input, SendButton } from './styled';
import BasicFormSchema from './yupConfig';

const EmailSender = () => {
    const { t } = useTranslation();
    const [isSending, setIsSending] = useState(false);
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (values: object, { resetForm }: { resetForm: () => void }) => {
        if (form.current) {
            setIsSending(true);
            emailjs
                .sendForm(
                    APP_EMAIL_SERVICE_ID,
                    APP_EMAIL_TEMPLATE_ID,
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
                email: '',
            }}
            validationSchema={BasicFormSchema}
            onSubmit={sendEmail}
        >
            {({ errors, touched, values: { email } }) => (
                <FormContainer ref={form} error={touched.email && errors.email}>
                    <Error error={touched.email && errors.email}>{t('EmailSender.error')}</Error>
                    <Input
                        name="email"
                        type="text"
                        placeholder={t('EmailSender.placeholder') ?? ''}
                        disabled={isSending}
                        autocomplete="off"
                    />
                    <SendButton
                        disabled={!!(touched.email && errors.email) || !email || isSending}
                        type="submit"
                    >
                        {isSending ? (
                            <Puff height="30" width="30" radius={1} color="#b9b9b9" visible />
                        ) : (
                            <Title6>{t('EmailSender.button')}</Title6>
                        )}
                    </SendButton>
                </FormContainer>
            )}
        </Formik>
    );
};

export default EmailSender;

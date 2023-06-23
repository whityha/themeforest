import React from 'react';
import { changeLanguage } from 'i18next';

import { LANGUAGES } from './config';
import { Option, Select, Title, Wrapper } from './styled';

const LanguageSelect = () => {
    const { language: defaultLanguage } = LANGUAGES[0];
    const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target && e.target.value) changeLanguage(e.target.value);
    };
    return (
        <Wrapper>
            <Title>Language:</Title>
            <Select onChange={handleLanguage} defaultValue={defaultLanguage}>
                {LANGUAGES.map(({ id, language }) => {
                    return (
                        <Option value={language} key={id}>
                            {language}
                        </Option>
                    );
                })}
            </Select>
        </Wrapper>
    );
};

export default LanguageSelect;

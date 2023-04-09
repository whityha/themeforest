import React from 'react';

import { BlueText } from '@/theme/UI/BlueText';

export const colorWord = (string: string, word: string) => {
    if (string.indexOf(word) === -1) return string;
    const splitedString = string.split(word);
    return (
        <>
            {splitedString[0]} <BlueText>{word}</BlueText> {splitedString[1]}
        </>
    );
};

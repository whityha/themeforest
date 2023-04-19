import React from 'react';

import { BlueText } from '@/theme/UI/BlueText';

export const makeSubstringBlue = (main: string, substring: string) => {
    if (main.indexOf(substring) === -1) return main;
    const splitedString = main.split(substring);
    return (
        <>
            {splitedString[0]} <BlueText>{substring}</BlueText> {splitedString[1]}
        </>
    );
};

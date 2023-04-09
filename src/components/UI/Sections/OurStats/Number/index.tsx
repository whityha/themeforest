import React from 'react';

import { Number, Subtitle, Wrapper } from './styled';

const NumberBlock = ({ children, number }: { children: React.ReactNode; number: string }) => {
    return (
        <Wrapper>
            <Number>{number}</Number>
            <Subtitle>{children}</Subtitle>
        </Wrapper>
    );
};

export default NumberBlock;

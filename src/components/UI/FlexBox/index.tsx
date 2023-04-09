import React from 'react';

import { FlexBox } from '@/types';

import { Wrapper } from './styled';

const FlexBox = ({ children, d, direction, w, alignSelf, justifyContent, alignItems }: FlexBox) => {
    return (
        <Wrapper
            d={d ?? 'flex'}
            direction={direction}
            w={w}
            alignSelf={alignSelf}
            justifyContent={justifyContent}
            alignItems={alignItems}
        >
            {children}
        </Wrapper>
    );
};

export default FlexBox;

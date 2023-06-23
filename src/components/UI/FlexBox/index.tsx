import React from 'react';

import { FlexBox } from '@/types';

import { Wrapper } from './styled';

const FlexBox = ({
    children,
    d,
    direction,
    w,
    alignSelf,
    justifyContent,
    alignItems,
    rg,
    cg,
    background,
    maxw,
    minw,
}: FlexBox) => {
    return (
        <Wrapper
            d={d ?? 'flex'}
            direction={direction}
            w={w}
            alignSelf={alignSelf}
            justifyContent={justifyContent}
            alignItems={alignItems}
            rg={rg}
            cg={cg}
            background={background}
            maxw={maxw}
            minw={minw}
        >
            {children}
        </Wrapper>
    );
};

export default FlexBox;

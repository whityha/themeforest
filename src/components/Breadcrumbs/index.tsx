import React from 'react';

import { Backgrounds } from '@/types';

import { CurrentPageName, HistoryPageName, Wrapper } from './styled';

const Breadcrumbs = ({
    center,
    paths,
    background,
}: {
    center?: boolean;
    paths: Array<string>;
    background?: Backgrounds;
}) => {
    return (
        <Wrapper center={center}>
            {paths.map((path, i, array) => {
                if (i === array.length - 1)
                    return (
                        <CurrentPageName background={background} key={path}>
                            {path}
                        </CurrentPageName>
                    );
                return <HistoryPageName key={path}>{path} |&nbsp;</HistoryPageName>;
            })}
        </Wrapper>
    );
};
export default Breadcrumbs;

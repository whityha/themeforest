import React from 'react';

import { Backgrounds } from '@/types';

import { CurrentPageName, HistoryPageName, Wrapper } from './styled';

interface Breadcrumbs {
    paths: Array<string>;
    center?: boolean;
    background?: Backgrounds;
}

const Breadcrumbs = ({ center, paths, background }: Breadcrumbs) => {
    return (
        <Wrapper center={center}>
            {paths.map((path, i, array) => {
                if (i === array.length - 1)
                    return (
                        <CurrentPageName background={background} key={path}>
                            {path}
                        </CurrentPageName>
                    );
                return <HistoryPageName key={path}>{path}</HistoryPageName>;
            })}
        </Wrapper>
    );
};
export default Breadcrumbs;

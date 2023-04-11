import React from 'react';

import { CurrentPageName, HistoryPageName, Wrapper } from './styled';

const Breadcrumbs = ({ paths }: { paths: Array<string> }) => {
    return (
        <Wrapper>
            {paths.map((path, i, array) => {
                if (i === array.length - 1)
                    return <CurrentPageName key={path}>{path}</CurrentPageName>;
                return <HistoryPageName key={path}>{path} |&nbsp;</HistoryPageName>;
            })}
        </Wrapper>
    );
};
export default Breadcrumbs;

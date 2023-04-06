import React from 'react';

import Home from '@/pages/Home';

const Serv = React.lazy(() => import('@/pages/Services'));

const ROUTES = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/services',
        element: <Serv />,
    },
];

export default ROUTES;

import React from 'react';

import Home from '@/pages/Home';
import Services from '@/pages/Services';

export const ALL_ROUTES = [
    {
        path: '/',
        name: 'home',
        element: <Home />,
    },
    {
        path: '/services',
        name: 'services',
        element: <Services />,
    },
    {
        path: '/solutions',
        name: 'solutions',
        element: <Services />,
    },
    {
        path: '/pages',
        name: 'pages',
        element: <Services />,
    },
    {
        path: '/elements',
        name: 'elements',
        element: <Services />,
    },
    {
        path: '/blog',
        name: 'blog',
        element: <Services />,
    },
    {
        path: '/contacts',
        name: 'contacts',
        element: <Services />,
    },
];

export const NAVBAR_ITEMS = ALL_ROUTES.filter(({ name }) => name !== 'services');

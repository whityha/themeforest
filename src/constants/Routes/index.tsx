import React from 'react';

import Home from '@/pages/Home';
import Solutions from '@/pages/Solutions';
import SolutionSingle from '@/pages/SolutionSingle';

export const ALL_ROUTES = [
    {
        path: '/',
        name: 'home',
        element: <Home />,
    },
    {
        path: '/services',
        name: 'services',
        element: <Solutions />,
    },
    {
        path: '/solutions',
        name: 'solutions',
        element: <Solutions />,
    },
    {
        path: '/pages',
        name: 'pages',
        element: <Solutions />,
    },
    {
        path: '/elements',
        name: 'elements',
        element: <Solutions />,
    },
    {
        path: '/blog',
        name: 'blog',
        element: <Solutions />,
    },
    {
        path: '/contacts',
        name: 'contacts',
        element: <Solutions />,
    },
    {
        path: '/solutions/:id',
        name: 'solutionSingle',
        element: <SolutionSingle />,
    },
];

export const NAVBAR_ROUTES = ALL_ROUTES.filter(
    ({ name }) => !['services', 'solutionSingle'].includes(name)
);

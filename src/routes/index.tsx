import React from 'react';

import AboutUs from '@/pages/AboutUs';
import Blog from '@/pages/Blog';
import BlogSingle from '@/pages/BlogSingle';
import Contacts from '@/pages/Contacts';
import FAQ from '@/pages/FAQ';
import Home from '@/pages/Home';
import OurTeam from '@/pages/OurTeam';
import Page404 from '@/pages/Page404';
import Services from '@/pages/Services';
import ServicesSingle from '@/pages/ServicesSingle';
import Solutions from '@/pages/Solutions';
import SolutionSingle from '@/pages/SolutionSingle';
import TeamSingle from '@/pages/TeamSingle';

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
        path: '/contacts',
        name: 'contacts',
        element: <Contacts />,
    },
    {
        path: '/solutions/:id',
        name: 'solutionSingle',
        element: <SolutionSingle />,
    },
    {
        path: '/services/:id',
        name: 'servicesSingle',
        element: <ServicesSingle />,
    },
    {
        path: '/faq',
        name: 'faq',
        element: <FAQ />,
    },
    {
        path: '/about_us',
        name: 'about_us',
        element: <AboutUs />,
    },
    {
        path: '/blog',
        name: 'blog',
        element: <Blog />,
    },
    {
        path: '/blog/:id',
        name: 'blogSingle',
        element: <BlogSingle />,
    },
    {
        path: '/team',
        name: 'team',
        element: <OurTeam />,
    },
    {
        path: '/team/:id',
        name: 'teamSingle',
        element: <TeamSingle />,
    },
    {
        path: '/*',
        name: 'error',
        element: <Page404 />,
    },
];

export const NAVBAR_ROUTES = ALL_ROUTES.filter(
    ({ name }) =>
        ![
            'services',
            'solutionSingle',
            'servicesSingle',
            'faq',
            'about_us',
            'blogSingle',
            'team',
            'teamSingle',
            'error',
        ].includes(name)
);

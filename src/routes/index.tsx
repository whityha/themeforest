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

export enum PAGES {
    Home = 'home',
    Services = 'services',
    Solutions = 'solutions',
    Contacts = 'contacts',
    SolutionSingle = 'solutionSingle',
    ServicesSingle = 'servicesSingle',
    Blog = 'blog',
    Faq = 'faq',
    BlogSingle = 'blogSingle',
    Team = 'team',
    TeamSingle = 'teamSingle',
    Error = 'error',
    AboutUs = 'about_us',
    Elements = 'elements',
    Pages = 'pages',
}

export enum PATHS {
    Home = '/',
    Services = '/services',
    Solutions = '/solutions',
    Contacts = '/contacts',
    SolutionSingle = '/solution/:id',
    ServicesSingle = '/services/:id',
    Blog = '/blog',
    Faq = '/faq',
    BlogSingle = '/blog/:id',
    Team = '/team',
    TeamSingle = '/team/:id',
    Error = '/*',
    AboutUs = '/about_us',
    Elements = '/elements',
    Pages = '/pages',
}

export const ALL_ROUTES = [
    {
        path: PATHS.Home,
        name: PAGES.Home,
        element: <Home />,
    },
    {
        path: PATHS.Home,
        name: PAGES.Services,
        element: <Services />,
    },
    {
        path: PATHS.Solutions,
        name: PAGES.Solutions,
        element: <Solutions />,
    },
    {
        path: PATHS.Pages,
        name: PAGES.Pages,
        element: <Solutions />,
    },
    {
        path: PATHS.Elements,
        name: PAGES.Elements,
        element: <Solutions />,
    },
    {
        path: PATHS.Contacts,
        name: PAGES.Contacts,
        element: <Contacts />,
    },
    {
        path: PATHS.SolutionSingle,
        name: PAGES.SolutionSingle,
        element: <SolutionSingle />,
    },
    {
        path: PATHS.ServicesSingle,
        name: PAGES.ServicesSingle,
        element: <ServicesSingle />,
    },
    {
        path: PATHS.Faq,
        name: PAGES.Faq,
        element: <FAQ />,
    },
    {
        path: PATHS.AboutUs,
        name: PAGES.AboutUs,
        element: <AboutUs />,
    },
    {
        path: PATHS.Blog,
        name: PAGES.Blog,
        element: <Blog />,
    },
    {
        path: PATHS.BlogSingle,
        name: PAGES.BlogSingle,
        element: <BlogSingle />,
    },
    {
        path: PATHS.Team,
        name: PAGES.Team,
        element: <OurTeam />,
    },
    {
        path: PATHS.TeamSingle,
        name: PAGES.TeamSingle,
        element: <TeamSingle />,
    },
    {
        path: PATHS.Error,
        name: PAGES.Error,
        element: <Page404 />,
    },
];

export const NAVBAR_ROUTES = ALL_ROUTES.filter(
    ({ name }) =>
        ![
            PAGES.Services,
            PAGES.SolutionSingle,
            PAGES.ServicesSingle,
            PAGES.Faq,
            PAGES.AboutUs,
            PAGES.BlogSingle,
            PAGES.Team,
            PAGES.TeamSingle,
            PAGES.Error,
        ].includes(name)
);

import React from 'react';

import { Address, Email, Phone } from '@/components/Contacts';

export const CONTACTS_LIST = [
    {
        name: 'Email address',
        element: <Email />,
    },
    {
        name: 'Phone number',
        element: <Phone />,
    },
    {
        name: 'Address',
        element: <Address />,
    },
];

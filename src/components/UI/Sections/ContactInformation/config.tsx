import React from 'react';

import { Address, Email, Phone } from '@/components/Contacts';

export const CONTACTS_LIST = [
    {
        icon: '/assets/icons/contacts/mail.svg',
        element: <Email />,
    },
    {
        icon: '/assets/icons/contacts/phone.svg',
        element: <Phone />,
    },
    {
        icon: '/assets/icons/contacts/address.svg',
        element: <Address />,
    },
];

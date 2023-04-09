import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { NAVBAR_ITEMS } from '@/constants/Routes';
import { Title7Light } from '@/theme/UI/Titles';

import { ListItem, Wrapper } from './styled';

const Navbar = () => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            {NAVBAR_ITEMS.map(({ name, path }) => (
                <ListItem key={name}>
                    <Link to={path}>
                        <Title7Light>{t(`header.navbar.${name}`)}</Title7Light>
                    </Link>
                </ListItem>
            ))}
        </Wrapper>
    );
};

export default Navbar;

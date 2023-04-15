import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { NAVBAR_ROUTES } from '@/routes';
import { Title7Light } from '@/theme/UI/Titles';

import { ListItem, Wrapper } from './styled';

const Navbar = ({ light }: { light: boolean }) => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            {NAVBAR_ROUTES.map(({ name, path }) => (
                <ListItem light={light} key={name}>
                    <Link to={path}>
                        <Title7Light>{t(`header.navbar.${name}`)}</Title7Light>
                    </Link>
                </ListItem>
            ))}
        </Wrapper>
    );
};

export default Navbar;

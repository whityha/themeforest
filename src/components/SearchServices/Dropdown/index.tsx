import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { ServicesCardsDataType } from '@/types';

import { ListItem, Wrapper } from './styled';

interface Dropdown {
    data: ServicesCardsDataType;
}

const Dropdown = ({ data }: Dropdown) => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            {data.map(({ link, id, title }) => {
                return (
                    <ListItem key={id}>
                        <Link to={link}>{t(title)}</Link>
                    </ListItem>
                );
            })}
        </Wrapper>
    );
};

export default Dropdown;

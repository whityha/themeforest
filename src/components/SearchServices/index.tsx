import React, { useState } from 'react';

import { SERVICES_CARDS_DATA } from '@/constants/Mocks/Services';
import { ServicesCardsDataType } from '@/types';

import Dropdown from './Dropdown';
import { Container, Input, SearchButton, Wrapper } from './styled';

const SearchServices = () => {
    const [value, setValue] = useState<string>('');
    const [services, setServices] = useState<ServicesCardsDataType>([]);

    const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target) setValue(e.target.value);
        if (e.target && e.target.value === '') setServices([]);
    };

    const searchService = () => {
        if (value === '') return;
        const services = SERVICES_CARDS_DATA.filter(({ searchEn }) => {
            return searchEn.includes(value);
        });
        setServices(services);
    };

    const clearServices = () => setServices([]);

    return (
        <Container>
            <Wrapper>
                <Input onBlur={clearServices} value={value} onChange={handleValue} />
                <SearchButton onClick={searchService}>Search</SearchButton>
            </Wrapper>
            {!!services.length && <Dropdown data={services} />}
        </Container>
    );
};

export default SearchServices;

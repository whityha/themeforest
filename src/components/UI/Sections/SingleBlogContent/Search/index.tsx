import React, { useState } from 'react';

import { TAGS } from '@/constants';
import { BLOG_NEWS } from '@/constants/Mocks/Blogs';

import { SameTagsPosts, SOURCES } from '../types';

import { Input, SearchButton, Wrapper } from './styled';

const Search = ({ setPosts }: { setPosts: (arg: SameTagsPosts) => void }) => {
    const [value, setValue] = useState<string>('');

    const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleSearch = () => {
        const tags = value.split('#').map((item) => item.trim());
        const articles = BLOG_NEWS.filter((article) => {
            return tags.some((tag) => article.tags.includes(tag as TAGS));
        });
        if (value === '') setPosts({ data: [], source: undefined });
        else setPosts({ data: articles, source: SOURCES.Search });
    };

    return (
        <Wrapper>
            <Input value={value} onChange={handleValue} placeholder="Enter #tag" />
            <SearchButton onClick={handleSearch}>Search</SearchButton>
        </Wrapper>
    );
};

export default Search;

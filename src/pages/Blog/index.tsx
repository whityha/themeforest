import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SectionTitleBlog from '@/components/UI/Sections/SectionTitleBlog';
import { Backgrounds } from '@/types';

const Blog = () => {
    return (
        <>
            <Header background={Backgrounds.DarkBlue} />
            <SectionTitleBlog />
            <Footer />
        </>
    );
};

export default Blog;

import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { SectionTitleBlog } from '@/components/UI/Sections';
import SectionBlogContent from '@/components/UI/Sections/BlogContent';
import { Backgrounds } from '@/types';

const Blog = () => {
    return (
        <>
            <Header background={Backgrounds.DarkBlue} />
            <SectionTitleBlog />
            <SectionBlogContent />
            <Footer />
        </>
    );
};

export default Blog;

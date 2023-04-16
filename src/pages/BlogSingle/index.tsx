import React from 'react';
import { useParams } from 'react-router-dom';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {
    SectionContentSingleBlog,
    SectionSingleBlogTitle,
    SectionSubscribe,
} from '@/components/UI/Sections';
import { Backgrounds } from '@/types';

const BlogSingle = () => {
    const { id } = useParams();
    return (
        <>
            <Header background={Backgrounds.Grey} />
            <SectionSingleBlogTitle id={id as string} />
            <SectionContentSingleBlog id={id as string} />
            <SectionSubscribe background={Backgrounds.Blue} />
            <SectionSubscribe background={Backgrounds.DarkBlue} />
            <Footer />
        </>
    );
};

export default BlogSingle;

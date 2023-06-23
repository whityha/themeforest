import { SameTagsPosts } from '@/components/UI/Sections/SingleBlogContent/types';

export const sortPostsByView = (posts: SameTagsPosts): SameTagsPosts => {
    const sortedPosts = posts.data.sort((a, b) => {
        return b.views - a.views;
    });
    return { data: sortedPosts, source: undefined };
};

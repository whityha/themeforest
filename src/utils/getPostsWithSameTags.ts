import { SameTagsPosts, SOURCES } from '@/components/UI/Sections/SingleBlogContent/types';
import { BLOG_NEWS } from '@/constants/Mocks/Blogs';

export const getPostsWithSameTags = (id: number): SameTagsPosts => {
    const currentPost = BLOG_NEWS.filter(({ id: idPost }) => idPost === id)[0];
    const { tags: currentTags } = currentPost;
    const allPostsWithSameTags = BLOG_NEWS.filter(
        ({ tags, id: idPost }) =>
            idPost !== Number(id) && currentTags.some((tag) => tags.includes(tag))
    );
    return { data: allPostsWithSameTags, source: SOURCES.Page };
};

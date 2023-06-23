import { SameTagsPosts, SOURCES } from '@/components/UI/Sections/SingleBlogContent/types';
import { BLOG_NEWS } from '@/constants/Mocks/Blogs';

export const getPostsWithSameTags = (id: number, source: SOURCES = SOURCES.Page): SameTagsPosts => {
    const currentPost = BLOG_NEWS.find(({ id: idPost }) => idPost === id);
    if (!currentPost) return { data: [], source };
    const { tags: currentTags } = currentPost;
    const allPostsWithSameTags = BLOG_NEWS.filter(
        ({ tags, id: idPost }) =>
            idPost !== Number(id) && currentTags.some((tag) => tags.includes(tag))
    );
    return { data: allPostsWithSameTags, source };
};

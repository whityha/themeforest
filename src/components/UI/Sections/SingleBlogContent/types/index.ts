import { Article } from '@/constants/Mocks/Blogs';

export enum SOURCES {
    Page,
    Search,
    Tags,
}

export type SameTagsPosts = {
    data: Article[];
    source?: SOURCES;
};

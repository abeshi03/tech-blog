import { Category } from "../../Category";
import { ImageType } from "../../Image";

export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  blogContent: string;
  mainImage?: ImageType
  categories: Category[];
}

export type BlogResponseData = {
  data: {
    contents: Blog[];
    totalCount: number;
  }
}

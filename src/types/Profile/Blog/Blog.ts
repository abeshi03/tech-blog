import { Category } from "../../Category";

export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  blogContent__HTML: string;
  mainImage?: {
    url: string;
    height: number;
    width: number;
  },
  categories: Category[];
}

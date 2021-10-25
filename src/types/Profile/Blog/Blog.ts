import { Category } from "../../Category";
import { ImageType } from "../../Image";

export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  blogContent__HTML: string;
  mainImage?: ImageType
  categories: Category[];
}

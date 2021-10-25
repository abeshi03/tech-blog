// - 型定義 =============================================================================================================
import { Profile } from "../types/Profile/Profile";
import { Blog, BlogResponseData } from "../types/Profile/Blog/Blog";
import { ImageType } from "../types/Image";

export const initImage: ImageType = {
  url: "",
  width: 0,
  height: 0
};

export const initMyProfileState: Profile = {
  familyName: "",
  lastName: "",
  role: "",
  image: initImage,
  createdAt: "",
  publishedAt: "",
  revisedAt: "",
  updatedAt: ""
};

export const initBlogState: Blog = {
  id: "",
  createdAt: "",
  updatedAt: "",
  publishedAt: "",
  revisedAt: "",
  title: "",
  blogContent__HTML: "",
  mainImage: initImage,
  categories: []
};

export const initBlogData: BlogResponseData = {
  data: {
    contents: [],
    totalCount: 0
  }
};

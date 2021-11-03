// - ライブラリー ========================================================================================================
import axios from "axios";

// - 型定義 =============================================================================================================
import { BlogResponseData } from "../types/Profile/Blog/Blog";

// - 定数 ===============================================================================================================
import { BLOG_END_POINT } from "../constants/apis";
import { X_API_KEY } from "../constants/apis";

export async function getBlogs({ limit }: { limit: number; }): Promise<BlogResponseData> {

  try {

    const response: BlogResponseData = await axios.get(BLOG_END_POINT, {
      params: {
        limit
      },
      headers: { "X-API-KEY": X_API_KEY }
    });

    const blogData: BlogResponseData = {
      data: {
        contents: response.data.contents,
        totalCount: response.data.totalCount
      }
    };

    return blogData;

  } catch (error: unknown) {
    console.log(error);
    throw new Error("API ERROR: getBlogs");
  }
}

export async function getBlogsContainCategory(
  {
    limit,
    categoryID
  }: {
    limit: number;
    categoryID: string;
  }
): Promise<BlogResponseData> {

  try {

    const response: BlogResponseData = await axios.get(BLOG_END_POINT, {
      params: {
        limit,
        filters: `categories[contains]${categoryID}`
      },
      headers: { "X-API-KEY": X_API_KEY }
    });

    const blogContainCategoryData: BlogResponseData = {
      data: {
        contents: response.data.contents,
        totalCount: response.data.totalCount
      }
    };

    return blogContainCategoryData;

  } catch (error: unknown) {
    console.log(error);
    throw new Error("API ERROR: getBlogs");
  }
}

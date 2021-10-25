// - ライブラリー ========================================================================================================
import axios from "axios";

// - 型定義 =============================================================================================================
import { BlogResponseData } from "../types/Profile/Blog/Blog";
import { initBlogData } from "../constants/initState";


export const getBlogs = async (): Promise<BlogResponseData> => {

  let blogData: BlogResponseData = initBlogData;

  try {

    const baseEndPoint: string = process.env.NEXT_PUBLIC_ENDPOINT;

    const response: BlogResponseData = await axios.get(`${baseEndPoint}blog`, {
      headers: { "X-API-KEY": process.env.NEXT_PUBLIC_PROFILE_API_KEY }
    });

    blogData.data.contents = response.data.contents;
    blogData.data.totalCount = response.data.totalCount;

  } catch (error: unknown) {
    console.log(error);
    throw new Error("API ERROR: getBlogs");
  }

  return blogData;
};

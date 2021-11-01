// - ライブラリー ========================================================================================================
import axios from "axios";

// - 型定義 =============================================================================================================
import { BlogResponseData } from "../types/Profile/Blog/Blog";

// - 定数 ===============================================================================================================
import { BASE_END_POINT } from "../constants/apis";
import { X_API_KEY } from "../constants/apis";

export async function getBlogs(): Promise<BlogResponseData> {


  try {

    const response: BlogResponseData = await axios.get(`${BASE_END_POINT}blog`, {
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

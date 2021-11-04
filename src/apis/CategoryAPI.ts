// - ライブラリー ========================================================================================================
import axios from "axios";

// - 型定義 =============================================================================================================
import { CategoryResponseData } from "../types/Category";

// - 定数 ===============================================================================================================
import { X_API_KEY } from "../constants/apis";
import { CATEGORY_END_POINT } from "../constants/apis";

export async function getCategories(): Promise<CategoryResponseData> {

  try {

    const response: CategoryResponseData = await axios.get(CATEGORY_END_POINT, {
      headers: { "X-API-KEY": X_API_KEY }
    });

    const categoriesData: CategoryResponseData = {
      data: {
        contents: response.data.contents,
        totalCount: response.data.totalCount
      }
    }

    return categoriesData;

  } catch (error: unknown) {

    console.log(error);
    throw new Error("getStaticProps_error: getCategories");
  }
}

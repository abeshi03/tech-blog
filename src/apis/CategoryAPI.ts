// - ライブラリー ========================================================================================================
import axios from "axios";

// - 型定義 =============================================================================================================
import { CategoryResponseData } from "../types/Category";

// - 定数 ===============================================================================================================
import { X_API_KEY } from "../constants/apis";
import { CATEGORY_END_POINT } from "../constants/apis";

export async function getCategories() {

  try {

    const response = await axios.get<CategoryResponseData>(CATEGORY_END_POINT, {
      params: {
        limit: 100
      },
      headers: { "X-API-KEY": X_API_KEY }
    });


    return response.data;

  } catch (error: unknown) {

    console.log(error);
    throw new Error("getStaticProps_error: getCategories");
  }
}

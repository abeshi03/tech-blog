// - ライブラリー ========================================================================================================
import axios from "axios";

// - 型定義 =============================================================================================================
import { Profile } from "../types/Profile/Profile";

// - 定数 ===============================================================================================================
import { X_API_KEY } from "../constants/apis";
import { PROFILE_END_POINT } from "../constants/apis";


export async function getMyProfile(): Promise<Profile> {

  try {

    const response = await axios.get<Profile>(PROFILE_END_POINT,{
      headers: { "X-API-KEY": X_API_KEY }
    });

    const myProfile: Profile = response.data;

return myProfile;

  } catch (error: unknown) {

    throw new Error("getStaticProps_error: myProfile");
  }
}

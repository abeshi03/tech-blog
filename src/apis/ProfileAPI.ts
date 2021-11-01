// - ライブラリー ========================================================================================================
import axios from "axios";

// - 型定義 =============================================================================================================
import { Profile } from "../types/Profile/Profile";

// - 定数 ===============================================================================================================
import { BASE_END_POINT } from "../constants/apis";
import { X_API_KEY } from "../constants/apis";


export async function getMyProfile(): Promise<Profile> {

  try {

    const response = await axios.get<Profile>(`${BASE_END_POINT}my_profile`,{
      headers: { "X-API-KEY": X_API_KEY }
    });

    const myProfile: Profile = response.data;
    
return myProfile;

  } catch (error: unknown) {

    throw new Error("getStaticProps_error: myProfile");
  }
}

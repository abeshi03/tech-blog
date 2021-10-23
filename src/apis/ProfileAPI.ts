// - ライブラリー ========================================================================================================
import axios from "axios";

// - 型定義 =============================================================================================================
import { Profile } from "../types/profile/profile";

// - state =============================================================================================================
import { initMyProfileState } from "../constants/initState";


export const getMyProfile = async (): Promise<Profile> => {

  let myProfile: Profile = initMyProfileState;

  try {

    const baseEndPoint: string = process.env.NEXT_PUBLIC_ENDPOINT;

    const response = await axios.get<Profile>(`${baseEndPoint}my_profile`,{
      headers: { "X-API-KEY": process.env.NEXT_PUBLIC_PROFILE_API_KEY }
    });

    myProfile = response.data;

  } catch (error: unknown) {

    throw new Error("getStaticProps_error: myProfile");
  }

  return myProfile;
};

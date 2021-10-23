// - フレームワーク, ライブラリー ===========================================================================================
import React, { VFC } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import axios from "axios";

// - ビジネスルール =======================================================================================================
import { ExternalLinks } from "../config/application/externalLinks";

// - 型定義 =============================================================================================================
import { Profile } from "../types/profile/profile";

// - ルーティング ========================================================================================================
import { Routing } from "../routing/routing";

type Props = {
  myProfile: Profile
}

const Home: VFC<Props> = ({ myProfile }) => {


  return(
    <>
      <Head>
        <title>{Routing.Top.pageName}</title>
      </Head>
      <h1>実装待機</h1>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {

  try {

    const baseEndPoint: string = process.env.NEXT_PUBLIC_ENDPOINT;

    const response = await axios.get<Profile>(`${baseEndPoint}my_profile`,{
      headers: { "X-API-KEY": process.env.NEXT_PUBLIC_PROFILE_API_KEY }
    }).then(res => res.data);

    return {
      props: {
        myProfile: response
      }
    };

  } catch (error: unknown) {

    throw new Error("getStaticProps_error: myProfile");
  }
};

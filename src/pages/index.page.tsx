// - フレームワーク, ライブラリー ===========================================================================================
import React, { VFC } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import axios from "axios";

// - 型定義 =============================================================================================================
import { Profile } from "../types/profile/profile";

// - ルーティング ========================================================================================================
import { Routing } from "../routing/routing";

// - api ===============================================================================================================
import { getMyProfile } from "../apis/ProfileAPI";

type Props = {
  myProfile: Profile
}

const Home: VFC<Props> = ({ myProfile }) => {
  console.log(myProfile);
  
return(
    <>
      <Head>
        <title>{ Routing.Top.pageName }</title>
      </Head>
      <h1>実装待機</h1>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {

  const myProfile: Profile = await getMyProfile();

  return {
    props: {
      myProfile
    }
  };
};

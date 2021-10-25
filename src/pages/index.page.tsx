// - フレームワーク, ライブラリー ===========================================================================================
import React, { VFC } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

// - 型定義 =============================================================================================================
import { Profile } from "../types/Profile/Profile";
import { BlogResponseData } from "../types/Profile/Blog/Blog";

// - ルーティング ========================================================================================================
import { Routing } from "../routing/routing";

// - api ===============================================================================================================
import { getMyProfile } from "../apis/ProfileAPI";
import { getBlogs } from "../apis/BlogAPI";

type Props = {
  myProfile: Profile;
  blogs: BlogResponseData;
}

const Home: VFC<Props> = (props) => {

  const { myProfile, blogs } = props;
  console.log(myProfile);
  console.log(blogs.data.contents);

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
  const blogs: BlogResponseData = await getBlogs();

  return {
    props: {
      myProfile,
      blogs
    }
  };
};

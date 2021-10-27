// - フレームワーク, ライブラリー ===========================================================================================
import React, { VFC } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

// - 型定義 =============================================================================================================
import { Profile } from "../types/Profile/Profile";
import { Blog, BlogResponseData } from "../types/Profile/Blog/Blog";

// - ルーティング ========================================================================================================
import { Routing } from "../routing/routing";

// - アセット ===========================================================================================================
import styles from "./top.module.scss";

// - api ===============================================================================================================
import { getMyProfile } from "../apis/ProfileAPI";
import { getBlogs } from "../apis/BlogAPI";

// - 子コンポーネント =====================================================================================================
import { BlogCard } from "../components/organisms/Cards/BlogCard/BlogCard";

type Props = {
  myProfile: Profile;
  blogs: BlogResponseData;
}

const Home: VFC<Props> = (props) => {

  const { myProfile, blogs } = props;

  return(
    <>
      <Head>
        <title>{ Routing.Top.pageName }</title>
      </Head>
      <h1>実装待機</h1>
      {/*テスト表示 後ほど削除*/}
      <div className={styles.blogsFlow}>
        {blogs.data.contents.map((blog: Blog) => {
          return (
            <BlogCard targetBlog={blog} key={blog.id}/>
          );
        })}
      </div>
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

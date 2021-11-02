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
import {ProfileCard} from "../components/organisms/Cards/ProfileCard/ProfileCard";
import { HeadingAndLink } from "../components/molecules/HeadingAndLink/HeadingAndLink";

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
      <main className={styles.topPage}>
        <div className={styles.mainSection}>

          {/*　ブログ記事 ============================================================================================= */}
          <div className={styles.blogsBlock}>
            <HeadingAndLink
              heading="新着記事"
              linkName="記事一覧"
              path="#"
            />
            <div className={styles.blogsCardFlow}>
              {blogs.data.contents.map((blog: Blog) => (
                <BlogCard key={blog.id} targetBlog={blog}/>
              ))}
            </div>
          </div>

          {/*プロフィール ============================================================================================= */}
          <div className={styles.profileBlock}>
            <ProfileCard targetProfile={myProfile}/>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {

  const [ myProfile, blogs ]: [ Profile, BlogResponseData ] = await Promise.all([
    getMyProfile(),
    getBlogs(3)
  ]);

  return {
    props: {
      myProfile,
      blogs
    }
  };
};

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
import { getBlogsContainCategory } from "../apis/BlogAPI";

// - 子コンポーネント =====================================================================================================
import { BlogCard } from "../components/organisms/Cards/BlogCard/BlogCard";
import { ProfileCard } from "../components/organisms/Cards/ProfileCard/ProfileCard";
import { HeadingAndLink } from "../components/molecules/HeadingAndLink/HeadingAndLink";

type Props = {
  myProfile: Profile;
  blogs: BlogResponseData;
  nextJsBlogs: BlogResponseData;
  vueJsBlogs: BlogResponseData;
}

type PostGroup = {
  id: number;
  heading: string;
  linkName: string;
  path: string;
  posts: BlogResponseData;
}

const Home: VFC<Props> = (props) => {

  const { myProfile, blogs, nextJsBlogs, vueJsBlogs } = props;

  const blogGroups: PostGroup[] = [
    {
      id: 1,
      heading: "新着記事",
      linkName: "記事一覧",
      path: "#",
      posts: blogs
    },
    {
      id: 2,
      heading: "Next.js",
      linkName: "Next.jsの記事一覧",
      path: "#",
      posts: nextJsBlogs
    },
    {
      id: 3,
      heading: "Vue.js",
      linkName: "Vue.jsの記事一覧",
      path: "#",
      posts: vueJsBlogs
    }
  ];

  return(
    <>
      <Head>
        <title>{ Routing.Top.pageName }</title>
      </Head>
      <main className={styles.topPage}>
        <div className={styles.mainSection}>

          {/*　ブログ記事 ============================================================================================= */}
          <div className={styles.blogsBlock}>

            {blogGroups.map((postBlogGroup: PostGroup) => (
              <React.Fragment key={postBlogGroup.id}>

                <div className={styles.headingContainer}>
                  <HeadingAndLink
                    heading={postBlogGroup.heading}
                    linkName={postBlogGroup.linkName}
                    path={postBlogGroup.path}
                  />
                </div>

                <div className={styles.blogsCardFlow}>
                  {postBlogGroup.posts.data.contents.map((blog: Blog) => (
                    <BlogCard
                      key={blog.id}
                      targetBlog={blog}/>
                  ))}
                </div>

              </React.Fragment>
            ))}
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

  const nextJsCategoryID: string = "j6g1zbndl";
  const vueJsCategoryID: string = "n2tyyk-0u";

  const [ myProfile, blogs, nextJsBlogs, vueJsBlogs ]: [ Profile, BlogResponseData, BlogResponseData, BlogResponseData ] =
    await Promise.all([
      getMyProfile(),
      getBlogs({ limit: 3, offset: 0 }),
      getBlogsContainCategory({ limit: 3, offset: 0, categoryID: nextJsCategoryID }),
      getBlogsContainCategory({ limit: 3, offset: 0, categoryID: vueJsCategoryID })
    ]);

  return {
    props: {
      myProfile,
      blogs,
      nextJsBlogs,
      vueJsBlogs
    }
  };
};

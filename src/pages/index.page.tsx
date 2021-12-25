// - フレームワーク, ライブラリー ===========================================================================================
import React, { VFC } from "react";
import { GetStaticProps } from "next";

// - メタデータ ==========================================================================================================
import { MetaData } from "../components/MetaData";

// - 型定義 =============================================================================================================
import { Profile } from "../types/Profile/Profile";
import { Blog, BlogResponseData } from "../types/Blog/Blog";

// - ルーティング ========================================================================================================
import { Routing } from "../routing/routing";
import { pagesPath } from "../lib/$path";

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

// - 定数 ===============================================================================================================
import { REACT_CATEGORY_ID } from "../constants/BlogPageSettings";
import { BEGINNER_CATEGORY_ID } from "../constants/BlogPageSettings";

type Props = {
  myProfile: Profile;
  blogs: BlogResponseData;
  reactBlogs: BlogResponseData;
  beginnerBlogs: BlogResponseData;
}

type PostGroup = {
  id: number;
  heading: string;
  linkName: string;
  path: string | Object;
  posts: BlogResponseData;
}

const Home: VFC<Props> = (props) => {

  const { myProfile, blogs, reactBlogs, beginnerBlogs } = props;

  const blogGroups: PostGroup[] = [
    {
      id: 1,
      heading: "新着記事",
      linkName: "記事一覧",
      path: pagesPath.blog.page._id(1).$url(),
      posts: blogs
    },
    {
      id: 2,
      heading: "React",
      linkName: "Reactの記事一覧",
      path: pagesPath.blog.category._categoryId(REACT_CATEGORY_ID).page._pageId(1).$url(),
      posts: reactBlogs
    },
    {
      id: 3,
      heading: "初学者向け",
      linkName: "初学者向けの記事一覧",
      path: pagesPath.blog.category._categoryId(BEGINNER_CATEGORY_ID).page._pageId(1).$url(),
      posts: beginnerBlogs
    }
  ];

  return(
    <>
      <MetaData
        title={Routing.Top.pageName}
        url="/"
        type="website"
        twitterCardType="summary_large_image"
      />
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

  const [ myProfile, blogs, reactBlogs, beginnerBlogs ]: [ Profile, BlogResponseData, BlogResponseData, BlogResponseData ] =
    await Promise.all([
      getMyProfile(),
      getBlogs({ limit: 3, offset: 0 }),
      getBlogsContainCategory({ limit: 3, offset: 0, categoryID: REACT_CATEGORY_ID }),
      getBlogsContainCategory({ limit: 3, offset: 0, categoryID: BEGINNER_CATEGORY_ID })
    ]);

  return {
    props: {
      myProfile,
      blogs,
      reactBlogs,
      beginnerBlogs
    }
  };
};

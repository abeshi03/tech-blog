// - フレームワーク, ライブラリー ===========================================================================================
import React, { VFC } from "react";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";

// - アセット ===========================================================================================================
import styles from "./blogDetailsPage.module.scss";

// - ルーティング ========================================================================================================
import { Routing } from "../../../routing/routing";

// - api ===============================================================================================================
import { getBlogData, getBlogs } from "../../../apis/BlogAPI";

// - 型定義 =============================================================================================================
import { Blog, BlogResponseData } from "../../../types/Profile/Blog/Blog";
import { Category } from "../../../types/Category";

// - 子コンポーネント =====================================================================================================
import { Breadcrumb, BreadcrumbLink } from "../../../components/atoms/Breadcrumb/Breadcrumb";
import {CategoryBadge} from "../../../components/atoms/CategoryBadge/CategoryBadge";

type Props = {
  blog: Blog
}

const formattedPublishedDate = (targetDate: string): string => {

  const publishedDate: Date = new Date(targetDate);

  return `${ publishedDate.getFullYear()}年` +
          `${ publishedDate.getMonth() + 1}月` +
          `${ publishedDate.getDate()}日`;
}

const BlogDetails: VFC<Props> = (props) => {

  const { blog } = props;

  const breadcrumbLinks: BreadcrumbLink[] = [
    {
      path: Routing.Top.path,
      label: Routing.Top.pageName
    },
    {
      path: Routing.Blog.List.path,
      label: Routing.Blog.List.pageName
    },
    {
      label: blog.title
    }
  ]

  return (
    <main className={styles.blogDetailsPage}>
      <Breadcrumb links={breadcrumbLinks}/>
      <div className={styles.mainSection}>

        {/* ブログ記事 ===============================================================================================　*/}
        <div className={styles.blogBlock}>

          <h1 className="heading1">{ blog.title }</h1>

          <div className={styles.publishedDate}>{ formattedPublishedDate(blog.publishedAt) }</div>

          <div className={styles.categoriesFlow}>
            {blog.categories.map((category: Category) => (
              <CategoryBadge category={category}/>
            ))}
          </div>
        </div>

        {/* サイドバー ===============================================================================================　*/}
        <div className={styles.sideBar}></div>
      </div>
    </main>
  );
};

export default BlogDetails;

export const getStaticPaths: GetStaticPaths = async () => {

  const blogData: BlogResponseData = await getBlogs({ limit: 100 });

  const paths = blogData.data.contents.map((content) => `/blog/${content.id}`)
  return { paths, fallback: false}
};

export const getStaticProps: GetStaticProps = async (context) => {

  const id: string = context.params.id.toString();

  const responseData: Blog = await getBlogData({ id })

  return {
    props: {
      blog: responseData
    }
  }
}

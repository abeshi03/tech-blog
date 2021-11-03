// - フレームワーク, ライブラリー ===========================================================================================
import React, { VFC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";

// - アセット ===========================================================================================================
import styles from "./blogDetailsPage.module.scss";

// - ルーティング ========================================================================================================
import { Routing } from "../../../routing/routing";

// - api ===============================================================================================================
import { getBlogData, getBlogs } from "../../../apis/BlogAPI";

// - 型定義 =============================================================================================================
import { Blog, BlogResponseData } from "../../../types/Profile/Blog/Blog";

// - 子コンポーネント =====================================================================================================
import { Breadcrumb, BreadcrumbLink } from "../../../components/atoms/Breadcrumb/Breadcrumb";

type Props = {
  blog: Blog
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
    <div className={styles.blogDetailsPage}>
      <Breadcrumb links={breadcrumbLinks}/>
    </div>
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

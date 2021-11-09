// - フレームワーク, ライブラリー ===========================================================================================
import React, { VFC } from "react";

// - アセット ============================================================================================================
import styles from "./blogsListPage.module.scss";

// - 子コンポーネント =====================================================================================================
import { Breadcrumb, BreadcrumbLink } from "../../../components/atoms/Breadcrumb/Breadcrumb";

// - ルーティング ========================================================================================================
import { pagesPath } from "../../../lib/$path";
import { Routing } from "../../../routing/routing";
import {DisplaySwitchingButton} from "../../../components/atoms/DisplaySwitchingButton/DisplaySwitchingButton";
import {CategoriesBadgeFlow} from "../../../components/molecules/CategoriesBadgeFlow/CategoriesBadgeFlow";
import {GetStaticPaths, GetStaticProps} from "next";
import {getCategories} from "../../../apis/CategoryAPI";
import {Category, CategoryResponseData} from "../../../types/Category";
import {BlogResponseData} from "../../../types/Blog/Blog";
import {getBlogData, getBlogs} from "../../../apis/BlogAPI";


type Props = {
  blogs: BlogResponseData;
}

const PER_PAGE = 5;

const BlogsListPage: VFC<Props> = (props) => {

  const { blogs } = props;

  console.log(blogs)

  const breadcrumbLinks: BreadcrumbLink[] = [
    {
      path: pagesPath.$url().pathname,
      label: Routing.Top.pageName
    },
    {
      label: Routing.Blog.List.pageName
    }
  ];

  return (
    <div className={styles.blogsListPage}>
      <Breadcrumb links={breadcrumbLinks}/>
      <div className={styles.mainSection}>
        <h1 className="heading1 heading1__underline">記事一覧</h1>
      </div>
    </div>
  );
};

export default BlogsListPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const blogData = await getBlogs({});
  const pageNumbers: number[] = [];

  const range = (start: number, end: number): number[] =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  const paths: string[] = range(1, Math.ceil(blogData.data.totalCount / PER_PAGE)).map((repo) =>  `/blog/page/${repo}`)

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id: number = Number(context.params.id);

  const offset: number = (id - 1) * 5;

  const blogsData: BlogResponseData = await getBlogs({ limit: 5, offset })

  return {
    props: {
      blogs: blogsData
    }
  }
}

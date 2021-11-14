// - フレームワーク, ライブラリー ===========================================================================================
import React, { VFC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

// - アセット ============================================================================================================
import styles from "./blogsCategoryListPage.module.scss";

// - API ===============================================================================================================
import { getCategories } from "../../../../../apis/CategoryAPI";
import { getBlogs, getBlogsContainCategory } from "../../../../../apis/BlogAPI";

// - 子コンポーネント =====================================================================================================
import { BreadcrumbLink } from "../../../../../components/atoms/Breadcrumb/Breadcrumb";

// - 型定義 =============================================================================================================
import { BlogResponseData } from "../../../../../types/Blog/Blog";
import { Category, CategoryResponseData } from "../../../../../types/Category";

// - ルーティング ========================================================================================================
import { Routing } from "../../../../../routing/routing";
import { pagesPath } from "../../../../../lib/$path";

// - 定数 ===============================================================================================================
import { BLOG_PER_PAGE } from "../../../../../constants/BlogPageSettings";


type Props = {
  blogs: BlogResponseData;
  categories: CategoryResponseData;
}


const BlogsCategoryListPage: VFC<Props> = (props) => {

  const { blogs, categories } = props;

  const breadcrumbLinks: BreadcrumbLink[] = [
    {
      path: pagesPath.$url().pathname,
      label: Routing.Top.pageName
    },
    {
      label: "#"
    }
  ];

  console.log(blogs)

  return (
    <div>テスト</div>
  );
}

export default BlogsCategoryListPage;


export const getStaticPaths: GetStaticPaths = async () => {
  const blogData = await getBlogs({});
  const categoryData = await getCategories();

  const pageRangeNumber = (start: number, end: number): number[] =>
    [...Array(end - start + 1)].map((_, index: number) => start + index);

  const paths: string[] = []

  categoryData.contents.map((category: Category) => {
    return pageRangeNumber(1, Math.ceil(blogData.data.totalCount / BLOG_PER_PAGE)).map((pageID: number) =>
      paths.push(`/blog/category/${category.id}/page/${pageID}`));
  })

  return { paths, fallback: false }
};


export const getStaticProps: GetStaticProps = async (context) => {

  const pageID: number = Number(context.params.pageID);
  const categoryID: string = context.params.categoryId as string;
  const offset: number = (pageID - 1) * BLOG_PER_PAGE;

  const [ blogsData, categories]: [ BlogResponseData, CategoryResponseData ] =
    await Promise.all([
      getBlogsContainCategory({ limit: BLOG_PER_PAGE, offset, categoryID }),
      getCategories()
    ])

  return {
    props: {
      blogs: blogsData,
      categories
    }
  }
}


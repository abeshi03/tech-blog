// - フレームワーク, ライブラリー ===========================================================================================
import React, { VFC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

// - メタデータ ==========================================================================================================
import { MetaData } from "../../../components/MetaData";

// - API ===============================================================================================================
import { getCategories } from "../../../apis/CategoryAPI";
import { getBlogs } from "../../../apis/BlogAPI";

// - 子コンポーネント =====================================================================================================
import { BlogsListTemplate } from "../../../components/template/BlogListTemplate/BlogsListTemplate";

// - ルーティング ========================================================================================================
import { pagesPath } from "../../../lib/$path";
import { Routing } from "../../../routing/routing";

// - 定数 ===============================================================================================================
import { BLOG_PER_PAGE } from "../../../constants/BlogPageSettings";

// - 型定義 =============================================================================================================
import { BreadcrumbLink } from "../../../components/atoms/Breadcrumb/Breadcrumb";
import { CategoryResponseData } from "../../../types/Category";
import { BlogResponseData } from "../../../types/Blog/Blog";


type Props = {
  blogs: BlogResponseData;
  categories: CategoryResponseData;
}


const BlogsListPage: VFC<Props> = (props) => {

  const { blogs, categories } = props;

  const router = useRouter();

  const currentPageNumber: number = parseInt(router.query.id as string, 10);

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
    <>
      <MetaData
        title={Routing.Blog.List.pageName}
        url={pagesPath.blog.page._id(1).$url()}
        type="article"
        twitterCardType="summary_large_image"
        description="ブログ記事一覧ページです。"
      />
      <BlogsListTemplate
        breadcrumbLinks={breadcrumbLinks}
        categories={categories}
        blogs={blogs}
        perPage={BLOG_PER_PAGE}
        currentPageNumber={currentPageNumber}
        heading={"記事一覧"}
      />
    </>
  );
};

export default BlogsListPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const blogData = await getBlogs({});

  const pageRangeNumber = (start: number, end: number): number[] =>
    [...Array(end - start + 1)].map((_, index: number) => start + index);

  const paths: string[] =
    pageRangeNumber(1, Math.ceil(blogData.data.totalCount / BLOG_PER_PAGE)).map((pageID: number) => `/blog/page/${pageID}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id: number = Number(context.params.id);
  const offset: number = (id - 1) * BLOG_PER_PAGE;

  const [ blogsData, categories ]: [ BlogResponseData, CategoryResponseData ] =
    await Promise.all([
      getBlogs({ limit: BLOG_PER_PAGE, offset }),
      getCategories()
    ]);

  return {
    props: {
      blogs: blogsData,
      categories
    }
  };
};

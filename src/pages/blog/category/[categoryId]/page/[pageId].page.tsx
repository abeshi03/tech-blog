// - フレームワーク, ライブラリー ===========================================================================================
import React, { VFC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";


// - API ===============================================================================================================
import { getCategories } from "../../../../../apis/CategoryAPI";
import { getBlogs, getBlogsContainCategory } from "../../../../../apis/BlogAPI";

// - 子コンポーネント =====================================================================================================
import { BlogsListTemplate } from "../../../../../components/template/BlogListTemplate/BlogsListTemplate";

// - 型定義 =============================================================================================================
import { BlogResponseData } from "../../../../../types/Blog/Blog";
import { Category, CategoryResponseData } from "../../../../../types/Category";
import { BreadcrumbLink } from "../../../../../components/atoms/Breadcrumb/Breadcrumb";

// - ルーティング ========================================================================================================
import { Routing } from "../../../../../routing/routing";
import { pagesPath } from "../../../../../lib/$path";

// - 定数 ===============================================================================================================
import { BLOG_PER_PAGE } from "../../../../../constants/BlogPageSettings";

// - 補助 ===============================================================================================================
import isNotUndefined from "../../../../../utility/typeGuards/nullables/isNotUndefined";


type Props = {
  blogs: BlogResponseData;
  categories: CategoryResponseData;
}


const BlogsCategoryListPage: VFC<Props> = (props) => {

  const { blogs, categories } = props;

  const router = useRouter();

  const currentPageNumber: number = parseInt(router.query.id as string, 10);

  // - 見出し ===========================================================================================================
  const currentPageCategoryID: string = router.query.categoryId as string;
  const currentPageCategory: Category | undefined = categories.contents.find((category: Category): boolean => {
    return category.id === currentPageCategoryID;
  });
  const currentPageCategoryName: string = currentPageCategory?.name

  const heading: string = isNotUndefined(currentPageCategoryName) ? `"${currentPageCategoryName}"の記事` : "記事一覧";

  // - パンクズ ==========================================================================================================
  const breadcrumbLinks: BreadcrumbLink[] = [
    {
      path: pagesPath.$url().pathname,
      label: Routing.Top.pageName
    },
    {
      label: `${currentPageCategoryName} - ${Routing.Blog.List.pageName}`
    }
  ];


  return (
    <BlogsListTemplate
      breadcrumbLinks={breadcrumbLinks}
      categories={categories}
      blogs={blogs}
      perPage={BLOG_PER_PAGE}
      currentPageNumber={currentPageNumber}
      heading={heading}
      isFilteringReset
    />
  );
};

export default BlogsCategoryListPage;


export const getStaticPaths: GetStaticPaths = async () => {
  const blogData = await getBlogs({});
  const categoryData = await getCategories();

  const pageRangeNumber = (start: number, end: number): number[] =>
    [...Array(end - start + 1)].map((_, index: number) => start + index);

  const paths: string[] = [];

  categoryData.contents.map((category: Category) => {
    return pageRangeNumber(1, Math.ceil(blogData.data.totalCount / BLOG_PER_PAGE)).map((pageID: number) =>
      paths.push(`/blog/category/${category.id}/page/${pageID}`));
  });

  return { paths, fallback: false };
};


export const getStaticProps: GetStaticProps = async (context) => {

  const pageID: number = Number(context.params.pageID);
  const categoryID: string = context.params.categoryId as string;
  const offset: number = (pageID - 1) * BLOG_PER_PAGE;

  const [ blogsData, categories]: [ BlogResponseData, CategoryResponseData ] =
    await Promise.all([
      getBlogsContainCategory({ limit: BLOG_PER_PAGE, offset, categoryID }),
      getCategories()
    ]);

  return {
    props: {
      blogs: blogsData,
      categories
    }
  };
};


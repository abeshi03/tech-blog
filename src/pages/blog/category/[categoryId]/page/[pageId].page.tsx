// - フレームワーク, ライブラリー ===========================================================================================
import React, { VFC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

// - アセット ============================================================================================================
import styles from "../../../page/blogsListPage.module.scss";

// - API ===============================================================================================================
import { getCategories } from "../../../../../apis/CategoryAPI";
import { getBlogs, getBlogsContainCategory } from "../../../../../apis/BlogAPI";

// - 子コンポーネント =====================================================================================================
import { Breadcrumb, BreadcrumbLink } from "../../../../../components/atoms/Breadcrumb/Breadcrumb";
import { DisplaySwitchingButton } from "../../../../../components/atoms/DisplaySwitchingButton/DisplaySwitchingButton";
import { CategoriesBadgeFlow } from "../../../../../components/molecules/CategoriesBadgeFlow/CategoriesBadgeFlow";
import { PaginatedItemsRangeDisplaying } from "../../../../../components/molecules/PaginatedItemsRangeDisplaying/PaginatedItemsRangeDisplaying";
import { BlogCard } from "../../../../../components/organisms/Cards/BlogCard/BlogCard";
import { Pagination } from "../../../../../components/atoms/Pagination/Pagination";

// - 型定義 =============================================================================================================
import { Blog, BlogResponseData } from "../../../../../types/Blog/Blog";
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

  const router = useRouter();

  const currentPageNumber: number = parseInt(router.query.id as string, 10);

  // - 見出し ===========================================================================================================
  const currentPageCategoryID: string = router.query.categoryId as string;
  const currentPageCategory: Category[] = categories.contents.filter((category: Category): boolean => {
    return category.id === currentPageCategoryID
  });
  const currentPageCategoryName: string = currentPageCategory[0].name;

  const heading: string = `"${currentPageCategoryName}"の記事`

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

    <div className={styles.blogsListPage}>
      <Breadcrumb links={breadcrumbLinks}/>

      <div className={styles.mainSection}>

        <h1 className={`${styles.heading} ${"heading1"} ${"heading1__underline"}`}>{ heading }</h1>

        <DisplaySwitchingButton
          label="カテゴリー"
          style={{display: "flex", flexDirection: "column", alignItems: "flex-end", marginTop: "20px"}}
        >
          <CategoriesBadgeFlow
            categories={categories.contents}
            style={{ marginTop: "20px"}}
          />
        </DisplaySwitchingButton>

        <PaginatedItemsRangeDisplaying
          totalCount={blogs.data.totalCount}
          perPageNumber={BLOG_PER_PAGE}
          currentPageNumber={currentPageNumber}
          style={{marginTop: "20px"}}
        />

        <div className={styles.blogCardsFlow}>
          {blogs.data.contents.map((blog: Blog) => (
            <BlogCard targetBlog={blog} key={blog.id}/>
          ))}
        </div>

        <div className={styles.pagination}>
          <Pagination
            totalCount={blogs.data.totalCount}
            perPageNumber={BLOG_PER_PAGE}
            currentPageNumber={currentPageNumber}
          />
        </div>

      </div>
    </div>
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


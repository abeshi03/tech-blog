// - フレームワーク, ライブラリー ===========================================================================================
import React, { VFC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

// - アセット ============================================================================================================
import styles from "./blogsListPage.module.scss";

// - API =============================================================================================================
import { getCategories } from "../../../apis/CategoryAPI";
import { getBlogs } from "../../../apis/BlogAPI";

// - 子コンポーネント =====================================================================================================
import { Breadcrumb, BreadcrumbLink } from "../../../components/atoms/Breadcrumb/Breadcrumb";
import { DisplaySwitchingButton } from "../../../components/atoms/DisplaySwitchingButton/DisplaySwitchingButton";
import { CategoriesBadgeFlow } from "../../../components/molecules/CategoriesBadgeFlow/CategoriesBadgeFlow";
import { Pagination } from "../../../components/atoms/Pagination/Pagination";
import { BlogCard } from "../../../components/organisms/Cards/BlogCard/BlogCard";

// - ルーティング ========================================================================================================
import { pagesPath } from "../../../lib/$path";
import { Routing } from "../../../routing/routing";

// - 型定義 =============================================================================================================
import { CategoryResponseData } from "../../../types/Category";
import { Blog, BlogResponseData } from "../../../types/Blog/Blog";


type Props = {
  blogs: BlogResponseData;
  categories: CategoryResponseData;
}

const PER_PAGE = 1;

const BlogsListPage: VFC<Props> = (props) => {

  const { blogs, categories } = props;

  const router = useRouter()

  const currentPageNumber: number = Number(Object.values(router.query));

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
        <h1 className={`${styles.heading} ${"heading1"} ${"heading1__underline"}`}>記事一覧</h1>

        <DisplaySwitchingButton
          label="カテゴリー"
          style={{display: "flex", flexDirection: "column", alignItems: "flex-end", marginTop: "20px"}}
        >
          <CategoriesBadgeFlow
            categories={categories.contents}
            style={{ marginTop: "20px"}}
          />
        </DisplaySwitchingButton>

        <div className={styles.blogCardsFlow}>
          {blogs.data.contents.map((blog: Blog) => (
            <BlogCard targetBlog={blog} key={blog.id}/>
          ))}
        </div>
        <Pagination
          totalCount={blogs.data.totalCount}
          perPageNumber={PER_PAGE}
          currentPageNumber={currentPageNumber}
        />

      </div>
    </div>
  );
};

export default BlogsListPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const blogData = await getBlogs({});
  const pageNumbers: number[] = [];

  const pageRangeNumber = (start: number, end: number): number[] =>
    [...Array(end - start + 1)].map((_, index: number) => start + index);

  const paths: string[] = pageRangeNumber(1, Math.ceil(blogData.data.totalCount / PER_PAGE)).map((pageID: number) =>  `/blog/page/${pageID}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id: number = Number(context.params.id);
  const offset: number = (id - 1) * PER_PAGE;

  const [ blogsData, categories ]: [ BlogResponseData, CategoryResponseData ] =
    await Promise.all([
      getBlogs({ limit: PER_PAGE, offset }),
      getCategories()
    ]);

  return {
    props: {
      blogs: blogsData,
      categories
    }
  };
};

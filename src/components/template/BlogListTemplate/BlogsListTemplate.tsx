// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";

// - アセット ============================================================================================================
import styles from "./blogsListTemplate.module.scss";

// - 子コンポーネント =====================================================================================================
import { Breadcrumb, BreadcrumbLink } from "../../atoms/Breadcrumb/Breadcrumb";
import { DisplaySwitchingButton } from "../../atoms/DisplaySwitchingButton/DisplaySwitchingButton";
import { CategoriesBadgeFlow } from "../../molecules/CategoriesBadgeFlow/CategoriesBadgeFlow";
import { PaginatedItemsRangeDisplaying } from "../../molecules/PaginatedItemsRangeDisplaying/PaginatedItemsRangeDisplaying";
import { BlogCard } from "../../organisms/Cards/BlogCard/BlogCard";
import { Pagination } from "../../atoms/Pagination/Pagination";

// - 型定義 =============================================================================================================
import { CategoryResponseData } from "../../../types/Category";
import { Blog, BlogResponseData } from "../../../types/Blog/Blog";


type Props = {
  breadcrumbLinks: BreadcrumbLink[];
  categories: CategoryResponseData;
  perPage: number;
  blogs: BlogResponseData;
  currentPageNumber: number;
  heading: string;
}

/* eslint-disable-next-line react/display-name */
export const BlogsListTemplate: VFC<Props> = memo((props) => {

  const { breadcrumbLinks, categories, perPage, blogs, currentPageNumber, heading } = props;

  return (
    <div className={styles.blogsListTemplate}>
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
          perPageNumber={perPage}
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
            perPageNumber={perPage}
            currentPageNumber={currentPageNumber}
          />
        </div>

      </div>
    </div>
  );
});

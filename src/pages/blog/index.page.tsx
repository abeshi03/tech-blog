// - フレームワーク, ライブラリー ===========================================================================================
import React, { VFC } from "react";

// - アセット ============================================================================================================
import styles from "./blogsListPage.module.scss";

// - 子コンポーネント =====================================================================================================
import {Breadcrumb, BreadcrumbLink} from "../../components/atoms/Breadcrumb/Breadcrumb";

// - ルーティング ========================================================================================================
import { pagesPath } from "../../lib/$path";
import { Routing } from "../../routing/routing";

const BlogsListPage: VFC = (props) => {

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
    </div>
  );
};

export default BlogsListPage;

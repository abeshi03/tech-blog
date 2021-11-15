// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";
import Link from "next/link";

// - アセット ============================================================================================================
import styles from "./categoryBadge.module.scss";

// - 型定義 =============================================================================================================
import { Category } from "../../../types/Category";

// - ルーティング ========================================================================================================
import { pagesPath } from "../../../lib/$path";

type Props = {
  category: Pick<Category, "id" | "name">;
  notOnClick?: boolean;
}

/* eslint-disable-next-line react/display-name */
export const CategoryBadge: VFC<Props> = memo((props) => {

  const { category, notOnClick = false } = props;

  return (
    <>
      {notOnClick ? (
        <span className={styles.categoryBadge} >{ category.name }</span>
      ) : (
        <Link
          href={pagesPath.blog.category._categoryId(category.id).page._pageId(1).$url()}
        >
          <a className={`${styles.categoryBadge} ${styles.categoryBadge__linkStyle}`} >{ category.name }</a>
        </Link>
      )}
    </>
  );
});

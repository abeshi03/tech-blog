// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";

// - アセット ============================================================================================================
import styles from "./categoryBadge.module.scss";

// - 型定義 =============================================================================================================
import { Category } from "../../../types/Category";

type Props = {
  category: Pick<Category, "id" | "name">;
}

/* eslint-disable-next-line react/display-name */
export const CategoryBadge: VFC<Props> = memo((props) => {

  const { category } = props;

  return (
    <div className={styles.categoryBadge} >{ category.name }</div>
  );
});

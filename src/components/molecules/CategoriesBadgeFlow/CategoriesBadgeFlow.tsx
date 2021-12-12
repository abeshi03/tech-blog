// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";

// - アセット ============================================================================================================
import styles from "./categoriesBadgeFlow.module.scss";

// - ルーティング =========================================================================================================
import { Routing } from "../../../routing/routing";

// - 型定義 =============================================================================================================
import { Category } from "../../../types/Category";
import { CategoryBadge } from "../../atoms/CategoryBadge/CategoryBadge";

type Props = {
  categories: Category[];
  style?: React.CSSProperties;
  onClickFunction?: () => void;
}

/* eslint-disable-next-line react/display-name */
export const CategoriesBadgeFlow: VFC<Props> = memo((props) => {

  const { categories, style, onClickFunction } = props;

  return (
    <div className={styles.categoriesBadgeFlow} style={style}>
      {categories.map((category: Category) => (
        <CategoryBadge
          category={category}
          key={category.id}
          onClickFunction={onClickFunction}
        />
      ))}
    </div>
  );
});

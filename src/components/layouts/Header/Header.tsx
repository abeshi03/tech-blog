// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";

// - アセット ============================================================================================================
import styles from "./header.module.scss";
// - ルーティング =========================================================================================================

/* eslint-disable-next-line react/display-name */
export const Header: VFC = memo(() => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.right}>
          <div className={styles.logo}>abeshi blog</div>
        </div>
        <div className={styles.left}>
          <div
            className={styles.categoryButton}
            role="button"
          >カテゴリーで検索</div>
        </div>
      </div>
    </header>
  );
});

// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";
import Link from "next/link";

// - アセット ============================================================================================================
import styles from "./header.module.scss";

// - ルーティング =========================================================================================================
import { pagesPath } from "../../../lib/$path";

/* eslint-disable-next-line react/display-name */
export const Header: VFC = memo(() => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.right}>
          <Link href={pagesPath.$url()}>
            <a className={styles.logo}>abeshi blog</a>
          </Link>
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

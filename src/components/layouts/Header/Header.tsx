// - フレームワーク =======================================================================================================
import React, {memo, VFC} from "react";
// - アセット ============================================================================================================
import styles from "./header.module.scss";
// - ルーティング =========================================================================================================

/* eslint-disable-next-line react/display-name */
export const Header: VFC = memo(() => {
  return (
    <header className={styles.header}>
      <p>ヘッダー実装待機</p>
    </header>
  );
});
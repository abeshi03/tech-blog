// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";
import styles from "./tableOfContents.module.scss";

// - アセット ===========================================================================================================

/* eslint-disable-next-line react/display-name */
export const TableOfContents: VFC = memo((props) => {

  // const {$END$} = props;

  return (
    <div className={styles.tableOfContents}>
      <p style={{padding: "20px"}}>目次(実装待機)</p>
    </div>
  );
});

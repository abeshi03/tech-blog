// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";
import styles from "./tableOfContents.module.scss";
import { TableOfContentType } from "../../../../../types/Blog/TableOfContentType";

// - アセット ===========================================================================================================

type Props = {
  tableOfContents: TableOfContentType[];
}

/* eslint-disable-next-line react/display-name */
export const TableOfContents: VFC<Props> = memo((props) => {

  const { tableOfContents } = props;

  return (
    <div className={styles.tableOfContents}>
      <p style={{padding: "20px"}}>目次(実装待機)</p>
    </div>
  );
});

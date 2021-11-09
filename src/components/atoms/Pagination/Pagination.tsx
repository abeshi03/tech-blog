// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";
import Link from "next/link";

// - アセット ============================================================================================================
import styles from "./pagination.module.scss";

// - ルーディング ========================================================================================================
import { pagesPath } from "../../../lib/$path";

type Props = {
  totalCount: number;
  perPageNumber: number;
}

/* eslint-disable-next-line react/display-name */
export const Pagination: VFC<Props> = memo((props) => {

  const { totalCount, perPageNumber } = props;

  const range = (start: number, end: number): number[] =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <>
      {totalCount > perPageNumber &&

        <ul className={styles.pagination}>
          {range(1, Math.ceil(totalCount / perPageNumber)).map((pageID: number, index: number) => (
            <li key={index}>
              <Link href={pagesPath.blog.page._id(pageID).$url()}>
                <a>{pageID}</a>
              </Link>
            </li>
          ))}
        </ul>
      }
    </>
  );
});

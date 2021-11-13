// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";
import Link from "next/link";

// - アセット ============================================================================================================
import styles from "./pagination.module.scss";

// - ルーディング ========================================================================================================
import { pagesPath } from "../../../lib/$path";

type Props = {
  totalCount: number;
  currentPageNumber: number;
  perPageNumber: number;
  style?: React.CSSProperties;
}

/* eslint-disable-next-line react/display-name */
export const Pagination: VFC<Props> = memo((props) => {

  const { totalCount, perPageNumber, currentPageNumber, style } = props;

  const NUMBERED_BUTTONS_COUNT__MUST_BE_ODD: number = 2;

  const mustDisplayGoToFirstPageButton = (): boolean => {
    return currentPageNumber - (0.5 * (NUMBERED_BUTTONS_COUNT__MUST_BE_ODD - 1)) > 1;
  };

  const mustDisplayGoToLastPageButton = (): boolean => {
    return currentPageNumber < totalPageCount - (0.5 * (NUMBERED_BUTTONS_COUNT__MUST_BE_ODD - 1));
  };

  const totalPageCount = Math.ceil(totalCount / perPageNumber);

  return (
    <>
      { totalPageCount > 1 &&
        <nav className={styles.pagination} style={style}>

          { mustDisplayGoToFirstPageButton() &&
            <Link href={pagesPath.blog.page._id(1).$url()}>
              <a role="button"
                 className={styles.toFirstPageButton}
              >{ "<< 最初" }</a>
            </Link>
          }

          { currentPageNumber > 1 &&
            <Link href={pagesPath.blog.page._id(currentPageNumber - 1).$url()}>
              <a role="button"
                 className={styles.toPreviousPageButton}
              >{ "< 前" }</a>
            </Link>
          }

          { currentPageNumber > 2 &&
            <Link href={pagesPath.blog.page._id(currentPageNumber - 2).$url()}>
              <a
                role="button"
                className={styles.PageNumberButton}
              >{ currentPageNumber - 2 }</a>
            </Link>
          }

          { currentPageNumber > 1 &&
            <Link href={pagesPath.blog.page._id(currentPageNumber - 1).$url()}>
              <a
                role="button"
                className={styles.PageNumberButton}
              >{ currentPageNumber - 1 }</a>
            </Link>
          }

          <span className={styles.currentPageNumber}>{ currentPageNumber }</span>

          { currentPageNumber + 1 <= totalPageCount &&
            <Link href={pagesPath.blog.page._id(currentPageNumber + 1).$url()}>
              <a
                role="button"
                className={styles.PageNumberButton}
              >{ currentPageNumber + 1 }</a>
            </Link>
          }

          { currentPageNumber + 2 <= totalPageCount &&
            <Link href={pagesPath.blog.page._id(currentPageNumber + 2).$url()}>
              <a
                role="button"
                className={styles.PageNumberButton}
              >{ currentPageNumber + 2 }</a>
            </Link>
          }

          { currentPageNumber !== totalPageCount &&
            <Link href={pagesPath.blog.page._id(currentPageNumber + 1).$url()}>
              <a
                role="button"
                className={styles.toNextPageButton}
              >{ "> 次" }</a>
            </Link>
          }

          { mustDisplayGoToLastPageButton() &&
            <Link href={pagesPath.blog.page._id(totalPageCount).$url()}>
              <a
                role="button"
                className={styles.toLastPageButton}
              >{ ">> 最後" }</a>
            </Link>
          }

        </nav>
      }
    </>
  );
});



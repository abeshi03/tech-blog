// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";

// - アセット ============================================================================================================
import styles from "./paginatedItemsRangeDisplaying.module.scss";

type Props = {
  currentPageNumber: number;
  totalCount: number;
  perPageNumber;
  style?: React.CSSProperties;
}


const getPaginatedItemsRangeDisplaying = (
  currentPageNumber: number,
  perPageNumber: number,
  totalCount: number
): string => {

  const rangeForNoPaginationPage: string = `${totalCount}件中 ${totalCount}件を表示`;

  // - ページネーションがない場合 ===========================================================================================
  if (totalCount < perPageNumber) return rangeForNoPaginationPage;

  const displayFirstRangeNumber: number = (perPageNumber * currentPageNumber) - (perPageNumber -1);
  const displayLastRangeNumber: number = perPageNumber * currentPageNumber;

  const rangeForLastPaginationPage: string = `${totalCount}件中 ${displayFirstRangeNumber} ~ ${totalCount}を表示`;

  // - ページネーションがあり最後のページの場合 ===============================================================================
  if (totalCount < perPageNumber * currentPageNumber) {
    return rangeForLastPaginationPage;
  }

  // - 通常の表示 ========================================================================================================
  return `${totalCount}件中 ${displayFirstRangeNumber} ~ ${displayLastRangeNumber}を表示`;

};

/* eslint-disable-next-line react/display-name */
export const PaginatedItemsRangeDisplaying: VFC<Props> = memo((props) => {

  const { currentPageNumber, totalCount, perPageNumber, style } = props;

  return (
    <div className={styles.paginatedItemsRangeDisplaying} style={style}>
      { getPaginatedItemsRangeDisplaying(currentPageNumber, perPageNumber, totalCount) }
    </div>
  );
});

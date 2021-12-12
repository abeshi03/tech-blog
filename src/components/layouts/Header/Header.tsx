// - フレームワーク =======================================================================================================
import React, {memo, useEffect, useState, VFC} from "react";
import Link from "next/link";

// - アセット ============================================================================================================
import styles from "./header.module.scss";

// - ルーティング =========================================================================================================
import { pagesPath } from "../../../lib/$path";

// - 子コンポーネント =====================================================================================================
import { Modal } from "../../organisms/Modal/Modal";
import { CategoriesBadgeFlow } from "../../molecules/CategoriesBadgeFlow/CategoriesBadgeFlow";
import { AlertBox } from "../../atoms/AlertBox/AlertBox";

// - 型定義 =============================================================================================================
import { Category } from "../../../types/Category";

// - API ===============================================================================================================
import { getCategories } from "../../../apis/CategoryAPI";


/* eslint-disable-next-line react/display-name */
export const Header: VFC = memo(() => {

  const [ modalIsOpen, setModalIsOpen ] = useState(false);
  const [ categories, setCategories ] = useState<Category[]>([]);
  const [ getCategoriesError, setGetCategoriesError ] = useState(false);

  const onClickModalOpen = () => {
    setModalIsOpen(true);
  };

  const onClickCloseModal = (): void => {
    setModalIsOpen(false);
  };

  const getBlogCategories = async (): Promise<void> => {
    try {

      const responseData = await getCategories();
      setCategories(responseData.contents);

    } catch (error: unknown) {

      setGetCategoriesError(true);
      console.log("error: headerのgetCategoriesでエラー発生");
    }
  };

  useEffect(() => {
    getBlogCategories();
  }, []);

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
            onClick={onClickModalOpen}
          >カテゴリーで検索</div>
        </div>
      </div>

      <Modal isOpen={modalIsOpen} closeModalFunction={onClickCloseModal}>
        <div className={styles.headingAndCloseButton}>
          <h3 className="heading3">カテゴリーで絞り込み</h3>
          { getCategoriesError ? (
            <AlertBox
              title="カテゴリー取得中エラーが発生いたしました。"
              description="大変申し訳ございません。カテゴリー取得中エラーが発生いたしました。"
              alertType="ERROR"
              style={{ marginTop: "20px" }}
            />
          ) : (
            <CategoriesBadgeFlow
              categories={categories}
              style={{ marginTop: "20px"}}
              onClickFunction={onClickCloseModal}
            />
          )}
        </div>
      </Modal>

    </header>
  );
});

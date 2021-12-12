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

// - 型定義 =============================================================================================================
import { Category } from "../../../types/Category";

// - API ===============================================================================================================
import { getCategories } from "../../../apis/CategoryAPI";


/* eslint-disable-next-line react/display-name */
export const Header: VFC = memo(() => {

  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  const [ categories, setCategories ] = useState<Category[]>([]);

  const onClickModalOpen = () => {
    setModalIsOpen(true);
  }

  const onClickCloseModal = (): void => {
    setModalIsOpen(false);
  }

  const getBlogCategories = async (): Promise<void> => {
    try {

      const responseData = await getCategories();
      setCategories(responseData.contents);

    } catch (error: unknown) {

      console.log("エラーが発生しました")
    }
  }

  useEffect(() => {
    getBlogCategories();
  }, [])

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
          <CategoriesBadgeFlow
            categories={categories}
            style={{ marginTop: "20px"}}
          />
        </div>
      </Modal>

    </header>
  );
});

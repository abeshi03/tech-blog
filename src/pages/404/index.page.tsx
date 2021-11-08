// - フレームワーク =======================================================================================================
import Head from "next/head";

// - アセット ===========================================================================================================
import styles from "./404.module.scss";

// - ルーティング ========================================================================================================
import { pagesPath } from "../../lib/$path";

// - 子コンポーネント =====================================================================================================
import { AlertBox } from "../../components/atoms/AlertBox/AlertBox";
import { Button } from "../../components/atoms/Button/Button";

import {VFC} from "react";

const NotFound: VFC = () => {
  return (
    <>
      <Head>
        <title>ページが見つかりません</title>
      </Head>
      <div className={styles.notFountPage}>
        <h1 className={styles.heading}>404 Not Found</h1>
        <AlertBox
          title="お探しのページは見つかりませんでした"
          description="申し訳ございません。お探しのページは見つかりませんでした。一時的にアクセスできない状況にあるか、移動もしくは削除された
            可能性があります。"
          alertType="ERROR"
        />
        <Button
          color="WHITE"
          size="BIG"
          path={pagesPath.$url().pathname}
          style={{marginTop: "30px"}}
        >トップページへ戻る</Button>
      </div>
    </>
  );
};

export default NotFound;

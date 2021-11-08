// - フレームワーク, ライブラリー ===========================================================================================
import { VFC } from "react";
import Head from "next/head";

// - アセット ===========================================================================================================
import styles from "./500.module.scss";

// - ルーティング ========================================================================================================
import { pagesPath } from "../../lib/$path";

// - 子コンポーネント =====================================================================================================
import { AlertBox } from "../../components/atoms/AlertBox/AlertBox";
import { Button } from "../../components/atoms/Button/Button";

const InternalServerError: VFC = () => {
  return (
    <>
      <Head>
        <title>ページが表示できません</title>
      </Head>
      <div className={styles.internalServerErrorPage}>
        <h1 className={styles.heading}>500 Internal Server Error</h1>
        <AlertBox
          title="アクセスしようとしたページは表示できませんでした"
          description="申し訳ございません。お探しのページは表示できませんでした。メンテナンス中かサーバーでエラーが起きている可能性があります。
            再度URLをご確認ください。"
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

export default InternalServerError;

// - フレームワーク =======================================================================================================
import React, { VFC } from "react";
import Head from "next/head";

// - ルーティング ========================================================================================================
import { Routing } from "../routing/routing";

// - 子コンポーネント =====================================================================================================
import { Breadcrumb, BreadcrumbLink } from "../components/atoms/Breadcrumb/Breadcrumb";
import { Button } from "../components/atoms/Button/Button";

// 表示テスト後ほど削除 ====================================================================================================
const links: BreadcrumbLink[] = [
  {
    label: "ホーム",
    path: Routing.Top.path
  },
  {
    label: "記事一覧"
  },
];
// =====================================================================================================================

const Home: VFC = () => {
  return(
    <>
      <Head>
        <title>{Routing.Top.pageName}</title>
      </Head>
      <Breadcrumb
        links={links}
      />
      {/*表示テスト後ほどページから削除*/}
      <Button color={"SKY_BLUE"} path={"/"} size={"BIG"}>テストボタン</Button>
      <Button color={"WHITE"} path={"/"} size={"SMALL"}>テストボタン</Button>
    </>
  );
};

export default Home;

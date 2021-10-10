// - フレームワーク =======================================================================================================
import React, { VFC } from "react";
import { Breadcrumb, BreadcrumbLink } from "../components/atoms/Breadcrumb/Breadcrumb";
import { Button } from "../components/atoms/Button/Button";

// 表示テスト後ほど削除 ====================================================================================================
const links: BreadcrumbLink[] = [
  {
    label: "ホーム",
    path: "/"
  },
  {
    label: "記事一覧"
  },
]
// =====================================================================================================================

const Home: VFC = () => {
  return(
    <>
      <Breadcrumb
        // 表示テスト後ほどページから削除
        // @ts-ignore
        links={links}
      />
      <Button color={"SKY_BLUE"} path={"/"} size={"BIG"}>テストボタン</Button>
      <Button color={"WHITE"} path={"/"} size={"SMALL"}>テストボタン</Button>
    </>
  );
};

export default Home;

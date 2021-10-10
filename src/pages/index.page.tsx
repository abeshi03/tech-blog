// - フレームワーク =======================================================================================================
import React, { VFC } from "react";
import { Breadcrumb, BreadcrumbLink } from "../components/atoms/Breadcrumb/Breadcrumb";

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
    <Breadcrumb
      // 表示テスト後ほどページから削除
      // @ts-ignore
      links={links}
    />
  );
};

export default Home;

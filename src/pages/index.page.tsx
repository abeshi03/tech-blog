// - フレームワーク =======================================================================================================
import React, {useEffect, VFC} from "react";
import Head from "next/head";

import { ExternalLinks } from "../businessRules/application/externalLinks";

// - ルーティング ========================================================================================================
import Routing from "../routing/routing";

// - 子コンポーネント =====================================================================================================
import { Breadcrumb, BreadcrumbLink } from "../components/atoms/Breadcrumb/Breadcrumb";
import { Button } from "../components/atoms/Button/Button";
import { IconAndLink } from "../components/atoms/IconAndLink/IconAndLink";
import { ProfileCard } from "../components/organisms/Cards/ProfileCard";

// 表示テスト後ほど削除 ====================================================================================================
const links: BreadcrumbLink[] = [
  {
    label: "ホーム",
    path: Routing.Top.URI_Path
  },
  {
    label: "記事一覧"
  },
];
// =====================================================================================================================


const test = async (): Promise<void> => {
  const baseEndPoint = process.env.NEXT_PUBLIC_ENDPOINT;
  const response = await fetch(`${baseEndPoint}my_profile`, {
    headers: {
      "X-API-KEY": process.env.NEXT_PUBLIC_PROFILE_API_KEY
    }
  });
  console.log(response.json())
}


const Home: VFC = () => {
  useEffect(() => {
    test();
  },[])
  return(
    <>
      <Head>
        <title>{Routing.Top.pageName}</title>
      </Head>
      <Breadcrumb
        // 表示テスト後ほどページから削除
        // @ts-ignore
        links={links}
      />
      {/*表示テスト後ほどページから削除*/}
      <Button color={"SKY_BLUE"} path={"/"} size={"BIG"}>テストボタン</Button>
      <Button color={"WHITE"} path={"/"} size={"SMALL"}>テストボタン</Button>
      <IconAndLink iconType="GITHUB" label="github_id" externalLink={ExternalLinks.Github}/>
      <ProfileCard/>
    </>
  );
};

export default Home;

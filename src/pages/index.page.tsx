// - フレームワーク, ライブラリー ===========================================================================================
import React, { VFC } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import axios from "axios";

// - ビジネスルール =======================================================================================================
import { ExternalLinks } from "../config/application/externalLinks";

// - 型定義 =============================================================================================================
import { Profile } from "../types/profile/profile";

// - ルーティング ========================================================================================================
import { Routing } from "../routing/routing";

// - 子コンポーネント =====================================================================================================
import { Breadcrumb, BreadcrumbLink } from "../components/atoms/Breadcrumb/Breadcrumb";
import { Button } from "../components/atoms/Button/Button";
import { IconAndLink } from "../components/atoms/IconAndLink/IconAndLink";
import { ProfileCard } from "../components/organisms/Cards/ProfileCard";
import { AlertBox } from "../components/atoms/AlertBox/AlertBox";
import { Footer } from "../components/layouts/Footer/Footer";

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

type Props = {
  myProfile: Profile
}

const Home: VFC<Props> = ({ myProfile }) => {


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
      {/*表示テスト後ほどページから削除*/}
      <Button color={"WHITE"} path={"/"} size={"SMALL"}>テストボタン</Button>
      {/*表示テスト後ほどページから削除*/}
      <IconAndLink iconType="GITHUB" label="github_id" externalLink={ExternalLinks.Github}/>
      {/*表示テスト後ほどページから削除*/}
      <ProfileCard
        targetProfile={myProfile}
      />
      <AlertBox title="エラーテスト" description="エラーテスト" alertType="ERROR" />
      <AlertBox title="お知らせテスト" description="お知らせテスト" alertType="INFO" />
      <AlertBox title="警告テスト" description="警告テスト" alertType="WARNING" />
      <AlertBox title="成功テスト" description="成功テスト" alertType="SUCCESS" />
      <Footer/>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {

  try {

    const baseEndPoint: string = process.env.NEXT_PUBLIC_ENDPOINT;

    const response = await axios.get<Profile>(`${baseEndPoint}my_profile`,{
      headers: { "X-API-KEY": process.env.NEXT_PUBLIC_PROFILE_API_KEY }
    }).then(res => res.data);

    return {
      props: {
        myProfile: response
      }
    };

  } catch (error: unknown) {

    throw new Error("getStaticProps_error: myProfile");
  }
};

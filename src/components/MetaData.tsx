// - フレームワーク =======================================================================================================
import React, {memo, VFC} from "react";
import Head from "next/head";

// - 型定義 =============================================================================================================
import { UrlObject, format } from "url";

// - 画像 ===============================================================================================================
import defaultImages from "../assets/images/abeshi-blog.png";

type OgType = "website" | "article"

type TwitterCardType = "summary" | "summary_large_image"

type Props = {
  title: string;
  description?: string;
  noDefaultDescription?: boolean;
  ogpImageURI?: string;
  url: string | UrlObject;
  type: OgType;
  twitterCardType: TwitterCardType
}

/* eslint-disable-next-line react/display-name */
export const MetaData: VFC<Props> = memo((props) => {
  const { title, description, ogpImageURI, url, type, twitterCardType, noDefaultDescription = false } = props;

  const DEFAULT_TITLE = " | abeshi blog";
  const DEFAULT_DESCRIPTION = "abeshi blogは、エンジニアの技術発信ブログサービスです。現役フロントエンドエンジニア目線からの最新技術の" +
    "発信や、　情報を幅広く学ぶことができます。";

  const metaTitle = `${title}${DEFAULT_TITLE}`;
  const formattedDescription = description ? `${description}${DEFAULT_DESCRIPTION}` : DEFAULT_DESCRIPTION;

  const isDisplayMetaDescription = noDefaultDescription ? description : formattedDescription;

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={isDisplayMetaDescription} />
      {/*TODO ページのデフォルトURLが決まったら追記*/}
      <meta property="og:url" content={format(url)} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:type" content={type} />
      <meta property="og:description" content={isDisplayMetaDescription} />
      <meta property="og:image" content={ogpImageURI ?? defaultImages.src} />
      <meta property="og:site_name" content="abeshi blog" />

      {/* ツイッター ================================================================================================== */}
      <meta name="twitter:card" content={twitterCardType} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={isDisplayMetaDescription} />
      <meta name="twitter:image" content={ogpImageURI ?? defaultImages.src} />
    </Head>
  );
});

// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";

// - アセット ============================================================================================================
import styles from "./ disclaimer.module.scss";

// - ルーティング =========================================================================================================
import { Routing } from "../../routing/routing";
import { pagesPath } from "../../lib/$path";

// - 子コンポーネント =====================================================================================================
import { Breadcrumb, BreadcrumbLink } from "../../components/atoms/Breadcrumb/Breadcrumb";

// - メタデータ ==========================================================================================================
import { MetaData } from "../../components/MetaData";


const breadcrumbLinks: BreadcrumbLink[] = [
  {
    path: pagesPath.$url().pathname,
    label: Routing.Top.pageName
  },
  {
    label: Routing.Disclaimer.pageName
  }
];


/* eslint-disable-next-line react/display-name */
const Disclaimer: VFC = memo(() => {

  return (
    <>
      <MetaData
        title={Routing.Disclaimer.pageName}
        url={pagesPath.disclaimer.$url().pathname}
        type="article"
        twitterCardType="summary_large_image"
      />
      <Breadcrumb links={breadcrumbLinks}/>
      <main className={styles.disclaimerPage}>

        <h1 className="heading1">免責事項・利用規約</h1>

        <p>abeshi blog(以下「当サイト」とします。)における利用規約は下記の通りです。</p>

        <h2 className="heading2 heading2__underline">当サイトの情報の正確性について</h2>

        <p>
          当サイトのコンテンツや情報において、可能な限り正確な情報を掲載するよう努めています。
          しかし、誤情報が入り込んだり、情報が古くなったりすることもあります。必ずしも正確性を保証するものではありません。
          また合法性や安全性なども保証しません。
        </p>

        <h2 className="heading2 heading2__underline">当サイトで掲載している画像の著作権や肖像権等について</h2>

        <p>
          当サイトで掲載している画像の著作権や肖像権等は、各権利所有者に帰属します。
          万が一問題がある場合は、お問い合わせよりご連絡いただけますよう宜しくお願い致します。
        </p>

        <h2 className="heading2 heading2__underline">無断転載の禁止について</h2>

        <p>
          当サイトに存在する、文章や画像、動画等の著作物の情報を無断転載することを禁止します。引用の範囲を超えるものについては、法的処置を行います。
          転載する際には、お問い合わせよりご連絡いただけますよう宜しくお願い致します。
        </p>

        <h2 className="heading2 heading2__underline">損害等の責任について</h2>

        <p>当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますので、ご了承ください。</p>
        <p>また当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任も負いません。</p>
        <p>当サイトを利用する場合は、自己責任で行う必要があります。</p>

        <p>令和3年12月23日　策定</p>
        <p>令和3年12月23日　改定</p>

      </main>
    </>
  );
});


export default Disclaimer;

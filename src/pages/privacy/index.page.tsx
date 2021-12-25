// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";

// - アセット ============================================================================================================
import styles from "./privacy.module.scss";

// - ルーティング ========================================================================================================
import { Routing } from "../../routing/routing";
import { pagesPath } from "../../lib/$path";

// - メタデータ ==========================================================================================================
import { MetaData } from "../../components/MetaData";

// - 子コンポーネント =====================================================================================================
import { Breadcrumb, BreadcrumbLink } from "../../components/atoms/Breadcrumb/Breadcrumb";

const breadcrumbLinks: BreadcrumbLink[] = [
  {
    path: pagesPath.$url().pathname,
    label: Routing.Top.pageName
  },
  {
    path: pagesPath.privacy.$url().pathname,
    label: Routing.PrivacyPolicy.pageName
  }
];


/* eslint-disable-next-line react/display-name */
const Privacy: VFC = memo((props) => {



  return (
    <>
      <MetaData
        title={Routing.PrivacyPolicy.pageName}
        url={pagesPath.privacy.$url().pathname}
        type="article"
        twitterCardType="summary_large_image"
        description="プライバシーポリシーのページです。"
      />
      <Breadcrumb links={breadcrumbLinks}/>
      <main className={styles.privacyPage}>

        <h1 className="heading1">プライバシーポリシー</h1>



        <p>
          abeshi blog(以下「当サイト」と言います。)では、お客様からお預かりする個情報の重要性を強く認識し、個人情報保護に関する法律、
          その他の関係法令を遵守すると共に、以下に定めるプライバシーポリシーにしたがって、個人情報を安全かつ適切に取り扱うことを宣言いたします。
        </p>

        <h2 className="heading2 heading2__underline">個人情報</h2>

        <p>
          「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，
          当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ，
          及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
        </p>

        <h2 className="heading2 heading2__underline">個人情報の利用目的</h2>

        <p>
          当サイトでは、お客様からのお問い合わせやサービスへのお申し込み等を通じて、
          お客様の氏名、生年月日、住所、電話番号、メールアドレス等の個人情報をご提供いただく場合があります。
          その場合は、以下に示す利用目的のために、適正に利用するものと致します。
        </p>

        <p>お客様からのお問い合わせ等に対応するため。</p>
        <p>当サイトのサービス向上・改善、新サービスを検討するための分析等を行うため。</p>
        <p>
          お客様からお預かりした個人情報を、個人情報保護法その他の法令に基づき開示が認められる場合を除き、
          ご本人様の同意を得ずに第三者に提供することはありません。
        </p>

        <h2 className="heading2 heading2__underline">Cookie(クッキー)及びその他の技術、解析ツールについて</h2>

        <p>
          本ウェブサイトは、Cookie及びこれに類する 技術 を利用することがあります。
          これらの技術 は、当社による本サービスの利用状況等の把握 に役立ち、サービス向上に資するものです。
          Cookieを無効化 されたいユーザーは、ウェブブラウザの設定を変更することによりCookieを無効化 してください。
          ただし、Cookieを無効化 すると 、本サービスの一部の機 能をご利用いただけなくなる場合があります。
          また本ウェブサイトは、Googleによる解析ツール"Googleアナリティクス"を利用しています。
          このツールは 、トラ フィ ックデータの収集のためにCookieを使用しますが、このデータは匿名で収集されており、個人を特定するものではありません。
          ウェブブラウザの設定からCookieを無効にすることで、このデータの収集を拒否することが出来ます。
          詳しくはGoogleアナリティクス利用規約をご確認ください。
        </p>

        <h2 className="heading2 heading2__underline">プライバシーポリシーの変更</h2>

        <p>本ポリシーの内容は，法令その他本ポリシーに別段の定めのある事項 を除いて，ユーザーに通知することなく，変更することができるものとします。</p>
        <p>当社が別途定める場合を除いて，変更後のプライバシーポリシーは，本ウェブサイトに掲載したときから効力を生じるものとします。</p>

      </main>
    </>
  );
});

export default Privacy;

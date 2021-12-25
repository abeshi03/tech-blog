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

      </main>
    </>
  );
});


export default Disclaimer;

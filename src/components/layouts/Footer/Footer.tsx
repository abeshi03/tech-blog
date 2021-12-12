// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";
import Link from "next/link";

// - アセット ============================================================================================================
import styles from "./footer.module.scss";

// - ルーティング =========================================================================================================
import { Routing } from "../../../routing/routing";
import { pagesPath } from "../../../lib/$path";


/* eslint-disable-next-line react/display-name */
export const Footer: VFC = memo(() => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerLinks}>

        <li className={styles.footerLink}>
          <Link href={pagesPath.privacy.$url()}>
            <a className={styles.link}>利用規約</a>
          </Link>
        </li>

        <li className={styles.footerLink}>
          <Link href={pagesPath.privacy.$url()}>
            <a className={styles.link}>プライバシーポリシー</a>
          </Link>
        </li>

        <li className={styles.footerLink}>
          <Link href={Routing.Profile.path}>
            <a className={styles.link}>プロフィール</a>
          </Link>
        </li>
      </ul>

      <p className={styles.copyright}>Copyright © Kohei Abe. All rights reserved</p>
    </footer>
  );
});

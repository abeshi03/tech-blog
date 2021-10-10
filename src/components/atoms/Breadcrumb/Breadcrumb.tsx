// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";
import Link from "next/link";
// - アセット ============================================================================================================
import styles from "./breadcrumb.module.scss";
// - ルーティング =========================================================================================================


export type BreadcrumbLink = {
  label: string;
  path?: string;
}

/* eslint-disable-next-line react/display-name */
export const Breadcrumb: VFC<Array<BreadcrumbLink[]>> = memo((props) => {

  // @ts-ignore
  const { links } = props;

  if (links.length === 0) return null;

  return (
    <div className={styles.breadcrumb}>
      {links.map((link: BreadcrumbLink, index: number) => {
        return (
          <React.Fragment key={link.label}>
            {index > 0 && <span className={styles.guide}>{">"}</span>}
            {link.path ? (
              <Link href={link.path}>
                <a className={styles.label}>{link.label}</a>
              </Link>
            ) : (
              <span className={styles.label__noLink}>{link.label}</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
});

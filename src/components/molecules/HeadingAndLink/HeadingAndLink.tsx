// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";
import Link from "next/link";

// - アセット ============================================================================================================
import styles from "./headingAndLink.module.scss";


type Props = {
  heading: string;
  linkName: string;
  path: string;
  style?: React.CSSProperties;
}

/* eslint-disable-next-line react/display-name */
export const HeadingAndLink: VFC<Props> = memo((props) => {
  const { heading, linkName, path, style } = props;
  return (
    <div className={styles.headingAndLink} style={style}>
      <h1 className={"heading2"}>{ heading }</h1>
      <Link href={path}>
        <a className={styles.linkName}>{ `${linkName} >` }</a>
      </Link>
    </div>
  );
});

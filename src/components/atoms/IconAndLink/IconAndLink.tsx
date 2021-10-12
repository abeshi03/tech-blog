// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";
// - アセット ============================================================================================================
import styles from "./iconAndLink.module.scss";
import { TwitterIcon } from "../../../assets/icons/TwitterIcon";
import { GithubIcon } from "../../../assets/icons/GithubIcon";

type Props = {
  iconType: "TWITTER" | "GITHUB";
  label: string;
  externalLink: string;
  style?: React.CSSProperties;
}

const selectedIcon = (iconType: string): JSX.Element => {
  switch (iconType) {
    case "TWITTER": return <TwitterIcon/>;
    case "GITHUB": return <GithubIcon/>;
  }
}

/* eslint-disable-next-line react/display-name */
export const IconAndLink: VFC<Props> = memo((props) => {

  const { iconType, label, externalLink, style } = props;

  return (
    <a href={externalLink} target="_blank" className={styles.iconAndLink} style={style && style}>

      <div className={styles.icon}>{ selectedIcon(iconType) }</div>

      <div className={styles.flexContainer}>
        <div className={styles.label}>{ label }</div>
      </div>

    </a>
  );
});

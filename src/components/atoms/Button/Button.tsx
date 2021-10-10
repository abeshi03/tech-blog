// - フレームワーク =======================================================================================================
import React, { memo, VFC, ReactNode } from "react";
import Link from "next/link";
// - アセット ============================================================================================================
import styles from "./button.module.scss";
// - ルーティング =========================================================================================================

type Props = {
  color: "SKY_BLUE" | "WHITE";
  size: "SMALL" | "BIG";
  path: string;
  children: ReactNode;
}

/* eslint-disable-next-line react/display-name */
export const Button: VFC<Props> = memo((props) => {
  const { color, path, children, size } = props;

  const ButtonColorModifierCSS_Class = (): string | null => {
    switch (color) {
      case "SKY_BLUE": return styles.button__skyBlue;
      case "WHITE": return styles.button__white;
      default: return null;
    }
  };

  const ButtonSizeModifierCSS_Class = (): string | null => {
    switch (size) {
      case "SMALL": return styles.small;
      case "BIG": return styles.big;
      default: return null;
    }
  };


  return (
    <React.Fragment>
      <Link href={path}>
        <a className={styles.path}>
          <button className={`${ButtonColorModifierCSS_Class()} ${ButtonSizeModifierCSS_Class()} ${styles.button}`}>
            { children }
          </button>
        </a>
      </Link>
    </React.Fragment>
  );
});
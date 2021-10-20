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
  style?: React.CSSProperties;
}

/* eslint-disable-next-line react/display-name */
export const Button: VFC<Props> = memo((props) => {
  const { color, path, children, size, style } = props;

  const ButtonColorModifierCSS_Class = (): string => {
    switch (color) {
      case "SKY_BLUE": return styles.button__skyBlue;
      case "WHITE": return styles.button__white;
    }
  };

  const ButtonSizeModifierCSS_Class = (): string => {
    switch (size) {
      case "SMALL": return styles.small;
      case "BIG": return styles.big;
    }
  };


  return (
    <>
      <Link href={path}>
        <a className={styles.path} style={style}>
          <button className={`${ButtonColorModifierCSS_Class()} ${ButtonSizeModifierCSS_Class()} ${styles.button}`}>
            { children }
          </button>
        </a>
      </Link>
    </>
  );
});

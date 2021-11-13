// - フレームワーク =======================================================================================================
import React, { memo, ReactNode, useState, VFC } from "react";

// - アセット ============================================================================================================
import styles from "./displaySwitchingButton.module.scss";
import { PlusIcon } from "../../../assets/icons/PlusIcon";
import { MinusIcon } from "../../../assets/icons/MinusIcon";


type Props = {
  label: string;
  children: ReactNode;
  style?: React.CSSProperties;
}

/* eslint-disable-next-line react/display-name */
export const DisplaySwitchingButton: VFC<Props> = memo((props) => {

  const { label, children, style } = props;

  const [ displayChildren, setDisplayChildren ] = useState<boolean>(true);

  const onClickDisplayChildren = (): void => {
    setDisplayChildren(!displayChildren);
  };

  return (
    <>
      <div className={styles.displaySwitchingButton} onClick={onClickDisplayChildren} style={style}>

        { displayChildren ? (
          <div className={styles.flexContainer}>
            <div className={styles.label}>{ `${label}を非表示` }</div>
            <div className={styles.icon}>
              <MinusIcon/>
            </div>
          </div>

        ) : (

          <div className={styles.flexContainer}>
            <div className={styles.label}>{ `${label}を表示` }</div>
            <div className={styles.icon}>
              <PlusIcon/>
            </div>
          </div>

        )}
      </div>
      { displayChildren && <div>{ children }</div> }
    </>
  );
});

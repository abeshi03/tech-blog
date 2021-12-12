// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";

// - アセット ============================================================================================================
import styles from "./Modal.module.scss";

// - ルーティング =========================================================================================================

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  modalInnerColor?: string;
}

/* eslint-disable-next-line react/display-name */
export const Modal: VFC<Props> = memo((props) => {
  const { children, isOpen, modalInnerColor = "white" } = props;

  return (
    <>
      { isOpen &&
        <div className={styles.modal}>
          <div className={styles.modalInner} style={{background: modalInnerColor}}>
            { children }
          </div>
        </div>
      }
    </>
  );
});

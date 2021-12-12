// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";

// - アセット ============================================================================================================
import styles from "./Modal.module.scss";


type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  modalInnerColor?: string;
  closeModalFunction: () => void;
}

/* eslint-disable-next-line react/display-name */
export const Modal: VFC<Props> = memo((props) => {

  const { children, isOpen, modalInnerColor = "white", closeModalFunction } = props;

  return (
    <>
      { isOpen &&
        <div className={styles.modal}>
          <div className={styles.modalInner} style={{background: modalInnerColor}}>
            <div
              className={styles.closeButton}
              onClick={closeModalFunction}
            >×</div>
            { children }
          </div>
        </div>
      }
    </>
  );
});

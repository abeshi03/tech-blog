// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";

// - アセット ============================================================================================================
import styles from "./alertBox.module.scss";
import { AlertInfoIcon } from "../../../assets/icons/AlertInfoIcon";
import { AlertErrorIcon } from "../../../assets/icons/AlertErrorIcon";
import { AlertWarningIcon } from "../../../assets/icons/AlertWarningIcon";
import { AlertSuccessIcon } from "../../../assets/icons/AlertSuccessIcon";

type AlertType = "ERROR" | "INFO" | "WARNING" | "SUCCESS";

type AlertBoxProps = {
  title: string;
  description: string;
  alertType: AlertType;
  style?: React.CSSProperties;
};

const selectedIcon = (alertType: AlertType): JSX.Element => {
  switch (alertType) {
    case "ERROR": return <AlertErrorIcon />;
    case "INFO": return <AlertInfoIcon />;
    case "WARNING": return <AlertWarningIcon />;
    case "SUCCESS": return <AlertSuccessIcon />;
  }
};

const alertTypeModifierCSS_Class = (alertType: AlertType): string => {
  switch (alertType) {
    case "ERROR":
      return styles.alertBox__Error;
    case "INFO":
      return styles.alertBox__Info;
    case "WARNING":
      return styles.alertBox__Warning;
    case "SUCCESS":
      return styles.alertBox__Success;
  }
};

/* eslint-disable-next-line react/display-name */
export const AlertBox: VFC<AlertBoxProps> = memo((props) => {

  const { title, description, alertType, style } = props;

  return (
    <div className={`${alertTypeModifierCSS_Class(alertType)} ${styles.alertBox}`} style={style}>
      <div className={styles.leftColumn}>
        <div className={styles.icon}>{ selectedIcon(alertType) }</div>
      </div>
      <div className={styles.rightColumn}>
        <p className={styles.alertTitle}>{ title }</p>
        <p className={styles.alertDescription}>{ description }</p>
      </div>
    </div>
  );
});

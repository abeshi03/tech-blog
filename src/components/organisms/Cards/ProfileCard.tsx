// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";

// - アセット ===========================================================================================================
import styles from "./profileCard.module.scss";

// - 型定義 =============================================================================================================
import { Profile } from "../../../types/profile/profile";

// - 子コンポーネント =====================================================================================================
import { IconAndLink } from "../../molecules/IconAndLink/IconAndLink";
import { ExternalLinks } from "../../../config/application/externalLinks";
import { Button } from "../../atoms/Button/Button";

type Props = {
  style?: React.CSSProperties;
  targetProfile: Profile;
}

const getFullName = (familyName: string, lastName: string): string => {
  return `${familyName} ${lastName}`;
};

/* eslint-disable-next-line react/display-name */
export const ProfileCard: VFC<Props> = memo((props) => {

  const { style, targetProfile } = props;

  return (
    <div className={styles.profileCard} style={style && style}>

      <div className={styles.image} style={{backgroundImage: `url(${targetProfile.image.url})`}} role="img"></div>

      <div className={styles.fullName}>{getFullName(targetProfile.familyName, targetProfile.lastName)}</div>

      <div className={styles.role}>{targetProfile.role}</div>

      <IconAndLink
        iconType="GITHUB"
        label={"Github"}
        className={styles.marginTop}
        externalLink={ExternalLinks.Github}
      />

      {/*TODO ルーティング追加*/}
      <Button
        color="WHITE"
        size="BIG"
        path={"#"}
        style={{marginTop: "16px"}}
      >Read more</Button>

    </div>
  );
});

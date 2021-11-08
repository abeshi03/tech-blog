// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";
import { Link as Scroll } from "react-scroll"; // -  Next.jsのLinkコンポーネントと混合する為Scrollに変更

// - アセット ===========================================================================================================
import styles from "./tableOfContents.module.scss";
import { TableOfContentIcon } from "../../../../../assets/icons/TableOfContentIcon";

// - 型定義 =============================================================================================================
import { TableOfContentType } from "../../../../../types/Blog/TableOfContentType";


type Props = {
  tableOfContents: TableOfContentType[];
}

/* eslint-disable-next-line react/display-name */
export const TableOfContents: VFC<Props> = memo((props) => {

  const { tableOfContents } = props;

  return (
    <div className={styles.tableOfContents}>

      <div className={styles.headingContainer}>
        <div className={styles.icon}><TableOfContentIcon/></div>
        <div className={styles.heading}>目次</div>
      </div>

       <ul className={styles.tableOfContentsFlow}>
         {tableOfContents.map((tableOfContent: TableOfContentType, index: number) => (

           <li className={styles.tableOfContent} key={tableOfContent.targetTableOfContentID}>
             <div className={styles.ableOfContentNumber}>{ `${index + 1}.` }</div>
             <Scroll
               to={tableOfContent.targetTableOfContentID}
               smooth
               duration={500}
             >{ tableOfContent.heading }</Scroll>
           </li>

         ))}
       </ul>

    </div>
  );
});

// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";
import { useRouter } from "next/router";

// - アセット ============================================================================================================
import styles from "./blogCard.module.scss";

// - ルーディング ========================================================================================================
import { Routing } from "../../../../routing/routing";

// - 型定義 =============================================================================================================
import { Blog } from "../../../../types/Profile/Blog/Blog";
import { Category } from "../../../../types/Category";

// - 子コンポーネント =====================================================================================================
import { CategoryBadge } from "../../../atoms/CategoryBadge/CategoryBadge";


type Props = {
  style?: React.CSSProperties;
  targetBlog: Pick<Blog, "id" | "mainImage" | "categories" | "createdAt" | "title">;
}

const formattedCreatedAt = (targetDate: string): string => {

  const date: Date = new Date(targetDate);

return `${date.getFullYear()}/` +
    `${date.getMonth() + 1}/`　+
    `${date.getDate()}`;
};

/* eslint-disable-next-line react/display-name */
export const BlogCard: VFC<Props> = memo((props) => {

  const { style, targetBlog } = props;
  const router = useRouter();

  const onClickBlogDetailsPage = (): void => {
    router.push(Routing.Blog.Details.path.replace("[id]", targetBlog.id));
  };

return (
    <div className={styles.blogCard} style={style} onClick={onClickBlogDetailsPage}>
      <div className={styles.image} style={{backgroundImage: `url(${targetBlog.mainImage.url})`}} role="img"></div>

      <div className={styles.categoriesFlow}>
        {targetBlog.categories.map((category: Category) => (
          <CategoryBadge key={category.id} category={category}/>
        ))}
      </div>

      <div className={styles.createdAt}>{ formattedCreatedAt(targetBlog.createdAt) }</div>
      <div className={styles.blogTitle}>{ targetBlog.title }</div>
    </div>
  );
});

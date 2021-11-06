// - フレームワーク, ライブラリー ===========================================================================================
import React, { VFC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/shades-of-purple.css";

// - アセット ===========================================================================================================
import styles from "./blogDetailsPage.module.scss";

// - ルーティング ========================================================================================================
import { Routing } from "../../../routing/routing";

// - api ===============================================================================================================
import { getBlogData, getBlogs } from "../../../apis/BlogAPI";
import { getCategories } from "../../../apis/CategoryAPI";

// - 型定義 =============================================================================================================
import { Blog, BlogResponseData } from "../../../types/Blog/Blog";
import { Category, CategoryResponseData } from "../../../types/Category";
import { TableOfContentType } from "../../../types/Blog/TableOfContentType";

// - 子コンポーネント =====================================================================================================
import { Breadcrumb, BreadcrumbLink } from "../../../components/atoms/Breadcrumb/Breadcrumb";
import { CategoryBadge } from "../../../components/atoms/CategoryBadge/CategoryBadge";
import { CategoriesBadgeFlow } from "../../../components/molecules/CategoriesBadgeFlow/CategoriesBadgeFlow";

// - このページでしか使わないコンポーネント ===================================================================================
import { TableOfContents } from "./_PageContent/TableOfContents/TableOfContents";


type Props = {
  blog: Blog;
  categories: CategoryResponseData;
  highlightedBody: string;
  tableOfContents: TableOfContentType[];
}

const formattedPublishedDate = (targetDate: string): string => {

  const publishedDate: Date = new Date(targetDate);

  return `${ publishedDate.getFullYear()}年` +
          `${ publishedDate.getMonth() + 1}月` +
          `${ publishedDate.getDate()}日`;
};

const BlogDetailsPage: VFC<Props> = (props) => {

  const { blog, categories, highlightedBody, tableOfContents } = props;

  const breadcrumbLinks: BreadcrumbLink[] = [
    {
      path: Routing.Top.path,
      label: Routing.Top.pageName
    },
    {
      path: Routing.Blog.List.path,
      label: Routing.Blog.List.pageName
    },
    {
      label: blog.title
    }
  ];

  return (
    <main className={styles.blogDetailsPage}>
      <Breadcrumb links={breadcrumbLinks}/>
      <div className={styles.mainSection}>

        {/* ブログ記事 ===============================================================================================　*/}
        <div className={styles.blogBlock}>

          <h1 className="heading1">{ blog.title }</h1>

          <div className={styles.publishedDate}>{ formattedPublishedDate(blog.publishedAt) }</div>

          <div className={styles.categoriesFlow}>
            {blog.categories.map((category: Category) => (
              <CategoryBadge category={category} key={category.id}/>
            ))}
          </div>

          <div className={styles.blogContent}
               dangerouslySetInnerHTML={{
                 __html: highlightedBody
               }}
          />

        </div>

        {/* サイドバー ===============================================================================================　*/}
        <div className={styles.sideBar}>

          <div className={styles.TableOfContents}>
            <TableOfContents tableOfContents={tableOfContents}/>
          </div>

          <div className={styles.categoriesBadgeFlow}>
            <CategoriesBadgeFlow
              categories={categories.data.contents}
            />
          </div>

        </div>
      </div>
    </main>
  );
};

export default BlogDetailsPage;

export const getStaticPaths: GetStaticPaths = async () => {

  const blogData: BlogResponseData = await getBlogs({ limit: 100, offset: 0 });

  const paths = blogData.data.contents.map((content) => `/blog/${content.id}`);

return { paths, fallback: false};
};

export const getStaticProps: GetStaticProps = async (context) => {

  const id: string = context.params.id.toString();

  const responseData: Blog = await getBlogData({ id });
  const categories: CategoryResponseData = await getCategories();

  // - シンタックスハイライト ==============================================================================================
  // - 参考 https://blog.microcms.io/syntax-highlighting-on-server-side/
  const $ = cheerio.load(responseData.blogContent);

  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });

  // - 目次 =============================================================================================================
  // - 参考 https://blog.microcms.io/create-table-of-contents/
  const headings = $("h2, h3, h4").toArray()

  const tableOfContents: TableOfContentType[] = headings.map((data) => {

    return {
      // @ts-ignore
      heading: data.children[0].data.toString(),
      targetTableOfContentID: data.attribs.id,
      htmlElementTagName: data.name,
    }
  })

  return {
    props: {
      blog: responseData,
      categories,
      highlightedBody: $.html(),
      tableOfContents
    }
  };
};

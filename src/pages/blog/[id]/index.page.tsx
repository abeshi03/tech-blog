// - フレームワーク, ライブラリー ===========================================================================================
import React, { VFC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";

// - api ===============================================================================================================
import { getBlogData, getBlogs } from "../../../apis/BlogAPI";

// - 型定義 =============================================================================================================
import { Blog, BlogResponseData } from "../../../types/Profile/Blog/Blog";


type Props = {
  blog: Blog
}

const BlogDetails: VFC<Props> = (props) => {

  const { blog } = props;

  return (
    <div>{blog.title}</div>
  );
};

export default BlogDetails;

export const getStaticPaths: GetStaticPaths = async () => {

  const blogData: BlogResponseData = await getBlogs({ limit: 100 });

  const paths = blogData.data.contents.map((content) => `/blog/${content.id}`)
  return { paths, fallback: false}
};

export const getStaticProps: GetStaticProps = async (context) => {

  const id: string = context.params.id.toString();

  const responseData: Blog = await getBlogData({ id })

  return {
    props: {
      blog: responseData
    }
  }
}

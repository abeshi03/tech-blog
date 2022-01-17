// - ライブラリー ========================================================================================================
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// - コンポーネント =======================================================================================================
import { Pagination } from "./Pagination";

export default {
  title: "Pagination",
  component: Pagination
} as ComponentMeta<typeof Pagination>;


export const page__first: ComponentStory<typeof Pagination> = () => (
  <Pagination totalCount={50} currentPageNumber={1} perPageNumber={10}/>
);


export const page__second: ComponentStory<typeof Pagination> = () => (
  <Pagination totalCount={50} currentPageNumber={2} perPageNumber={10}/>
);


export const page__third: ComponentStory<typeof Pagination> = () => (
  <Pagination totalCount={50} currentPageNumber={3} perPageNumber={10}/>
);


export const page__4th: ComponentStory<typeof Pagination> = () => (
  <Pagination totalCount={50} currentPageNumber={4} perPageNumber={10}/>
);

export const page__last: ComponentStory<typeof Pagination> = () => (
  <Pagination totalCount={50} currentPageNumber={5} perPageNumber={10}/>
);

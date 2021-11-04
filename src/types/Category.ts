export type Category = {
  id: string;
  createdAt: string,
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
}

export type CategoryResponseData = {
  data: {
    contents: Category[];
    totalCount: number;
  }
}

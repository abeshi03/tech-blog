/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  $404: {
    $url: (url?: { hash?: string }) => ({ pathname: '/404' as const, hash: url?.hash })
  },
  $500: {
    $url: (url?: { hash?: string }) => ({ pathname: '/500' as const, hash: url?.hash })
  },
  blog: {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/blog/[id]' as const, query: { id }, hash: url?.hash })
    }),
    category: {
      _categoryId: (categoryId: string | number) => ({
        page: {
          _pageId: (pageId: string | number) => ({
            $url: (url?: { hash?: string }) => ({ pathname: '/blog/category/[categoryId]/page/[pageId]' as const, query: { categoryId, pageId }, hash: url?.hash })
          })
        }
      })
    },
    page: {
      _id: (id: string | number) => ({
        $url: (url?: { hash?: string }) => ({ pathname: '/blog/page/[id]' as const, query: { id }, hash: url?.hash })
      })
    }
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath

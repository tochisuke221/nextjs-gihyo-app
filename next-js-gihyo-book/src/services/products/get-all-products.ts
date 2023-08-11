import type { ApiContext, Category, Condition, Product } from '@/types/data'
import { fetcher } from '@/utils'

export type GetAllProductsParams = {
  /**
   * 商品カテゴリ
   */
  category?: Category
  /**
   * 商品状態
   */
  conditions?: Condition[]
  /**
   * 所有するユーザーID
   */
  userId?: number
  /**
   * ソートするキー
   */
  sort?: keyof Omit<Product, 'owner'>
  /**
   * 昇順or降順
   */
  order?: 'asc' | 'desc'
  /**
   * 取得数
   */
  limit?: number
  /**
   * ページ数
   */
  page?: number
}

/**
 * プロダクトAPI（一覧取得）
 * @param context APIコンテキスト
 * @param params 検索条件
 * @returns 商品一覧
 */
// eslint-disable-next-line complexity
const getAllProducts = async (
  context: ApiContext,
  {
    category,
    conditions,
    userId,
    page,
    limit,
    sort = 'id',
    order = 'desc',
  }: GetAllProductsParams = {},
): Promise<Product[]> => {
  const path = `${context.apiRootUrl.replace(/\/$/g, '')}/products`
  const params = new URLSearchParams()

  if (category) params.append('category', category);
  if (conditions) conditions.forEach((condition) => params.append('condition', condition));
  if (userId) params.append('owner.id', `${userId}`);
  if (page) params.append('_page', `${page}`);
  if (limit) params.append('_limit', `${limit}`);
  if (sort) params.append('_sort', sort);
  if (order) params.append('_order', order);
  const query = params.toString()

  return await fetcher(query.length > 0 ? `${path}?${query}` : path, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

export default getAllProducts

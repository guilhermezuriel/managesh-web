import { api } from '@/lib/axios'

export interface GetOrdersQuery {
  pageIndex: number | null
}

export interface OrdersResponse {
  orderId: string
  createdAt: Date
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  customerName: string
  total: number
}

export interface GetOrdersResponse {
  orders: OrdersResponse[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({ pageIndex }: GetOrdersQuery) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
    },
  })
  return response.data
}

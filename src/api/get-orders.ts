import { api } from '@/lib/axios'

export interface GetOrdersQuery {
  orderId?: string | null
  customerName: string | null
  status: string | null
  pageIndex?: number | null
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

export async function getOrders({
  orderId,
  customerName,
  status,
  pageIndex,
}: GetOrdersQuery) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
      orderId,
      customerName,
      status,
    },
  })
  return response.data
}

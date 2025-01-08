import { api } from '@/lib/axios'

interface GetOrderDetailsRequest {
  orderId: string
}

export interface GetOrderDetailsResponse {
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  id: string
  createdAt: Date
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}
export async function getOrderDetails({ orderId: id }: GetOrderDetailsRequest) {
  const response = await api.get<GetOrderDetailsResponse>(`/orders/${id}`)
  return response.data
}

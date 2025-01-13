import { api } from '@/lib/axios'

export interface GetMonthOrdersCanceledResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthOrdersCanceled() {
  const response = await api.get<GetMonthOrdersCanceledResponse>(
    '/metrics/month-canceled-orders-amount',
  )

  return response.data
}

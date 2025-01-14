import { api } from '@/lib/axios'

export type GetDailyRevenueInPeriod = {
  date: string
  receipt: number
}[]

export interface getDailyRevenueInPeriodQuery {
  from?: Date
  to?: Date
}

export async function getDailyRevenueInPeriod({
  from,
  to,
}: getDailyRevenueInPeriodQuery) {
  const response = await api.get<GetDailyRevenueInPeriod>(
    '/metrics/daily-receipt-in-period',
    {
      params: {
        from,
        to,
      },
    },
  )

  return response.data
}

import { useQuery } from '@tanstack/react-query'

import { getMonthOrdersCanceled } from '@/api/get-month-oders-canceled-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricSkeletonCard } from './metric-card-skeleton'

export const OrdersCanceled = () => {
  const { data: canceledOrdersFn } = useQuery({
    queryKey: ['metrics', 'orders-canceled'],
    queryFn: getMonthOrdersCanceled,
  })
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">
          Orders canceled (month)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        {canceledOrdersFn ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {canceledOrdersFn.amount}
            </span>
            <p className="text-xs text-muted-foreground">
              {canceledOrdersFn.diffFromLastMonth > 0 ? (
                <span className="text-rose-500; dark:text-rose-600">
                  +{canceledOrdersFn.diffFromLastMonth}%
                </span>
              ) : (
                <span className="text-emerald-500; dark:text-emerald-600">
                  {canceledOrdersFn.diffFromLastMonth}%
                </span>
              )}
              {'  '} compared to last month
            </p>
          </>
        ) : (
          <MetricSkeletonCard />
        )}
      </CardContent>
    </Card>
  )
}

import { useQuery } from '@tanstack/react-query'
import { ClipboardPenLine } from 'lucide-react'

import { getOrdersMonthAmount } from '@/api/get-orders-month-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const OrdersAmount = () => {
  const { data: monthOrdersAmountFn } = useQuery({
    queryKey: ['metrics', 'month-orders-amount'],
    queryFn: getOrdersMonthAmount,
  })
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">
          Orders Amount (month)
        </CardTitle>
        <ClipboardPenLine />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthOrdersAmountFn && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthOrdersAmountFn.amount}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthOrdersAmountFn.diffFromLastMonth > 0 ? (
                <span className="text-emerald-500; dark:text-emerald-600">
                  +{monthOrdersAmountFn.diffFromLastMonth}%
                </span>
              ) : (
                <span className="text-rose-500; dark:text-rose-600">
                  {monthOrdersAmountFn.diffFromLastMonth}%
                </span>
              )}
              {'  '} compared to last month
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}

import { useQuery } from '@tanstack/react-query'
import { ClipboardPenLine } from 'lucide-react'

import { getOrdersDayAmount } from '@/api/get-orders-day-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const DayOrdersAmountCard = () => {
  const { data: dayOrdersAmount } = useQuery({
    queryKey: ['metrics', 'day-orders-amount'],
    queryFn: getOrdersDayAmount,
  })
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">
          Day Orders Amount (day)
        </CardTitle>
        <ClipboardPenLine />
      </CardHeader>
      <CardContent className="space-y-1">
        {dayOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {dayOrdersAmount.amount.toLocaleString('en-US')}
            </span>
            <p className="text-xs text-muted-foreground">
              {dayOrdersAmount.diffFromYesterday >= 0 ? (
                <span className="text-emerald-500; dark:text-emerald-600">
                  +{dayOrdersAmount.diffFromYesterday}%
                </span>
              ) : (
                <span className="text-rose-500; dark:text-rose-600">
                  {dayOrdersAmount.diffFromYesterday}%
                </span>
              )}
              {'  '} compared to yesterday
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}

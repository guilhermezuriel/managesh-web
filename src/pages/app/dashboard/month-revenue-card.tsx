import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthRevenue } from '@/api/get-month-revenue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatPrice } from '@/lib/utils'

export const MonthRevenueCard = () => {
  const { data: monthRevenueFn } = useQuery({
    queryKey: ['metrics', 'month-revenue'],
    queryFn: getMonthRevenue,
  })
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">
          Total receipt (month)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthRevenueFn && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {formatPrice(monthRevenueFn.receipt)}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthRevenueFn.diffFromLastMonth > 0 ? (
                <span className="text-emerald-500; dark:text-emerald-600">
                  +{monthRevenueFn.diffFromLastMonth}%
                </span>
              ) : (
                <span className="text-rose-500; dark:text-rose-600">
                  {monthRevenueFn.diffFromLastMonth}%
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

import { ClipboardPenLine } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const DayOrdersAmountCard = () => {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">
          Day Orders Amount (day)
        </CardTitle>
        <ClipboardPenLine />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">12</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-red-400; dark:text-red-500">-5% </span>
          compared to yesterday
        </p>
      </CardContent>
    </Card>
  )
}

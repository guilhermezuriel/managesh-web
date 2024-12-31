import { ClipboardPenLine } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const OrdersAmount = () => {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">
          Orders Amount (month)
        </CardTitle>
        <ClipboardPenLine />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">248</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500; dark:text-emerald-600">+2% </span>
          compared to last month
        </p>
      </CardContent>
    </Card>
  )
}

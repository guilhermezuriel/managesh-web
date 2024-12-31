import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const OrdersCanceled = () => {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">
          Orders canceled (month)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">30</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-red-400; dark:text-red-500">+1% </span>
          compared to last month
        </p>
      </CardContent>
    </Card>
  )
}

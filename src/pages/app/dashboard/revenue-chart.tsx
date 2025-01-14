import { useQuery } from '@tanstack/react-query'
import { subDays } from 'date-fns'
import { Loader2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { DateRange } from 'react-day-picker'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import { getDailyRevenueInPeriod } from '@/api/get-daily-revenue-in-period'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { DatePickerWithRange } from '@/components/ui/date-picker'
import { Label } from '@/components/ui/label'
export const RevenueChart = () => {
  const [dataRange, setDataRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  })
  const { data: dailyRevenue } = useQuery({
    queryKey: ['metrics', 'daily-revenue-in-period', dataRange],
    queryFn: () =>
      getDailyRevenueInPeriod({ from: dataRange?.from, to: dataRange?.to }),
  })

  const chartData = useMemo(() => {
    return dailyRevenue?.map((charItem) => {
      return { date: charItem.date, receipt: charItem.receipt / 100 }
    })
  }, [dailyRevenue])

  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receipt in a period
          </CardTitle>
          <CardDescription>Diary receipt in a period</CardDescription>
        </div>
        <div>
          <Label>Period</Label>
          <DatePickerWithRange date={dataRange} onDateChange={setDataRange} />
        </div>
      </CardHeader>
      <CardContent>
        {chartData ? (
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={chartData} style={{ fontSize: 12 }}>
              <XAxis tickLine={false} dataKey="date" axisLine={false} dy={16} />
              <YAxis
                stroke="#888"
                axisLine={false}
                width={80}
                tickLine={false}
                tickFormatter={(value: number) =>
                  value.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })
                }
              />
              <CartesianGrid vertical={false} className="stroke-muted" />
              <Line
                type="linear"
                strokeWidth={2}
                dataKey="receipt"
                color={colors.blue['400']}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-[240px] w-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        )}
      </CardContent>
    </Card>
  )
}

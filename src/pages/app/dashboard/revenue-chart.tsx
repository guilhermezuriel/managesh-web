import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
export const RevenueChart = () => {
  const data = [
    { date: '10/12', revenue: 1200 },
    { date: '11/12', revenue: 200 },
    { date: '12/12', revenue: 900 },
    { date: '13/12', revenue: 1000 },
    { date: '14/12', revenue: 120 },
    { date: '15/12', revenue: 1200 },
  ]
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receipt in a period
          </CardTitle>
          <CardDescription>Diary receipt in a period</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
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
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              color={colors.blue['400']}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

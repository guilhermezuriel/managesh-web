import { BarChart } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
export const PopularProductsChart = () => {
  const data = [
    { product: 'Headphones', amount: 12 },
    { product: 'Tablet', amount: 20 },
    { product: 'Smartphone', amount: 90 },
    { product: 'Notebook', amount: 10 },
    { product: 'Television', amount: 12 },
  ]

  const COLORS = [
    colors.sky['500'],
    colors.amber['500'],
    colors.rose['500'],
    colors.cyan['500'],
    colors.green['500'],
  ]
  return (
    <Card className="= col-span-3">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="flex items-center justify-center gap-2">
          <CardTitle className="text-base font-medium">
            Popular products
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240} className="p-4">
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              data={data}
              dataKey="amount"
              cx="50%"
              cy="50%"
              innerRadius={64}
              outerRadius={84}
              strokeWidth={8}
              labelLine={false}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180
                const radius = 12 + innerRadius + (outerRadius - innerRadius)
                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                const y = cy + radius * Math.sin(-midAngle * RADIAN)

                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                  >
                    {data[index].product.length > 12
                      ? data[index].product.substring(0, 12).concat('...')
                      : data[index].product}{' '}
                    ({value})
                  </text>
                )
              }}
            >
              {data.map((_, index) => {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                    className="stroke-background hover:opacity-80"
                  />
                )
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

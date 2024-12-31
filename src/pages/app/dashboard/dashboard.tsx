import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './day-orders-amount-card'
import { MonthRevenueCard } from './month-revenue-card'
import { OrdersAmount } from './orders-amount'
import { OrdersCanceled } from './orderscanceled'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="tracking-tigh text-3xl font-bold">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <OrdersAmount />
          <DayOrdersAmountCard />
          <OrdersCanceled />
        </div>
      </div>
    </>
  )
}

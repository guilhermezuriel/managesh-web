import { Helmet } from 'react-helmet-async'

import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { OrderTableRow } from './order-table-row'

export function Orders() {
  return (
    <>
      <Helmet title="Orders" />
      <div className="flex flex-col gap-4">
        <h1 className="tracking-light text-3xl font-bold">Orders</h1>
      </div>
      <div className="space-y-2.5">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filters:</span>
          <Input placeholder="Client Name" className="h-8 w-[320px]" />
        </form>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Id</TableHead>
                <TableHead className="w-[140px]">Date</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Client</TableHead>
                <TableHead className="w-[140px]">Price</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <OrderTableRow />
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}

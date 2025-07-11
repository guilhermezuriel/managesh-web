export type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pending',
  canceled: 'Canceled',
  delivered: 'Delivered',
  delivering: 'Delivering',
  processing: 'Processing',
}

export const OrderStatus = ({ status }: OrderStatusProps) => {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span className="h-2 w-2 rounded-full bg-slate-400" />
      )}
      {status === 'canceled' && (
        <span className="h-2 w-2 rounded-full bg-rose-400" />
      )}
      {['processing', 'delivering'].includes(status) && (
        <span className="h-2 w-2 rounded-full bg-amber-400" />
      )}
      {status === 'delivered' && (
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
      )}

      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}

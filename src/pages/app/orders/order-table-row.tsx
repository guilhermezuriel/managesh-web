import { useMutation, useQueryClient } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { ArrowRight, Search, X } from 'lucide-react'

import { approveOrder } from '@/api/approve-order'
import { cancelOrder } from '@/api/cancel-order'
import { deliverOrder } from '@/api/delivered-order'
import { dispatchOrder } from '@/api/dispatch-order'
import { GetOrdersResponse, OrdersResponse } from '@/api/get-orders'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'
import { formatPrice } from '@/lib/utils'

import { OrderDetails } from './order-details'
import { OrderStatus } from './order-status'

interface OrderResponseProps {
  order: OrdersResponse
}

export const OrderTableRow = ({ order }: OrderResponseProps) => {
  const queryClient = useQueryClient()
  function updateOrderStatus(orderId: string, orderStatus: OrderStatus) {
    const ordersListCache = queryClient.getQueriesData<GetOrdersResponse>({
      queryKey: ['orders'],
    })
    ordersListCache.forEach(([cacheKey, cacheData]) => {
      if (!cacheData) {
        return
      }

      queryClient.setQueryData<GetOrdersResponse>(cacheKey, {
        ...cacheData,
        orders: cacheData.orders.map((order) => {
          if (order.orderId === orderId) {
            return { ...order, status: orderStatus }
          }
          return order
        }),
      })
    })
  }
  const { mutateAsync: cancelOrdeFn } = useMutation({
    mutationFn: cancelOrder,
    onSuccess(_, { orderId }) {
      updateOrderStatus(orderId, 'canceled')
    },
  })
  const { mutateAsync: approveOrderFn, isPending: isApprovingOrder } =
    useMutation({
      mutationFn: approveOrder,
      onSuccess(_, { orderId }) {
        updateOrderStatus(orderId, 'processing')
      },
    })
  const { mutateAsync: dispatchOrderFn, isPending: isDispatchingOrder } =
    useMutation({
      mutationFn: dispatchOrder,
      onSuccess(_, { orderId }) {
        updateOrderStatus(orderId, 'delivering')
      },
    })
  const { mutateAsync: deliveredOrderFn, isPending: isDeliveredOrder } =
    useMutation({
      mutationFn: deliverOrder,
      onSuccess(_, { orderId }) {
        updateOrderStatus(orderId, 'delivered')
      },
    })
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <OrderDetails orderId={order.orderId} />
          </DialogContent>
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-sm font-medium">
        {order.orderId}
      </TableCell>
      <TableCell>
        {formatDistanceToNow(order.createdAt, { addSuffix: true })}
      </TableCell>
      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>
      <TableCell>{order.customerName}</TableCell>
      <TableCell>{formatPrice(order.total)}</TableCell>
      <TableCell>
        {order.status === 'pending' && (
          <Button
            variant="ghost"
            size="xs"
            onClick={() => approveOrderFn({ orderId: order.orderId })}
            disabled={isApprovingOrder}
          >
            <ArrowRight className="h-3 w-3" /> Approve
          </Button>
        )}
        {order.status === 'processing' && (
          <Button
            variant="ghost"
            size="xs"
            onClick={() => dispatchOrderFn({ orderId: order.orderId })}
            disabled={isDispatchingOrder}
          >
            <ArrowRight className="h-3 w-3" /> Dispatch
          </Button>
        )}
        {order.status === 'delivering' && (
          <Button
            variant="ghost"
            size="xs"
            onClick={() => deliveredOrderFn({ orderId: order.orderId })}
            disabled={isDeliveredOrder}
          >
            <ArrowRight className="h-3 w-3" /> Delivered
          </Button>
        )}
      </TableCell>
      <TableCell>
        <Button
          disabled={!['pending', 'processing'].includes(order.status)}
          variant="ghost"
          size="xs"
          onClick={() => cancelOrdeFn({ orderId: order.orderId })}
        >
          <X className="h-3 w-3" /> Cancel
        </Button>
      </TableCell>
    </TableRow>
  )
}

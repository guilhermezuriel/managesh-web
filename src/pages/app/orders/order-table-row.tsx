import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { OrderDetails } from './order-details'

export const OrderTableRow = () => {
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
            <OrderDetails />
          </DialogContent>
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-sm font-medium">
        dmlfkandoFDFKALAPLm
      </TableCell>
      <TableCell>30 minutes ago</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span>Pending</span>
        </div>
      </TableCell>
      <TableCell>Augustus</TableCell>
      <TableCell>$ 1,199.99</TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <ArrowRight className="h-3 w-3" /> Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="h-3 w-3" /> Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}

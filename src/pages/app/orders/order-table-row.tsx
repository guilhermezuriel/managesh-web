import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

export const OrderTableRow = () => {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="xs">
          <Search className="h-3 w-3" />
          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </TableCell>
      <TableCell className="font-mono text-sm font-medium">
        dmlfkandoFDFKALAPLm
      </TableCell>
      <TableCell>30 minutes ago</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span>Pendente</span>
        </div>
      </TableCell>
      <TableCell>Augustus</TableCell>
      <TableCell>$ 1299.99</TableCell>
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

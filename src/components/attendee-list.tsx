import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from 'lucide-react'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableHeader } from './table/table-header'
import { TableCell } from './table/table-cell'
import { TableRow } from './table/table-row'

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="flex w-72 items-center gap-3 rounded-lg border border-white/10 px-3 py-1.5">
          <Search className="size-4 text-emerald-300" />
          <input
            type="text"
            placeholder="Buscar participante..."
            className="flex-1 border-0 bg-transparent p-0 text-sm focus:ring-0"
          />
        </div>
      </div>

      <Table>
        <thead>
          <TableRow>
            <TableHeader style={{ width: 48 }}>
              <input
                type="checkbox"
                className="size-4 rounded border border-white/10 bg-black/20 text-orange-400"
              />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data da inscrição</TableHeader>
            <TableHeader>Data do check-in</TableHeader>
            <TableHeader
              style={{
                width: 64,
              }}
            ></TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, i) => (
            <TableRow
              key={`attendee-${i}`}
              className="transition-all hover:bg-white/5"
            >
              <TableCell>
                <input
                  type="checkbox"
                  className="size-4 rounded border border-white/10 bg-black/20 text-orange-400"
                />
              </TableCell>
              <TableCell>00{i}</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">John Doe</span>
                  <span>johndoe@email.com</span>
                </div>
              </TableCell>
              <TableCell>7 dias atrás</TableCell>
              <TableCell>3 dias atrás</TableCell>
              <TableCell>
                <IconButton transparent>
                  <MoreHorizontal className="size-4" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
        <tfoot>
          <TableRow>
            <TableCell colSpan={3}>Mostrando 10 de 228 itens</TableCell>
            <TableCell colSpan={3} className="text-right">
              <div className="inline-flex items-center gap-8">
                <span>Página 1 de 23</span>
                <div className="flex gap-1.5">
                  <IconButton>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </TableRow>
        </tfoot>
      </Table>
    </div>
  )
}

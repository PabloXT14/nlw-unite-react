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
          <tr className="border-b border-white/10">
            <th
              style={{ width: 48 }}
              className="px-4 py-3 text-left text-sm font-semibold"
            >
              <input
                type="checkbox"
                className="size-4 rounded border border-white/10 bg-black/20 text-orange-400"
              />
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Código
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Participante
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Data da inscrição
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Data do check-in
            </th>
            <th
              style={{
                width: 64,
              }}
              className="px-4 py-3 text-left text-sm font-semibold"
            ></th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, i) => (
            <tr
              key={`attendee-${i}`}
              className="border-b border-white/10 transition-all hover:bg-white/5"
            >
              <td className="px-4 py-3 text-sm text-zinc-300">
                <input
                  type="checkbox"
                  className="size-4 rounded border border-white/10 bg-black/20 text-orange-400"
                />
              </td>
              <td className="px-4 py-3 text-sm text-zinc-300">00{i}</td>
              <td className="px-4 py-3 text-sm text-zinc-300">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">John Doe</span>
                  <span>johndoe@email.com</span>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-zinc-300">7 dias atrás</td>
              <td className="px-4 py-3 text-sm text-zinc-300">3 dias atrás</td>
              <td className="px-4 py-3 text-sm text-zinc-300">
                <IconButton transparent>
                  <MoreHorizontal className="size-4" />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="px-4 py-3 text-sm text-zinc-300">
              Mostrando 10 de 228 itens
            </td>
            <td
              colSpan={3}
              className="px-4 py-3 text-right text-sm text-zinc-300"
            >
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
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  )
}

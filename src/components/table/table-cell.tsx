import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type TableCellProps = ComponentProps<'td'>

export function TableCell({ className, ...props }: TableCellProps) {
  return (
    <td
      {...props}
      className={twMerge('px-4 py-3 text-sm text-zinc-300', className)}
    />
  )
}

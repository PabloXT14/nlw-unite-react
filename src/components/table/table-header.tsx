import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type TableHeaderProps = ComponentProps<'th'>

export function TableHeader({ className, ...props }: TableHeaderProps) {
  return (
    <th
      {...props}
      className={twMerge(
        'px-4 py-3 text-left text-sm font-semibold',
        className,
      )}
    />
  )
}

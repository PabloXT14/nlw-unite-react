import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type TableProps = ComponentProps<'table'>

export function Table({ className, ...props }: TableProps) {
  return (
    <div className="rounded-lg border border-white/10">
      <table {...props} className={twMerge('w-full', className)} />
    </div>
  )
}

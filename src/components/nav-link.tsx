import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type NavLinkProps = ComponentProps<'a'>

export function NavLink({ children, className, ...props }: NavLinkProps) {
  return (
    <a {...props} className={twMerge('text-sm font-medium', className)}>
      {children}
    </a>
  )
}

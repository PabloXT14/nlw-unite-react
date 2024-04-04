import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type IconButtonProps = ComponentProps<'button'> & {
  transparent?: boolean
}

export function IconButton({
  transparent,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        'rounded-md border border-white/10 bg-white/10 p-1.5',
        transparent && 'bg-transparent',
        className,
      )}
    />
  )
}

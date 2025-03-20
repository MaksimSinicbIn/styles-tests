import { ComponentPropsWithoutRef, ElementType } from 'react'

type Props<T extends ElementType = 'button'> = {
  as?: T
  className?: string
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: Props<T>) => {
  const { as, className, ...restProps } = props

  const Component = as ?? 'button'

  return <Component className={className} {...restProps} />
}

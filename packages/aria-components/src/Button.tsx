import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { commonTypes } from './types'
import { cm } from '@stack/classnames'
import { Button as RAButton } from 'react-aria-components'
import Spinner from './Spinner'

const btnStyles = {
  base: 'flex gap-2 items-center justify-center outline-none',
  variant: {
    flat: {
      primary: 'bg-transparent hover:bg-primary-50 text-primary-500 disabled:text-primary-200',
      secondary: 'bg-transparent hover:bg-secondary-50 text-secondary-500 disabled:text-secondary-200',
      light: 'bg-transparent hover:bg-light-50 text-light-500 disabled:text-light-200',
      dark: 'bg-transparent hover:bg-dark-50 text-dark-500 disabled:text-dark-200',
      default: 'bg-transparent hover:bg-default-50 text-default-500 disabled:text-default-200',
      success: 'bg-transparent hover:bg-success-50 text-success-500 disabled:text-success-200',
      warning: 'bg-transparent hover:bg-warning-50 text-warning-500 disabled:text-warning-200',
      danger: 'bg-transparent hover:bg-danger-50 text-danger-500 disabled:text-danger-200',
      info: 'bg-transparent hover:bg-info-50 text-info-500 disabled:text-info-200',
      active: 'bg-transparent hover:bg-active-50 text-active-500 disabled:text-active-200'
    },
    solid: {
      primary:
        'bg-primary-500 hover:bg-primary-600 text-light-500 border-light-500 border-0 disabled:bg-primary-100',
      secondary:
        'bg-secondary-500 hover:bg-secondary-600 text-light-500 border-light-500 border-0 disabled:bg-secondary-100',
      light:
        'bg-light-500 hover:bg-light-600 text-dark-500 border-dark-500 border-0 disabled:bg-light-100',
      dark: 'bg-dark-500 hover:bg-dark-600 text-light-500 border-light-500 border-0 disabled:bg-dark-100',
      default:
        'bg-default-500 hover:bg-default-600 text-light-500 border-light-500 border-0 disabled:bg-default-100',
      success:
        'bg-success-500 hover:bg-success-600 text-light-500 border-light-500 border-0 disabled:bg-success-100',
      warning:
        'bg-warning-500 hover:bg-warning-600 text-dark-500 border-dark-500 border-0 disabled:bg-warning-100',
      danger:
        'bg-danger-500 hover:bg-danger-600 text-light-500 border-light-500 border-0 disabled:bg-danger-100',
      info: 'bg-info-500 hover:bg-info-600 text-light-500 border-light-500 border-0 disabled:bg-info-100',
      active:
        'bg-active-500 hover:bg-active-600 text-light-500 border-light-500 border-0 disabled:bg-active-100'
    },
    outlined: {
      primary:
        'bg-transparent border text-primary-500 border-primary-500 hover:text-primary-600 hover:border-primary-600 hover:bg-primary-50 disabled:text-primary-100 disabled:border-primary-100',
      secondary:
        'bg-transparent border text-secondary-500 border-secondary-500 hover:text-secondary-600 hover:border-secondary-600 hover:bg-secondary-50 disabled:text-secondary-100 disabled:border-secondary-100',
      light:
        'bg-transparent border text-light-500 border-light-500 hover:text-light-600 hover:border-light-600 disabled:text-light-100 disabled:border-light-100',
      dark: 'bg-transparent border text-dark-500 border-dark-500 hover:text-dark-600 hover:border-dark-600 hover:bg-dark-50 disabled:text-dark-100 disabled:border-dark-100',
      default:
        'bg-transparent border text-default-500 border-default-500 hover:text-default-600 hover:border-default-600 hover:bg-default-50 disabled:text-default-100 disabled:border-default-100',
      success:
        'bg-transparent border text-success-500 border-success-500 hover:text-success-600 hover:border-success-600 hover:bg-success-50 disabled:text-success-100 disabled:border-success-100',
      warning:
        'bg-transparent border text-warning-500 border-warning-500 hover:text-warning-600 hover:border-warning-600 hover:bg-warning-50 disabled:text-warning-100 disabled:border-warning-100',
      danger:
        'bg-transparent border text-danger-500 border-danger-500 hover:text-danger-600 hover:border-danger-600 hover:bg-danger-50 disabled:text-danger-100 disabled:border-danger-100',
      info: 'bg-transparent border text-info-500 border-info-500 hover:text-info-600 hover:border-info-600 hover:bg-info-50 disabled:text-info-100 disabled:border-info-100',
      active:
        'bg-transparent border text-active-500 border-active-500 hover:text-active-600 hover:border-active-600 hover:bg-active-50 disabled:text-primary-100 disabled:border-primary-100'
    },
    soft: {
      primary: 'bg-primary-100 hover:bg-primary-200 text-primary-500 disabled:text-primary-200 disabled:bg-primary-50',
      secondary: 'bg-secondary-100 hover:bg-secondary-200 text-secondary-500 disabled:text-secondary-200 disabled:bg-secondary-50',
      light: 'bg-default-50 hover:bg-default-100 text-light-700 disabled:text-light-200 disabled:bg-light-50',
      dark: 'bg-dark-100 hover:bg-dark-200 text-dark-500 disabled:text-dark-200 disabled:bg-dark-50',
      default: 'bg-default-100 hover:bg-default-200 text-default-500 disabled:text-default-200 disabled:bg-default-50',
      success: 'bg-success-100 hover:bg-success-200 text-success-500 disabled:text-success-200 disabled:bg-success-50',
      warning: 'bg-warning-100 hover:bg-warning-200 text-warning-500 disabled:text-warning-200 disabled:bg-warning-50',
      danger: 'bg-danger-100 hover:bg-danger-200 text-danger-500 disabled:text-danger-200 disabled:bg-danger-50',
      info: 'bg-info-100 hover:bg-info-200 text-info-500 disabled:text-info-200 disabled:bg-info-50',
      active: 'bg-active-100 hover:bg-active-200 text-active-500 disabled:text-active-200 disabled:bg-active-50'
    }
  },
  radius: {
    none: 'rounded-none',
    soft: 'rounded',
    round: 'rounded-full'
  },
  size: {
    sm: 'text-sm/8 px-4',
    base: 'text-base/9 px-5',
    lg: 'text-base/9 px-5 font-semibold',
    xl: 'text-base/10 px-6 font-semibold'
  },
  transition: 'hover:scale-105 transition-all duration-200',
  block: 'w-full'
}

export interface IButtonProps {
  color?: commonTypes['color']
  variant?: commonTypes['variant']
  size?: commonTypes['size']
  radius?: commonTypes['radius']
  loading?: boolean
  scaleUp?: boolean
  block?: boolean
  // children?: React.ReactNode
}

const Button = forwardRef<
  ElementRef<typeof RAButton>,
  ComponentPropsWithoutRef<typeof RAButton> & IButtonProps
>(function ReactAriaButton(props, ref) {
  const {
    color = 'primary',
    className,
    type = 'button',
    size = 'base',
    variant = 'solid',
    radius = 'none',
    scaleUp = false,
    block = false,
    loading = false,
    children,
    ...rest
  } = props

  const btnClass = cm(
    btnStyles.base,
    scaleUp ? btnStyles.transition : '',
    block ? btnStyles.block : 'w-auto',
    btnStyles.radius[radius],
    btnStyles.variant[variant][color],
    btnStyles.size[size],
    className
  )

  return (
    <RAButton ref={ref} data-loading={loading} className={btnClass} type={type} {...rest}>
      {loading && (
        <Spinner
          size={size === 'sm' ? size : 'base'}
          color={variant === 'solid' ? 'inherit' : color}
        />
      )}
      {children as any}
    </RAButton>
  )
})

Button.displayName = 'Button'

export default Button

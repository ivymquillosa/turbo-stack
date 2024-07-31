import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { ToggleButton as RAToggleButton } from 'react-aria-components'
import { commonTypes } from './types'
import { cm } from '@stack/classnames'

const toggleStyles = {
    base: 'flex gap-2 items-center justify-center outline-none',
    variant: {
      flat: {
        primary: 'bg-transparent selected:bg-primary-50 hover:bg-primary-50 text-primary-500',
        secondary: 'bg-transparent selected:bg-secondary-50 hover:bg-secondary-50 text-secondary-500',
        light: 'bg-transparent selected:bg-light-50 hover:bg-light-50 text-light-500',
        dark: 'bg-transparent selected:bg-dark-50 hover:bg-dark-50 text-dark-500',
        default: 'bg-transparent selected:bg-default-50 hover:bg-default-50 text-default-500',
        success: 'bg-transparent selected:bg-success-50 hover:bg-success-50 text-success-500',
        warning: 'bg-transparent selected:bg-warning-50 hover:bg-warning-50 text-warning-500',
        danger: 'bg-transparent selected:bg-danger-50 hover:bg-danger-50 text-danger-500',
        info: 'bg-transparent selected:bg-info-50 hover:bg-info-50 text-info-500',
        active: 'bg-transparent selected:bg-active-50 hover:bg-active-50 text-active-500'
      },
      solid: {
        primary:
          'bg-primary-500 selected:bg-primary-600 hover:bg-primary-600 text-light-500 border-light-500 border-0',
        secondary:
          'bg-secondary-500 selected:bg-secondary-600 hover:bg-secondary-600 text-light-500 border-light-500 border-0',
        light:
          'bg-light-500 selected:bg-light-600 hover:bg-light-600 text-dark-500 border-dark-500 border-0',
        dark: 'bg-dark-500 selected:bg-dark-600 hover:bg-dark-600 text-light-500 border-light-500 border-0',
        default:
          'bg-default-500 selected:bg-default-600 hover:bg-default-600 text-light-500 border-light-500 border-0',
        success:
          'bg-success-500 selected:bg-success-600 hover:bg-success-600 text-light-500 border-light-500 border-0',
        warning:
          'bg-warning-500 selected:bg-warning-600 hover:bg-warning-600 text-dark-500 border-dark-500 border-0',
        danger:
          'bg-danger-500 selected:bg-danger-600 hover:bg-danger-600 text-light-500 border-light-500 border-0',
        info: 'bg-info-500 selected:bg-info-600 hover:bg-info-600 text-light-500 border-light-500 border-0',
        active:
          'bg-active-500 selected:bg-active-600 hover:bg-active-600 text-light-500 border-light-500 border-0'
      },
      outlined: {
        primary:
          'bg-transparent border text-primary-500 border-primary-500 selected:text-primary-600 selected:border-primary-600 selected:bg-primary-50 hover:bg-primary-50',
        secondary:
          'bg-transparent border text-secondary-500 border-secondary-500 selected:text-secondary-600 selected:border-secondary-600 selected:bg-secondary-50 hover:bg-secondary-50',
        light:
          'bg-transparent border text-light-500 border-light-500 selected:text-light-600 selected:border-light-600 selected:bg-light-200 hover:bg-light-200',
        dark: 'bg-transparent border text-dark-500 border-dark-500 selected:text-dark-600 selected:border-dark-600 selected:bg-dark-50 hover:bg-dark-50',
        default:
          'bg-transparent border text-default-500 border-default-500 selected:text-default-600 selected:border-default-600 selected:bg-default-50 hover:bg-default-50',
        success:
          'bg-transparent border text-success-500 border-success-500 selected:text-success-600 selected:border-success-600 selected:bg-success-50 hover:bg-success-50',
        warning:
          'bg-transparent border text-warning-500 border-warning-500 selected:text-warning-600 selected:border-warning-600 selected:bg-warning-50 hover:bg-warning-50',
        danger:
          'bg-transparent border text-danger-500 border-danger-500 selected:text-danger-600 selected:border-danger-600 selected:bg-danger-50 hover:bg-danger-50',
        info: 'bg-transparent border text-info-500 border-info-500 selected:text-info-600 selected:border-info-600 selected:bg-info-50 hover:bg-info-50',
        active:
          'bg-transparent border text-active-500 border-active-500 selected:text-active-600 selected:border-active-600 selected:bg-active-50 hover:bg-active-50'
      },
      soft: {
        primary: 'bg-primary-100 selected:bg-primary-200 hover:bg-primary-200 text-primary-500',
        secondary: 'bg-secondary-100 selected:bg-secondary-200 hover:bg-secondary-200 text-secondary-500',
        light: 'bg-default-50 selected:bg-default-100 hover:bg-default-100 text-light-700',
        dark: 'bg-dark-100 selected:bg-dark-200 hover:bg-dark-200 text-dark-500',
        default: 'bg-default-100 selected:bg-default-200 hover:bg-default-200 text-default-500',
        success: 'bg-success-100 selected:bg-success-200 hover:bg-success-200 text-success-500',
        warning: 'bg-warning-100 selected:bg-warning-200 hover:bg-warning-200 text-warning-500',
        danger: 'bg-danger-100 selected:bg-danger-200 hover:bg-danger-200 text-danger-500',
        info: 'bg-info-100 selected:bg-info-200 hover:bg-info-200 text-info-500',
        active: 'bg-active-100 selected:bg-active-200 hover:bg-active-200 text-active-500'
      }
    },
    radius: {
      none: 'rounded-none',
      soft: 'rounded',
      round: 'rounded-full'
    },
    size: {
      sm: 'text-sm/8 min-w-8 px-2',
      base: 'text-base/9 min-w-9 px-3',
      lg: 'text-base/9 min-w-9 px-3 font-semibold',
      xl: 'text-base/10 min-w-10 px-4 font-semibold'
    },
    transition: 'hover:scale-105 transition-all duration-200',
    block: 'w-full'
  }

  
  export interface IToggleProps {
    color?: commonTypes['color']
    variant?: commonTypes['variant']
    size?: commonTypes['size']
    radius?: commonTypes['radius']
    scaleUp?: boolean
    block?: boolean
  }

const ToggleButton = forwardRef<
    ElementRef<typeof RAToggleButton>,
    ComponentPropsWithoutRef<typeof RAToggleButton> & IToggleProps
    >(function ReactAriaToggleButton(props, ref) {
    const {
        color = 'primary',
        className,
        type = 'button',
        size = 'base',
        variant = 'outlined',
        radius = 'soft',
        scaleUp = false,
        block = false,
        children,
        ...rest
    } = props

    const toggleClass = cm(
        toggleStyles.base,
        scaleUp ? toggleStyles.transition : '',
        block ? toggleStyles.block : 'w-auto',
        toggleStyles.radius[radius],
        toggleStyles.variant[variant][color],
        toggleStyles.size[size],
        className
    )

    return (
        <RAToggleButton ref={ref} className={toggleClass} type={type} {...rest}>
            {children}
        </RAToggleButton>
    )

})


export default ToggleButton

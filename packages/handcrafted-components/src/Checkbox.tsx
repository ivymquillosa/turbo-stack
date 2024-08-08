import { HtmlHTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cm } from '@stack/classnames'
import { commonTypes } from './types'

const checkboxVariants = cva('flex items-center justify-center gap-2', {
  variants: {
    color: {
      primary: 'text-primary-500',
      secondary: 'text-secondary-500',
      danger: 'text-danger-500',
      warning: 'text-warning-500',
      success: 'text-success-500',
      info: 'text-info-500',
      default: 'text-default-500',
      active: 'text-active-500',
      light: 'text-light-500',
      dark: 'text-dark-500',
      inherit: 'text-inherit'
    },
    boxColor: {
      primary: 'border border-primary-500',
      secondary: 'border border-secondary-500',
      danger: 'border border-danger-500',
      warning: 'border border-warning-500',
      success: 'border border-success-500',
      info: 'border border-info-500',
      default: 'border border-default-500',
      active: 'border border-active-500',
      light: 'border border-light-500',
      dark: 'border border-dark-500',
      inherit: 'border border-inherit'
    },
    size: {
      sm: 'h-3 w-3 text-sm/8',
      base: 'h-4 w-4 text-base/9',
      lg: 'h-5 w-5 text-lg/9',
      xl: 'h-6 w-6 text-xl/9'
    },
    radius: {
      none: 'rounded-none',
      soft: 'rounded',
      round: ''
    }
  },

  defaultVariants: {
    color: null,
    boxColor: null,
    size: null
  }
})

export interface ICheckboxProps
  extends Omit<HtmlHTMLAttributes<HTMLInputElement>, 'className'> {
  color?: commonTypes['color']
  size?: commonTypes['size']
  radius?: commonTypes['radius']
  label?: string
  className?: string
}

const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  (
    {
      color = 'primary',
      size = 'base',
      radius = 'soft',
      label,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <label className={cm(checkboxVariants({ color, size }), 'w-fit')}>
        <div
          className={cm(checkboxVariants({ boxColor: color, radius, size }))}
        >
          <input
            ref={ref}
            className={cm(checkboxVariants({ color, size }))}
            type="checkbox"
            {...props}
          />
        </div>
        {label}
      </label>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox

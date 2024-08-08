import {
  ElementRef,
  HtmlHTMLAttributes,
  LabelHTMLAttributes,
  forwardRef
} from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cm } from '@stack/classnames'
import { LuCheck } from 'react-icons/lu'
import { commonTypes } from './types'

const radioVariants = cva('flex items-center justify-center gap-2', {
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
    }
  },

  defaultVariants: {
    color: null,
    boxColor: null,
    size: null
  }
})

export interface IRadioProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, 'className'> {
  color?: commonTypes['color']
  size?: commonTypes['size']
  label?: string
  className?: string
}

const Radio = forwardRef<HTMLInputElement, IRadioProps>(
  ({ color = 'primary', size = 'base', label, className, ...props }, ref) => {
    return (
      <label className={cm(radioVariants({ color, size }), 'w-fit')}>
        <div
          className={cm(
            radioVariants({ boxColor: color, size }),
            'rounded-full'
          )}
        >
          <input
            ref={ref}
            className={cm(radioVariants({ color, size }))}
            type="radio"
            {...props}
          />
        </div>
        {label}
      </label>
    )
  }
)

Radio.displayName = 'Radio'

export default Radio

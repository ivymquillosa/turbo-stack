import { type ElementRef, forwardRef } from 'react'
import { CheckboxProps, Checkbox as RACheckbox } from 'react-aria-components'
import { cva, type VariantProps } from 'class-variance-authority'
import { cm } from '@stack/classnames'
import { LuCheck } from 'react-icons/lu'

const radioVariants = cva('flex items-center justify-center gap-2', {
  variants: {
    color: {
      primary: 'border-primary-500 text-primary-500',
      secondary: 'border-secondary-500 text-secondary-500',
      danger: 'border-danger-500 text-danger-500',
      warning: 'border-warning-500 text-warning-500',
      success: 'border-success-500 text-success-500',
      info: 'border-info-500 text-info-500',
      default: 'border-default-500 text-default-500',
      active: 'border-active-500 text-active-500',
      light: 'border-light-500 text-light-500',
      dark: 'border-dark-500 text-dark-500',
      inherit: 'border-inherit text-inherit'
    },
    size: {
      sm: 'h-3 w-3 text-sm/8',
      base: 'h-4 w-4 text-base/9',
      lg: 'h-5 w-5 text-lg/9',
      xl: 'h-6 w-6 text-xl/9'
    },
    for: {
      text: 'h-unset w-fit border-none',
      box: 'border'
    }
  },
  compoundVariants: [
    {
      for: 'box',
      class: 'border-inherit'
    }
  ],
  defaultVariants: {
    for: 'text',
    color: 'primary',
    size: 'base'
  }
})

export interface ICheckboxProps
  extends Omit<CheckboxProps, 'children'>,
    Omit<VariantProps<typeof radioVariants>, 'for'> {
  children?: CheckboxProps['children']
}

const Radio = forwardRef<ElementRef<typeof RACheckbox>, ICheckboxProps>(
  ({ color, size, className, children, ...props }, ref) => {
    return (
      <RACheckbox
        ref={ref}
        defaultSelected={props.defaultSelected}
        className={cm(radioVariants({ color, size, className }))}
        {...props}
      >
        {({ isSelected }) => {
          return (
            <>
              <div className={cm(radioVariants({ color, size, for: 'box' }))}>
                {isSelected && <LuCheck />}
              </div>
              {children}
            </>
          )
        }}
      </RACheckbox>
    )
  }
)

Radio.displayName = 'Radio'

export default Radio

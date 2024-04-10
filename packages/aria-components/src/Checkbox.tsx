import { ElementRef, forwardRef } from 'react'
import { CheckboxProps, Checkbox as RACheckbox } from 'react-aria-components'
import { cva, type VariantProps } from 'class-variance-authority'
import { cm } from '@stack/classnames'
import { LuCheck } from 'react-icons/lu'

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
    }
  },
  defaultVariants: {
    color: null,
    boxColor: null,
    size: null
  }
})

export interface ICheckboxProps
  extends Omit<CheckboxProps, 'children'>,
    Omit<VariantProps<typeof checkboxVariants>, 'boxColor'> {
  children?: CheckboxProps['children']
}

const Checkbox = forwardRef<ElementRef<typeof RACheckbox>, ICheckboxProps>(
  (
    { color = 'primary', size = 'base', className, children, ...props },
    ref
  ) => {
    return (
      <RACheckbox
        ref={ref}
        className={cm(checkboxVariants({ color, size, className }), 'w-fit')}
        {...props}
      >
        {({ isSelected }) => {
          return (
            <>
              <div className={cm(checkboxVariants({ boxColor: color, size }))}>
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

Checkbox.displayName = 'Checkbox'

export default Checkbox

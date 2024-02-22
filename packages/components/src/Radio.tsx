import { type ElementRef, forwardRef } from 'react'
import { CheckboxProps, Checkbox as RACheckbox } from 'react-aria-components'
import { cva, type VariantProps } from 'class-variance-authority'
import { cm } from '@stack/classnames'
import { LuCheck } from 'react-icons/lu'
  
const radioVariants = cva(
  'flex gap-2 items-center justify-center',
  {
    variants:{
      color: {
        primary : 'text-primary-500 border-primary-500',
        secondary : 'text-secondary-500 border-secondary-500',
        danger : 'text-danger-500 border-danger-500',
        warning : 'text-warning-500 border-warning-500',
        success : 'text-success-500 border-success-500',
        info : 'text-info-500 border-info-500',
        default : 'text-default-500 border-default-500',
        active : 'text-active-500 border-active-500',
        light : 'text-light-500 border-light-500',
        dark : 'text-dark-500 border-dark-500',
        inherit: 'text-inherit border-inherit'
      },
      size: {
        sm : 'w-3 h-3 text-sm/8',
        base : 'w-4 h-4 text-base/9',
        lg : 'w-5 h-5 text-lg/9',
        xl: 'w-6 h-6 text-xl/9'
      },
      for: {
        text:'border-none w-fit h-unset',
        box: 'border'
      }
    },
    compoundVariants:[
      {
        for: 'box',
        class: 'border-inherit'
      }
    ],
    defaultVariants: {
      for:'text',
      color: 'primary',
      size: 'base',
    }
  }
)

export interface ICheckboxProps extends
  Omit <CheckboxProps, 'children'>,
  Omit <VariantProps<typeof radioVariants>, 'for'>
    {
      children?: CheckboxProps['children']
    }

const Radio = forwardRef<ElementRef<typeof RACheckbox>, ICheckboxProps>(
  ({color, size, className, children, ...props}, ref)=> {
    return (
      <RACheckbox
        ref={ref}
        defaultSelected={props.defaultSelected}
        className={cm(radioVariants({color, size, className }))}
        {...props}
      >
        {({isSelected})=>{
          return(
            <>
              <div className={cm(radioVariants({ color, size, for:'box'}))}>
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
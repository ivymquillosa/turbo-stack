import { ElementRef, forwardRef } from 'react';
import {Switch as RASwitch, type SwitchProps} from 'react-aria-components';
import { VariantProps, cva } from 'class-variance-authority';
import { cm } from '@stack/classnames';

const switchVariants = cva(
  'flex',
  {
    variants:{
      color: {
        primary : 'text-primary-500',
        secondary : 'text-secondary-500',
        danger : 'text-danger-500',
        warning : 'text-warning-500',
        success : 'text-success-500',
        info : 'text-info-500',
        default : 'text-default-500',
        active : 'text-active-500',
        light : 'text-light-500',
        dark : 'text-dark-500',
        inherit: 'text-inherit'
      },
      size: {
        sm : 'w-6 p-px',
        base : 'w-8 p-px',
        lg : 'w-10 p-px',
        xl: 'w-12 p-px',
      },
      switchColor: {
        primary : 'bg-primary-500 group-pressed:bg-primary-600 group-selected:bg-primary-700 group-selected:group-pressed:bg-primary-800 outline-none group-focus-visible:ring-1',
        secondary : 'bg-secondary-500 group-pressed:bg-secondary-600 group-selected:bg-secondary-700 group-selected:group-pressed:bg-secondary-800 outline-none group-focus-visible:ring-1',
        danger : 'bg-danger-500 group-pressed:bg-danger-600 group-selected:bg-danger-700 group-selected:group-pressed:bg-danger-800 outline-none group-focus-visible:ring-1',
        warning : 'bg-warning-500 group-pressed:bg-warning-600 group-selected:bg-danger-700 group-selected:group-pressed:bg-danger-800 outline-none group-focus-visible:ring-1',
        success : 'bg-success-500 group-pressed:bg-success-600 group-selected:bg-success-700 group-selected:group-pressed:bg-success-800 outline-none group-focus-visible:ring-1',
        info : 'bg-info-500 group-pressed:bg-info-600 group-selected:bg-info-700 group-selected:group-pressed:bg-info-800 outline-none group-focus-visible:ring-1',
        default : 'bg-default-500 group-pressed:bg-default-600 group-selected:bg-default-700 group-selected:group-pressed:bg-default-800 outline-none group-focus-visible:ring-1',
        active : 'bg-active-500 group-pressed:bg-active-600 group-selected:bg-active-700 group-selected:group-pressed:bg-active-800 outline-none group-focus-visible:ring-1',
        light : 'bg-light-500 group-pressed:bg-light-600 group-selected:bg-light-700 group-selected:group-pressed:bg-light-800 outline-none group-focus-visible:ring-1',
        dark : 'bg-dark-500 group-pressed:bg-dark-600 group-selected:bg-dark-700 group-selected:group-pressed:bg-dark-800 outline-none group-focus-visible:ring-1',
        inherit: 'bg-inherit border-inherit'
      },
      circleSize:{
        sm : 'w-3 h-3 group-selected:translate-x-[85%]',
        base : 'w-4 h-4 group-selected:translate-x-[90%]',
        lg : 'w-5 h-5 group-selected:translate-x-[90%]',
        xl: 'w-6 h-6 group-selected:translate-x-[90%]'
      }, 
      textSize: {
        sm : 'text-sm/8',
        base : 'text-base/9',
        lg : 'text-lg/9',
        xl: 'text-xl/9'
      },
    },

    defaultVariants: {
      color: null,
      size: null,
      switchColor: null,
      circleSize: null,
      textSize: null,
    }
  }
)


export interface ISwitchProps extends 
Omit<SwitchProps, 'children'>, 
Omit <VariantProps<typeof switchVariants>, 'switchColor' | 'circleSize'| 'textSize'>
  {
    children: React.ReactNode
  }

const Switch = forwardRef<ElementRef<typeof RASwitch>, ISwitchProps>(
  ({children, size='base', className, color='primary', ...props},ref)=> {
    return (
      <RASwitch
        ref={ref} 
        {...props}
        className={cm('group gap-2 items-center justify-center', switchVariants({textSize:size, color, className}))}
      >
        <div className={cm('rounded-full',switchVariants({size, switchColor:color}))}>
          <span className={cm('transform rounded-full bg-white shadow transition duration-200 ease-in-out translate-x-0', switchVariants({circleSize:size, size:null, switchColor: null}))} />
        </div>
        {children}
      </RASwitch>
    );
  }
)

Switch.displayName = 'Switch'

export default Switch

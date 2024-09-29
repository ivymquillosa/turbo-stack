import React from 'react';
import { cva } from 'class-variance-authority';
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { RadioGroupProps } from '@radix-ui/react-radio-group';
import { Label } from '@radix-ui/react-label';
import { cm } from '@stack/classnames';
import { CheckIcon } from 'lucide-react';

const radioVariants = cva('text-base', {
    variants: {
      color: {
        primary: 'border-primary-500 text-primary-500',
        secondary: 'border-secondary-500 text-secondary-500',
        danger: 'border-danger-500 text-danger-500',
        warning: 'border-warning-500 text-warning-500',
        success: 'border-success-500 text-success-500',
        info: 'border-info-500 text-info-500',
        default: 'border-default-500 text-default-500',
      },
    },
    defaultVariants: {
      color: 'default',
    //   size: 'base'
    }
  })

export interface IRadioGroupProps extends RadioGroupProps {
    radioItems:{
        id?: string
        label?: string
        value?: string
        isDiable?: boolean
    }[],
    color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'default'
}


const RARadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cm("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RARadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cm(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <CheckIcon className="h-3.5 w-3.5 fill-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName


const RadioGroup: React.FC<IRadioGroupProps> = ({ radioItems, color='default', className, ...props }) => {
    return (
        <RARadioGroup className={cm(radioVariants({color}), className)} {...props}>
            {radioItems?.map((r, index) => (
                <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem className={cm(radioVariants({color}))} disabled={r?.isDiable} value={r?.value ?? ''} id={r.id} />
                    <Label htmlFor={r.id}>{r.label}</Label>
                </div>
            ))}
        </RARadioGroup>
      )
};

RadioGroup.displayName = 'RadioGroup'; // Set a display name for better debugging

export default RadioGroup;

import React from 'react';
import * as RACheckbox from '@radix-ui/react-checkbox';
import { cva } from 'class-variance-authority';
import { cm } from '@stack/classnames';
import { CheckIcon } from 'lucide-react';

const radioVariants = cva('text-base', {
    variants: {
      color: {
        primary: 'border bg-transparent border-primary-500 data-[state=checked]:bg-primary-500 text-white',
        secondary: 'border bg-transparent border-secondary-500 data-[state=checked]:bg-secondary-500 text-white',
        danger: 'border bg-transparent border-error-500 data-[state=checked]:bg-error-500 text-white',
        warning: 'border bg-transparent border-warning-500 data-[state=checked]:bg-warning-500 text-white',
        success: 'border bg-transparent border-success-500 data-[state=checked]:bg-success-500 text-white',
        info: 'border bg-transparent border-info-500 data-[state=checked]:bg-info-500 text-white',
        default: 'border bg-transparent border-default-500 data-[state=checked]:bg-default-500 text-white',
      },
    },
    defaultVariants: {
      color: 'default',
    }
  })

export interface ICheckboxProps extends RACheckbox.CheckboxProps {
    color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'default'
}

const Checkbox: React.FC<ICheckboxProps> = ({ color='default', className, ...props }) => {
    return (
        <RACheckbox.Root
            className={cm(
            "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
            radioVariants({color}),
            className
            )}
            {...props}
        >
        <RACheckbox.Indicator
        className={cm("flex items-center justify-center text-current")}
        >
        <CheckIcon className="h-4 w-4" />
    </RACheckbox.Indicator>
  </RACheckbox.Root>
      )
};

Checkbox.displayName = 'Checkbox'; // Set a display name for better debugging

export default Checkbox;

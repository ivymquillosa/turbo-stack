"use client"

import * as React from "react"
import {
  CaretSortIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons"
import * as SelectPrimitive from "@radix-ui/react-select"
import { SelectProps } from '@radix-ui/react-select'
import { cva } from 'class-variance-authority'
import { cm } from '@stack/classnames'

const selectVariants = cva('flex items-center justify-center', {
  variants: {
    // size: {
    //   sm: 'gap-2 px-2 text-xs/5',
    //   base: 'gap-2 px-2 text-sm/6',
    //   lg: 'gap-2 px-3 text-sm/7',
    //   xl: 'gap-2 px-4 text-base/8'
    // },
    radius: {
      none: 'rounded-none',
      soft: 'rounded',
      round: 'rounded-full'
    }
  },
  defaultVariants: {
    // size: 'base',
    radius: 'round'
  }
})

const selectStyles = {
  variant: {
    ghost: {
      primary:
        'bg-transparent px-0 !rounded-b-none text-primary-500 border-b border-primary-500',
      secondary:
        'bg-transparent px-0 !rounded-b-none text-secondary-500 border-b border-secondary-500',
      default:
        'bg-transparent px-0 !rounded-b-none text-default-600 border-b border-default-500',
      success:
        'bg-transparent px-0 !rounded-b-none text-success-500 border-b border-success-500',
      warning:
        'bg-transparent px-0 !rounded-b-none text-warning-500 border-b border-warning-500',
      danger:
        'bg-transparent px-0 !rounded-b-none text-danger-500 border-b border-danger-500',
      info: 'bg-transparent px-0 !rounded-b-none text-info-500 border-b border-info-500',
      },
    fill: {
      primary:
        'pt-3 bg-primary-500 hover:bg-primary-600 text-light-500 border-light-500 border-0',
      secondary:
        'pt-3 bg-secondary-500 hover:bg-secondary-600 text-light-500 border-light-500 border-0',
     default:
        'pt-3 bg-default-500 hover:bg-default-600 text-light-500 border-light-500 border-0',
      success:
        'pt-3 bg-success-500 hover:bg-success-600 text-light-500 border-light-500 border-0',
      warning:
        'pt-3 bg-warning-500 hover:bg-warning-600 text-dark-500 border-dark-500 border-0',
      danger:
        'pt-3 bg-danger-500 hover:bg-danger-600 text-light-500 border-light-500 border-0',
      info: 'pt-3 bg-info-500 hover:bg-info-600 text-light-500 border-light-500 border-0',
     },
    outline: {
      primary:
        'bg-transparent border text-primary-500 border-primary-500 hover:text-primary-600 hover:border-primary-600',
      secondary:
        'bg-transparent border text-secondary-500 border-secondary-500 hover:text-secondary-600 hover:border-secondary-600',
      default:
        'bg-transparent border text-default-600 border-default-500 hover:text-default-600 hover:border-default-600',
      success:
        'bg-transparent border text-success-500 border-success-500 hover:text-success-600 hover:border-success-600',
      warning:
        'bg-transparent border text-warning-500 border-warning-500 hover:text-warning-600 hover:border-warning-600',
      danger:
        'bg-transparent border text-danger-500 border-danger-500 hover:text-danger-600 hover:border-danger-600',
      info: 'bg-transparent border text-info-500 border-info-500 hover:text-info-600 hover:border-info-600',
      }
  },
  labelVariant: {
    ghost: '-top-1 left-0 bg-white',
    fill: 'top-1 left-2',
    outline: '-top-1.5 left-2 bg-white',
  }
}

export interface ISelectProps extends SelectProps {
  variant?: 'ghost' | 'fill' | 'outline'
  color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'default'
  className?: string;
  radius?: 'none' | 'soft' |'round'
  label?: string
  icon?: React.ReactNode
  placeHolder?: string
  selectOptions:{
    id?: string
    label?: string
    value: string
    isDiable?: boolean
  }[],
}

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cm(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <CaretSortIcon className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cm(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUpIcon />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cm(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDownIcon />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cm(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-white text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cm(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cm("px-2 py-1.5 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cm(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cm("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName



// Reusable Select

const Select = React.forwardRef<HTMLDivElement, ISelectProps>(
  (
    {
      variant = 'outline',
      color = 'default',
      radius,
      className,
      label,
      icon,
      placeHolder,
      selectOptions,
      ...props
    },
    ref
  ) => {

    return (
      <div ref={ref}
        className={cm(
          selectStyles.variant[variant][color],
          selectVariants({ radius, className }),
          'relative gap-2 px-2'
        )}
      >
        <span
          className={cm(
            selectStyles.labelVariant[variant],
            'absolute text-[10px] font-light px-0.5 leading-none text-inherit'
          )}
        >
          {label}
        </span>
        {icon && icon}
        <SelectPrimitive.Root {...props}>
          <SelectTrigger className="w-full border-none shadow-none py-1.5 px-0">
            <SelectPrimitive.SelectValue placeholder={placeHolder} />
          </SelectTrigger>
          <SelectContent >
            {selectOptions?.map((s, index) => (
              <SelectItem key={index} disabled={s?.isDiable} value={s?.value}>{s?.label}</SelectItem>
            ))}
          </SelectContent>
        </SelectPrimitive.Root>
      </div>
    )
  }
)

Select.displayName = 'Select'

export default Select

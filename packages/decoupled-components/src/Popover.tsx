import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Popover as RAPopover, PopoverProps } from 'react-aria-components'

export interface IPopoverProps extends Omit<PopoverProps, 'children'> {
  children?: React.ReactNode
}

const PopoverContent = forwardRef<ElementRef<typeof RAPopover>, IPopoverProps>(
  (props, ref) => {
    return (
      <RAPopover
        ref={ref}
        {...props}
        className={({ isEntering, isExiting }) => `
        group w-[280px] rounded-lg bg-white ring-1 ring-black/10 drop-shadow-lg placement-top:mb-2 placement-bottom:mt-2
        ${
          isEntering
            ? 'duration-200 ease-out animate-in fade-in placement-top:slide-in-from-bottom-1 placement-bottom:slide-in-from-top-1'
            : ''
        }
        ${
          isExiting
            ? 'duration-150 ease-in animate-out fade-out placement-top:slide-out-to-bottom-1 placement-bottom:slide-out-to-top-1'
            : ''
        }
      `}
      />
    )
  }
)
PopoverContent.displayName = PopoverContent.displayName

export { PopoverContent }

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { TooltipTrigger, Tooltip, OverlayArrow } from 'react-aria-components'

const Trigger = TooltipTrigger
// const Content = Tooltip

const Content = forwardRef<
  ElementRef<typeof Tooltip>,
  ComponentPropsWithoutRef<typeof Tooltip>
>((props, ref) => {
  return (
    <Tooltip ref={ref} {...props}>
      <>
        <OverlayArrow>
          <svg width={12} height={12} viewBox="0 0 12 12">
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </OverlayArrow>
        {props.children}
      </>
    </Tooltip>
  )
})
Content.displayName = Content.displayName

export { Trigger, Content }

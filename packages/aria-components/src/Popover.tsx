import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Popover } from 'react-aria-components'

// const Arrow = Popover

const Content = forwardRef<
  ElementRef<typeof Popover>,
  ComponentPropsWithoutRef<typeof Popover>
>((props, ref) => {
  return (
    <Popover
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
    >
      <>
        {/* <OverlayArrow>
          <svg width={12} height={12} viewBox="0 0 12 12">
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </OverlayArrow> */}
        {props.children}
      </>
    </Popover>
  )
})

Content.displayName = Content.displayName

export { Content }

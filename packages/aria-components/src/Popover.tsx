import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { OverlayArrow, Popover } from 'react-aria-components'

// const Arrow = Popover

const Content = forwardRef<
  ElementRef<typeof Popover>,
  ComponentPropsWithoutRef<typeof Popover>
>((props, ref) => {
  return (
    <Popover ref={ref} {...props}
      className={({ isEntering, isExiting }) => `
        w-[280px] placement-bottom:mt-2 placement-top:mb-2 group rounded-lg drop-shadow-lg ring-1 ring-black/10 bg-white
        ${
        isEntering
          ? 'animate-in fade-in placement-bottom:slide-in-from-top-1 placement-top:slide-in-from-bottom-1 ease-out duration-200'
          : ''
      }
        ${
        isExiting
          ? 'animate-out fade-out placement-bottom:slide-out-to-top-1 placement-top:slide-out-to-bottom-1 ease-in duration-150'
          : ''
      }
    `}
    >
      <>
        <OverlayArrow>
          <svg width={12} height={12} viewBox="0 0 12 12">
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </OverlayArrow>
        {props.children}
      </>
    </Popover>
  )
})
Content.displayName = Content.displayName



export { Content }

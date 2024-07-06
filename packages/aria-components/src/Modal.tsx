import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Modal, ModalOverlay } from 'react-aria-components'

// const Overlay = ModalOverlay
// const Content = Modal

const Overlay = forwardRef<
  ElementRef<typeof ModalOverlay>,
  ComponentPropsWithoutRef<typeof ModalOverlay>
>((props, ref) => {
  return (
    <ModalOverlay
      ref={ref}
      {...props}
      className={({ isEntering, isExiting }) => `
            fixed inset-0 z-10 flex min-h-full items-center justify-center overflow-y-auto bg-black/25 p-4 text-center backdrop-blur
            ${isEntering ? 'duration-300 ease-out animate-in fade-in' : ''}
            ${isExiting ? 'duration-200 ease-in animate-out fade-out' : ''}
        `}
    >
      {props.children}
    </ModalOverlay>
  )
})
Overlay.displayName = Overlay.displayName

const Content = forwardRef<
  ElementRef<typeof Modal>,
  ComponentPropsWithoutRef<typeof Modal>
>((props, ref) => {
  return (
    <Modal
      ref={ref}
      {...props}
      className={({ isEntering, isExiting }) => `
            w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl
            ${isEntering ? 'duration-300 ease-out animate-in zoom-in-95' : ''}
            ${isExiting ? 'duration-200 ease-in animate-out zoom-out-95' : ''}
        `}
    >
      {props.children}
    </Modal>
  )
})
Content.displayName = Content.displayName

export { Content, Overlay }

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Dialog as RADialog, DialogTrigger } from 'react-aria-components'

const Trigger = DialogTrigger

const Content = forwardRef<
  ElementRef<typeof RADialog>,
  ComponentPropsWithoutRef<typeof RADialog>
>((props, ref) => {
  return (
    <RADialog ref={ref} {...props}>
      {props.children}
    </RADialog>
  )
})
Content.displayName = Content.displayName

export { Trigger, Content }

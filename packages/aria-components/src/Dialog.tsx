import { DialogTrigger, Dialog } from 'react-aria-components'

const Trigger = DialogTrigger
const Content = Dialog

// const Content = forwardRef<
//   ElementRef<typeof RADialog>,
//   ComponentPropsWithoutRef<typeof RADialog>
// >((props, ref) => {
//   return (
//     <RADialog ref={ref} {...props}>
//       {props.children}
//     </RADialog>
//   )
// })
// Content.displayName = Content.displayName

export { Trigger, Content }

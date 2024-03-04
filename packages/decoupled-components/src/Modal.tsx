import { Modal as RAModal, ModalOverlay } from 'react-aria-components'

const Content = RAModal
const Overlay = ModalOverlay

// const DialogContent = forwardRef<
//   ElementRef<typeof RADialog>,
//   ComponentPropsWithoutRef<typeof RADialog>
// >((props, ref) => {
//   return (
//     <RADialog ref={ref} {...props}>
//       {props.children}
//     </RADialog>
//   )
// })
// DialogContent.displayName = DialogContent.displayName

export { Content, Overlay }

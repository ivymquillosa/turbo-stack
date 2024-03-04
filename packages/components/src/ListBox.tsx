// import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { ListBox, ListBoxItem } from 'react-aria-components'

const Box = ListBox
const Item = ListBoxItem
// const Content = Tooltip

// const Item = forwardRef<
//   ElementRef<typeof GridListItem>,
//   ComponentPropsWithoutRef<typeof GridListItem>
// >((props, ref) => {
//   return (
//     <GridListItem ref={ref} {...props}/>
//   )
// })
// Item.displayName = Item.displayName

export { Box, Item }

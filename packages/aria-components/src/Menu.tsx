// import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Menu, MenuTrigger, MenuItem } from 'react-aria-components'

const Trigger = MenuTrigger
const Content = Menu
const Item = MenuItem
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

export { Trigger, Content, Item }

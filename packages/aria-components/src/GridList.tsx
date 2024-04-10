// import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { GridList, GridListItem } from 'react-aria-components'

const List = GridList
const Item = GridListItem
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

export { List, Item }

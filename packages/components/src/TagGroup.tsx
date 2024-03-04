// import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Tag, TagGroup, TagList } from 'react-aria-components'

const Group = TagGroup
const List = TagList
const Item = Tag
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

export { Group, List, Item }

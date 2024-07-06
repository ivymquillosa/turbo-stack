// import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import {
  Table,
  TableHeader,
  Column,
  ColumnResizer,
  TableBody,
  Cell,
  Row,
  ResizableTableContainer
} from 'react-aria-components'

const ResizableContainer = ResizableTableContainer
const Conatiner = Table
const Header = TableHeader
const HeaderColumn = Column
const HeaderColumnResizer = ColumnResizer
const Body = TableBody
const BodyRow = Row
const BodyCell = Cell

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

export {
  ResizableContainer,
  Conatiner,
  Header,
  HeaderColumn,
  HeaderColumnResizer,
  Body,
  BodyRow,
  BodyCell
}

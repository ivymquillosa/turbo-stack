import {
  Cell,
  Column,
  ColumnResizer,
  Group,
  ResizableTableContainer,
  Row,
  Table,
  TableBody,
  TableHeader
} from 'react-aria-components'
import type {
  CellProps,
  ColumnProps,
  RowProps,
  SortDescriptor
} from 'react-aria-components'
import { useMemo, useState } from 'react'
import { LuArrowUp } from 'react-icons/lu'

function StockTableExample() {
  let [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: 'symbol',
    direction: 'ascending'
  })
  let sortedItems = useMemo(() => {
    return stocks.sort((a, b) => {
      let first = a[sortDescriptor.column]
      let second = b[sortDescriptor.column]
      let cmp = first.localeCompare(second)
      if (sortDescriptor.direction === 'descending') {
        cmp *= -1
      }
      return cmp
    })
  }, [sortDescriptor])

  return (
    <div className="flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 p-8 md:col-span-2">
      <ResizableTableContainer className="relative max-h-[280px] w-full scroll-pt-[2.321rem] overflow-auto rounded-lg bg-white text-gray-600 shadow">
        <Table
          aria-label="Stocks"
          selectionMode="multiple"
          selectionBehavior="replace"
          sortDescriptor={sortDescriptor}
          onSortChange={setSortDescriptor}
          className="border-separate border-spacing-0"
        >
          <TableHeader>
            <StockColumn id="symbol" allowsSorting>
              Symbol
            </StockColumn>
            <StockColumn id="name" isRowHeader allowsSorting defaultWidth="3fr">
              Name
            </StockColumn>
            <StockColumn id="marketCap" allowsSorting>
              Market Cap
            </StockColumn>
            <StockColumn id="sector" allowsSorting>
              Sector
            </StockColumn>
            <StockColumn id="industry" allowsSorting defaultWidth="2fr">
              Industry
            </StockColumn>
          </TableHeader>
          <TableBody items={sortedItems}>
            {item => (
              <StockRow>
                <StockCell>
                  <span className="rounded border border-slate-200 bg-slate-100 px-1 font-mono group-selected:border-slate-800 group-selected:bg-slate-700">
                    ${item.symbol}
                  </span>
                </StockCell>
                <StockCell className="font-semibold">{item.name}</StockCell>
                <StockCell>{item.marketCap}</StockCell>
                <StockCell>{item.sector}</StockCell>
                <StockCell>{item.industry}</StockCell>
              </StockRow>
            )}
          </TableBody>
        </Table>
      </ResizableTableContainer>
    </div>
  )
}

function StockColumn(props: ColumnProps & { children: React.ReactNode }) {
  return (
    <Column
      {...props}
      className="sticky top-0 cursor-default whitespace-nowrap border-0 border-b border-solid border-slate-300 bg-slate-200 p-0 text-left font-bold outline-none first:rounded-tl-lg last:rounded-tr-lg"
    >
      {({ allowsSorting, sortDirection }) => (
        <div className="flex items-center py-1 pl-4">
          <Group
            role="presentation"
            tabIndex={-1}
            className="flex flex-1 items-center overflow-hidden rounded outline-none ring-slate-600 focus-visible:ring-2"
          >
            <span className="flex-1 truncate">{props.children}</span>
            {allowsSorting && (
              <span
                className={`ml-1 flex h-4 w-4 items-center justify-center transition ${
                  sortDirection === 'descending' ? 'rotate-180' : ''
                }`}
              >
                {sortDirection && <LuArrowUp width={8} height={10} />}
              </span>
            )}
          </Group>
          <ColumnResizer className="h-5 w-px cursor-col-resize rounded bg-slate-400 bg-clip-content px-[8px] py-1 ring-inset ring-slate-600 focus-visible:ring-2 resizing:w-[2px] resizing:bg-slate-800 resizing:pl-[7px]" />
        </div>
      )}
    </Column>
  )
}

function StockRow<T extends object>(props: RowProps<T>) {
  return (
    <Row
      {...props}
      className="group cursor-default outline-none even:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-slate-600 selected:bg-slate-600 selected:text-white selected:focus-visible:outline-white"
    />
  )
}

function StockCell(props: CellProps) {
  return (
    <Cell
      {...props}
      className={`truncate px-4 py-2 ${props.className} focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-slate-600 group-selected:focus-visible:outline-white`}
    />
  )
}

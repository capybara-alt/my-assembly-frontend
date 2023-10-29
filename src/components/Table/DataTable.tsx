"use client"
import { type ReactElement, useState } from 'react'
import {
  Box,
  DropdownMenu,
  Button,
  IconButton
} from '@radix-ui/themes'
import {
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
  ArrowUpIcon,
  ArrowDownIcon
} from '@radix-ui/react-icons'
import {
  ColumnDef,
  useReactTable,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel
} from '@tanstack/react-table'
import {
  Table,
  TableHeader,
  TableBody,
  TableCell,
  TableRowHeaderCell,
  TableRow,
  TableFooter,
  TableSearch
} from "@/components/Table/Table"

interface Props<T> {
  columns: ColumnDef<T, any>[]
  data: T[]
  pageSizeOptions?: number[]
}


export function DataTable<T>({
  columns,
  data,
  pageSizeOptions = [10, 30, 50, 100],
}: Props<T>): ReactElement<Props<T>> {
  const [filter, setFilter] = useState('')
  const [sorting, setSorting] = useState<SortingState>([])
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter: filter,
    },
    onGlobalFilterChange: setFilter,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugAll: true
  })

  const handleChangeRowsPerPage = (pageSize: number) => {
    table.setPageSize(pageSize)
    table.resetPageIndex()
  };

  return (
    <Box>
      <TableSearch
        value={filter ?? ''}
        onChange={(event) => setFilter(event.currentTarget.value)}
      />
      <Table className='h-[50vh]' size='2'>
        <TableHeader className="top-0 sticky bg-stone-600">
          <TableRow>
            {
              table.getFlatHeaders().map(header => {
                return (
                  <TableRowHeaderCell
                    key={header.id}
                    className={header.column.getCanSort() ? 'cursor-pointer select-none' : ''}
                    colSpan={header.colSpan}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <Box
                      width='max-content'
                      className="text-white flex"
                    >
                      {
                        header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())
                      }
                      {{
                        asc: <Box my='auto' ml='1'><ArrowUpIcon /></Box>,
                        desc: <Box my='auto' ml='1'><ArrowDownIcon /></Box>,
                      }[header.column.getIsSorted() as string] ?? null}
                    </Box>
                  </TableRowHeaderCell>
                )
              })
            }
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            table.getRowModel().rows.map(row => {
              return (
                <TableRow key={row.id}>
                  {
                    row.getVisibleCells().map(cell => {
                      return (
                        <TableCell
                          key={cell.id}
                          className="text-white"
                        >
                          <Box width='max-content'>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </Box>
                        </TableCell>
                      )
                    })
                  }
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
      <TableFooter className="flex w-full">
        <Box className="flex justify-start w-full" m='3'>
          <IconButton
            disabled={!table.getCanPreviousPage()}
            onClick={table.previousPage}
          >
            <CaretLeftIcon />
          </IconButton>
          <Box className='flex h-full items-center' mx='5'>
            {`${table.getState().pagination.pageIndex + 1} of ${table.getPageCount()}`}
          </Box>
          <IconButton
            disabled={!table.getCanNextPage()}
            onClick={table.nextPage}
          >
            <CaretRightIcon />
          </IconButton>
        </Box>
        <Box className="w-full text-right" m='3'>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="soft">
                {table.getState().pagination.pageSize}
                <CaretDownIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              {
                pageSizeOptions.map(pageSize => {
                  return (
                    <DropdownMenu.Item
                      key={pageSize}
                      onClick={() => handleChangeRowsPerPage(pageSize)}
                    >
                      {pageSize}
                    </DropdownMenu.Item>
                  )
                })
              }
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Box>
      </TableFooter>
    </Box>
  )
}
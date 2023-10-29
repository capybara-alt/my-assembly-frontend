import { ComponentProps, ReactNode } from "react"
import {
  MagnifyingGlassIcon
} from "@radix-ui/react-icons"
import {
  Box,
  Responsive,
  Table as T
} from "@radix-ui/themes"

import {
  TextField,
  TextFieldInput,
  TextFieldSlot
} from '@/components/TextInput/TextInput'

const Table = T.Root
const TableHeader = T.Header
const TableBody = T.Body
const TableRow = T.Row
const TableColumnHeaderCell = T.ColumnHeaderCell
const TableRowHeaderCell = T.RowHeaderCell
const TableCell = T.Cell

const TableFooter = ({
  className,
  children,
  ...props
}: {
  className: string,
  children: ReactNode
} & ComponentProps<typeof Box>) => {
  return (
    <Box
      className={className}
      { ...props }
    >
      {
        children
      }
    </Box>
  )
}

const TableSearch = ({
  size = '3',
  ...props
}:
{
  size?: Responsive<'1' | '2' | '3'>,
} & ComponentProps<typeof TextFieldInput>) => {
  return (
    <TextField size={size} mb='1'>
      <TextFieldSlot>
        <MagnifyingGlassIcon height='16' />
      </TextFieldSlot>
      <TextFieldInput
        placeholder="Search with keywords"
        {...props}
      />
    </TextField>
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableColumnHeaderCell,
  TableRowHeaderCell,
  TableCell,
  TableFooter,
  TableSearch
}
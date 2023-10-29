"use client"
import { FC, useMemo } from "react"
import type {
  UnitSchema
} from '@/types/unitSchema'
import type {
  Expansion
} from '@/types/expansion'
import { DataTable } from "@/components/Table/DataTable"
import {
  createColumnHelper,
} from '@tanstack/react-table'
import {
  snakeToCamelCase
} from '@/utils/string'

interface Props {
  columns: UnitSchema[]
  items: Expansion[]
}

const columnHelper = createColumnHelper<Expansion>()

export const ExpansionListTable: FC<Props> = ({ items, columns }) => {
  const dcolumns = useMemo(() => {
    return [
      columnHelper.accessor('name', {
        cell: w => w.getValue(),
        header: 'Name',
      }),
      ...columns.map(column => {
        return columnHelper.accessor(snakeToCamelCase(column.propName), {
          cell: w => w.getValue(),
          header: column.nameJa,
        })
      })
    ]
  }, [columns])

  return (
    <DataTable<Expansion>
      columns={dcolumns}
      data={items}
    />
  )
}
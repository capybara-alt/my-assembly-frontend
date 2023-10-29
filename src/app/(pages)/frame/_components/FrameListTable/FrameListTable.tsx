"use client"
import { FC, useMemo } from "react"
import type {
  UnitSchema
} from '@/types/unitSchema'
import type {
  Frame
} from '@/types/frame'
import { DataTable } from "@/components/Table/DataTable"
import {
  createColumnHelper,
} from '@tanstack/react-table'
import {
  snakeToCamelCase
} from '@/utils/string'

interface Props {
  columns: UnitSchema[]
  items: Frame[]
}

const columnHelper = createColumnHelper<Frame>()

export const FrameListTable: FC<Props> = ({ items, columns }) => {
  const dcolumns = useMemo(() => {
    return [
      columnHelper.accessor('name', {
        cell: w => w.getValue(),
        header: 'Name',
      }),
      columnHelper.accessor('unit', {
        cell: w => w.getValue(),
        header: 'Unit',
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
    <DataTable<Frame>
      columns={dcolumns}
      data={items}
    />
  )
}
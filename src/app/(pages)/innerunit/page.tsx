import { FC } from "react"
import { omit } from "radash"
import { InnerUnitListTable } from "./_components/InnerUnitListTable/InnerUnitListTable"
import {
  getInnerUnitList,
  getSchemaList
} from "./utils"

const Page: FC = async () => {
  const innerUnitList = await getInnerUnitList()
  const schemaList = await getSchemaList()

  return (
    <InnerUnitListTable
      items={innerUnitList.items.map(item => omit(item, ["createdAt"]))}
      columns={schemaList.items.map(item => omit(item, ["createdAt"]))}
    />
  )
}

export default Page
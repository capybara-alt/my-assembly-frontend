import { FC } from "react"
import { omit } from "radash"
import { ExpansionListTable } from "./_components/ExpansionListTable/ExpansionListTable"
import {
  getExpansionList,
  getSchemaList
} from "./utils"

const Page: FC = async () => {
  const expansionList = await getExpansionList()
  const schemaList = await getSchemaList()

  return (
    <ExpansionListTable
      items={expansionList.items.map(item => omit(item, ["createdAt"]))}
      columns={schemaList.items.map(item => omit(item, ["createdAt"]))}
    />
  )
}

export default Page
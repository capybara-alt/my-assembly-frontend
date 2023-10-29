import { FC } from "react"
import { omit } from "radash"
import { FrameListTable } from "./_components/FrameListTable/FrameListTable"
import {
  getFrameList,
  getSchemaList
} from "./utils"

const Page: FC = async () => {
  const frameList = await getFrameList()
  const schemaList = await getSchemaList()

  return (
    <FrameListTable
      items={frameList.items.map(item => omit(item, ["createdAt"]))}
      columns={schemaList.items.map(item => omit(item, ["createdAt"]))}
    />
  )
}

export default Page
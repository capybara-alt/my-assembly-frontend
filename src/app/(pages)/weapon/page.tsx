import { FC } from "react"
import { omit } from "radash"
import { WeaponListTable } from "./_components/WeaponListTable/WeaponListTable"
import { getWeaponList, getSchemaList } from "./utils"

const Page: FC = async () => {
  const schemaList = await getSchemaList()
  const weaponList = await getWeaponList()

  return (
    <WeaponListTable
      items={weaponList.items.map(item => omit(item, ["createdAt"]))}
      columns={schemaList.items.map(item => omit(item, ["createdAt"]))}
    />
  )
}

export default Page
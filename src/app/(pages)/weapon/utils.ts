import {
  GetWeaponListResponse
} from "@buf/capybara_my-assemble.bufbuild_es/myassembly/v1/weapon_pb"
import {
  GetValidationUnitSchemaResponse
} from "@buf/capybara_my-assemble.bufbuild_es/myassembly/v1/validation_unit_schema_pb"

export const getWeaponList = async (): Promise<GetWeaponListResponse> => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL as string}/myassembly.v1.WeaponService/GetWeaponList`
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({}),
    })

    return new GetWeaponListResponse(await res.json())
  } catch (err) {
    throw err
  }
}

export const getSchemaList = async (): Promise<GetValidationUnitSchemaResponse> => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL as string}/myassembly.v1.ValidationUnitSchemaService/GetValidationUnitSchema`
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        unitType: "WEAPON"
      }),
    })

    return new GetValidationUnitSchemaResponse(await res.json())
  } catch (err) {
    throw err
  }
}
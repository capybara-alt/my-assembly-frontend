import {
  GetInnerUnitListResponse
} from "@buf/capybara_my-assemble.bufbuild_es/myassembly/v1/inner_unit_pb"
import {
  GetValidationUnitSchemaResponse
} from "@buf/capybara_my-assemble.bufbuild_es/myassembly/v1/validation_unit_schema_pb"

export const getInnerUnitList = async (): Promise<GetInnerUnitListResponse> => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL as string}/myassembly.v1.InnerUnitService/GetInnerUnitList`
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({}),
    })

    return new GetInnerUnitListResponse(await res.json())
  } catch (err) {
    throw err
  }
}

export const getSchemaList = async () => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL as string}/myassembly.v1.ValidationUnitSchemaService/GetValidationUnitSchema`
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        unitType: "INNER_UNITS"
      }),
    })

    return new GetValidationUnitSchemaResponse(await res.json())
  } catch (err) {
    throw err
  }
}
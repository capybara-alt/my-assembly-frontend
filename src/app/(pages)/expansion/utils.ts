import {
  GetExpansionListResponse
} from "@buf/capybara_my-assemble.bufbuild_es/myassembly/v1/expansion_pb"
import {
  GetValidationUnitSchemaResponse
} from "@buf/capybara_my-assemble.bufbuild_es/myassembly/v1/validation_unit_schema_pb"

export const getExpansionList = async (): Promise<GetExpansionListResponse> => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL as string}/myassembly.v1.ExpansionService/GetExpansionList`
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({}),
    })

    return new GetExpansionListResponse(await res.json())
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
        unitType: "EXPANSION"
      }),
    })

    return new GetValidationUnitSchemaResponse(await res.json())
  } catch (err) {
    throw err
  }
}
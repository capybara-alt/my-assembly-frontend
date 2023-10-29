import {
  GetFrameListResponse
} from "@buf/capybara_my-assemble.bufbuild_es/myassembly/v1/frame_pb"
import {
  GetValidationUnitSchemaResponse
} from "@buf/capybara_my-assemble.bufbuild_es/myassembly/v1/validation_unit_schema_pb"

export const getFrameList = async (): Promise<GetFrameListResponse> => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL as string}/myassembly.v1.FrameService/GetFrameList`
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({}),
    })

    return new GetFrameListResponse(await res.json())
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
        unitType: "FRAME"
      }),
    })

    return new GetValidationUnitSchemaResponse(await res.json())
  } catch (err) {
    throw err
  }
}
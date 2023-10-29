import {
  GetAssemblyListResponse
} from "@buf/capybara_my-assemble.bufbuild_es/myassembly/v1/assembly_pb"

export const getExpansionList = async (): Promise<GetAssemblyListResponse> => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL as string}/myassembly.v1.AssemblyService/GetAssemblyList`
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({}),
    })

    return new GetAssemblyListResponse(await res.json())
  } catch (err) {
    throw err
  }
}
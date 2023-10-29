import type {
  InnerUnit as InnerUnitPB
} from '@buf/capybara_my-assemble.bufbuild_es/myassembly/v1/inner_unit_pb'

export type InnerUnit = Omit<InnerUnitPB, "createdAt">
import type {
  Expansion as ExpansionPB
} from '@buf/capybara_my-assemble.bufbuild_es/myassembly/v1/expansion_pb'

export type Expansion = Omit<ExpansionPB, "createdAt">
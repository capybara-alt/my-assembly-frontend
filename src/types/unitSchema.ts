import type {
  ValidationUnitSchema
} from '@buf/capybara_my-assemble.bufbuild_es/myassembly/v1/validation_unit_schema_pb'

export type UnitSchema = Omit<ValidationUnitSchema, "createdAt">
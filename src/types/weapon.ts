import type {
  Weapon as WeaponPB
} from '@buf/capybara_my-assemble.bufbuild_es/myassembly/v1/weapon_pb'

export type Weapon = Omit<WeaponPB, "createdAt">
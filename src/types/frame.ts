import type {
  Frame as FramePB
} from '@buf/capybara_my-assemble.bufbuild_es/myassembly/v1/frame_pb'

export type Frame = Omit<FramePB, "createdAt">
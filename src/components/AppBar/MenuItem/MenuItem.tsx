import type { FC } from 'react'
import Link from 'next/link'
import * as Menubar from '@radix-ui/react-menubar'

interface Props {
  title: string
  href: string
}

export const MenuItem: FC<Props> = ({ title, href }) => {
  return (
    <Menubar.Item
      className="group text-[13px] leading-none text-white flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-stone-300 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-stone-800 data-[highlighted]:to-stone-800 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
    >
      <Link href={href}>
        {title}
      </Link>
    </Menubar.Item>
  )
}
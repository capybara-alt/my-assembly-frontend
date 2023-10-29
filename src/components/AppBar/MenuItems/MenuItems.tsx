import type { FC } from 'react'
import classNames from 'classnames'
import * as Menubar from '@radix-ui/react-menubar'
import Link from 'next/link'

import { MenuItem } from '../MenuItem/MenuItem'

interface Props {
  className?: string
}

const menuItems = [
  {
    title: 'Weapons',
    href: '/weapon'
  },
  {
    title: 'Frames',
    href: '/frame'
  },
  {
    title: 'Inner Units',
    href: '/innerunit'
  },
  {
    title: 'Expansions',
    href: '/expansion'
  }
]

export const MenuItems: FC<Props> = ({ className }) => {
  return (
    <Menubar.Root className={classNames("flex bg-stone-600 p-[3px] h-full mr-3", className)}>
      <Menubar.Menu>
        <Menubar.Trigger
          className="py-2 px-3 outline-none select-none font-medium leading-none text-white text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-stone-400 data-[state=open]:bg-stone-400"
        >
          <Link href='/assembly'>Assembly</Link>
        </Menubar.Trigger>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger className="py-2 px-3 outline-none select-none font-medium leading-none text-white text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-stone-400 data-[state=open]:bg-stone-400">
          Parts
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="min-w-[220px] bg-stone-600 p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
            side='bottom'
            align='end'
            sideOffset={5}
            alignOffset={-3}
          >
            {
              menuItems.map(item => {
                return (
                  <MenuItem key={item.title} title={item.title} href={item.href} />
                )
              })
            }
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger className="py-2 px-3 outline-none select-none font-medium leading-none text-white text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-stone-400 data-[state=open]:bg-stone-400">
          Accounts
        </Menubar.Trigger>
      </Menubar.Menu>
    </Menubar.Root>
  )
}
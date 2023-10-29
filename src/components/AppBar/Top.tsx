"use client"
import type { FC } from 'react'
import { Box, Heading } from '@radix-ui/themes'
import { MenuItems } from './MenuItems/MenuItems'

const AppBar: FC = () => {
  return (
    <Box width='100%' height='9' mb='5' className='bg-stone-600 flex'>
      <Box m='auto' ml='3' className='justify-start w-full'>
        <Heading size='7'>title</Heading>
      </Box>
      <MenuItems className='justify-end w-full h-full' />
    </Box>
  )
}

export default AppBar
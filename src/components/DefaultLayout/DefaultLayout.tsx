import type { FC, ReactNode } from "react"
import { Box, Container } from '@radix-ui/themes'
import AppBar from '@/components/AppBar/Top'

interface Props {
  children: ReactNode
}

const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <Box>
      <AppBar />
      <Container size='3'>
        {children}
      </Container>
    </Box>
  )
}


export default DefaultLayout
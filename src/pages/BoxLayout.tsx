import { Box } from '@chakra-ui/react'
import React from 'react'

interface BoxLayoutProps {
    children: React.ReactNode
}

const BoxLayout = ({children}: BoxLayoutProps) => {
  return (
    <Box p={2} bg='bg' borderRadius={'xl'}>
        {children}
    </Box>
  )
}

export default BoxLayout
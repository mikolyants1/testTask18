import { Box, Flex } from '@chakra-ui/react'

function Header():JSX.Element {
  return (
    <Box w="100%"
     textAlign="center"
     bg="rgb(90,90,90)"
     boxSizing="border-box"
     fontWeight="bold"
     fontSize={23}
     pt={4} h="70px">
      Game App
    </Box>
  )
}

export default Header
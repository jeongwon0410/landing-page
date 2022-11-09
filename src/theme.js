import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: '#081828',
        color: 'white',
      },
    },
  },
  fonts: {
    body: `'ChosunCentennial'`,
  },
})

export default theme

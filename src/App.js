import theme from './theme'
import Fonts from './Fonts'
import '@fontsource/nanum-gothic'

import { ChakraProvider } from '@chakra-ui/react'
import Hero from '@components/Hero'
import HeroTwo from '@components/HeroTwo'

import ExplainInstall from '@components/ExplainInstall'
import Footer from '@components/Footer'
import NavBar from '@components/NavBar'
import ExplainB from '@components/ExplainB'
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <NavBar />
      <Hero />

      <ExplainInstall />
      <HeroTwo />
      <ExplainB />
      <Footer />
    </ChakraProvider>
  )
}

export default App

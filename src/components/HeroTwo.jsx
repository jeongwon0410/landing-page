import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import ModalNFT from './ModalNFT'

export default function HeroTwo() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box
        height={'100vh'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            fontFamily={'ChosunCentennial'}
            color={'orange.500'}
          >
            Team 귱은...
            {/* <Text as={'span'} color={'purple.400'}>
              오직 당신만의
            </Text> */}
          </Heading>
          <Text color={'gray.200'} maxW={'3xl'}>
            대부분의 사람들은 대중적인것을 쫓습니다. 유명한 책, 유명한 음악,
            단지 유명하다는 이유로 많은 사람들이 그것을 옹호하고 좋아하는 경우를
            많이 봅니다. 여러분들은 그런적이 없으셨나요? 나다움을 나타낼수있는
            공간, 내 이야기를 하는것처럼 나를 위로해주는 노래, 스스로 솔직하게
            쓸수있는 일기와 나만의 그림들 일반적이지 않은것들에게 마음이 가게
            되는 경우 말입니다. 비주류는 그런 알려지지 않은 자신만의 것을 함께
            나누는 공간입니다
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Button
              bg={'orange.400'}
              px={6}
              _hover={{
                bg: 'orange.500',
              }}
              onClick={onOpen}
            >
              우리 NFT 미리보기
            </Button>
          </Stack>
        </Stack>
      </Box>
      {isOpen && <ModalNFT isOpen={isOpen} onClose={onClose} />}
    </>
  )
}

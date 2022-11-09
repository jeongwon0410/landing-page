import { Flex, Container, Heading, Stack, Text, Image } from '@chakra-ui/react'
import metamask from '@assets/metamask.png'

export default function Hero() {
  return (
    <Container maxW={'5xl'} mt={58}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
          fontFamily={'ChosunCentennial'}
        >
          <Text as={'span'} color={'orange.400'}>
            메타마스크{' '}
          </Text>
          지갑 만들기
        </Heading>
        <Text color={'white.500'} maxW={'3xl'}>
          메타마스크는 브라우저 확장 프로그램으로 설치할 수 있는 이더리움
          지갑입니다. 메타마스크 사용자는 이더리움 주소로 토큰을 거래할 수
          있으며, 웹3 서비스와 탈중앙화 금융 앱(디앱)을 이용하고 NFT도 거래할 수
          있습니다.
        </Text>

        <Flex
          w={'full'}
          justify={'center'}
          align={'center'}
          position={'relative'}
        >
          <Image height={{ sm: '5rem', lg: '10rem' }} src={metamask}></Image>
        </Flex>
      </Stack>
    </Container>
  )
}

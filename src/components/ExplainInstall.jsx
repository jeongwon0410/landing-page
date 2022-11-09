import {
  Box,
  Stack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Image,
} from '@chakra-ui/react'

import image1 from '@assets/image1.png'
import image2 from '@assets/image2.png'
import image3 from '@assets/image3.png'
import image4 from '@assets/image4.png'
import image5 from '@assets/image5.png'
import image6 from '@assets/image6.png'
import image7 from '@assets/image7.png'

function ExplainInstallWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}
    >
      {children}
    </Box>
  )
}

export default function ExplainInstall() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl" fontFamily={'ChosunCentennial'}>
          메타마스크 모바일 설치 방법
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          by Team 귱
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <ExplainInstallWrapper>
          <Box position="relative" width={300}>
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}
            ></Box>

            <VStack py={4} borderBottomRadius={'xl'}>
              <Image
                src={image1}
                width={250}
                height={550}
                borderRadius={'xl'}
              />
              <Box w="80%" pt={7}>
                Get Started 버튼 클릭
              </Box>
            </VStack>
          </Box>
        </ExplainInstallWrapper>
        <ExplainInstallWrapper>
          <Box position="relative" width={300}>
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}
            ></Box>

            <VStack py={4} borderBottomRadius={'xl'}>
              <Image
                src={image2}
                width={250}
                height={550}
                borderRadius={'xl'}
              />
              <Box w="80%" pt={7}>
                Create a new wallet 버튼 클릭
              </Box>
            </VStack>
          </Box>
        </ExplainInstallWrapper>
        <ExplainInstallWrapper>
          <Box position="relative" width={300}>
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}
            ></Box>

            <VStack py={4} borderBottomRadius={'xl'}>
              <Image
                src={image3}
                width={250}
                height={530}
                borderRadius={'xl'}
              />
              <Box w="80%" pt={7}>
                메타마스크 정책 설명 <br /> I agee 버튼 클릭
              </Box>
            </VStack>
          </Box>
        </ExplainInstallWrapper>
      </Stack>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <ExplainInstallWrapper>
          <Box position="relative" width={300}>
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}
            ></Box>

            <VStack py={4} borderBottomRadius={'xl'}>
              <Image
                src={image4}
                width={250}
                height={550}
                borderRadius={'xl'}
              />
              <Box w="80%" pt={7}>
                비밀번호 설정 <br /> Create password 버튼 클릭
              </Box>
            </VStack>
          </Box>
        </ExplainInstallWrapper>
        <ExplainInstallWrapper>
          <Box position="relative" width={300}>
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}
            ></Box>

            <VStack py={4} borderBottomRadius={'xl'}>
              <Image
                src={image5}
                width={250}
                height={550}
                borderRadius={'xl'}
              />
              <Box w="80%" pt={7}>
                메타마스크 설명 동영상 <br /> Start 버튼 클릭
              </Box>
            </VStack>
          </Box>
        </ExplainInstallWrapper>
        <ExplainInstallWrapper>
          <Box position="relative" width={300}>
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}
            ></Box>

            <VStack py={4} borderBottomRadius={'xl'}>
              <Image
                src={image6}
                width={250}
                height={550}
                borderRadius={'xl'}
              />
              <Box w="80%" pt={7}>
                비밀번호 1 부터 12까지 단어 설정 <br /> Continue 버튼 클릭
              </Box>
            </VStack>
          </Box>
        </ExplainInstallWrapper>
        <ExplainInstallWrapper>
          <Box position="relative" width={300}>
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}
            ></Box>

            <VStack py={4} borderBottomRadius={'xl'}>
              <Image
                src={image7}
                width={250}
                height={550}
                borderRadius={'xl'}
              />
              <Box w="80%" pt={7}>
                비밀번호 재확인 <br /> 설정한 숫자를 입력
              </Box>
            </VStack>
          </Box>
        </ExplainInstallWrapper>
      </Stack>
    </Box>
  )
}

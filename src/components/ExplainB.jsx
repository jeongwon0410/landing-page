import {
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import { IoLogoBitcoin, IoWalletSharp, IoJournalSharp } from 'react-icons/io5'
import main from '@assets/main.png'
import ModalNFT from './ModalNFT'

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function ExplainB() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex
      justify={'center'}
      py={12}
      px={{ base: '20px', sm: '30px', lg: '50px' }}
      h={'100vh'}
      align={'center'}
    >
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        alignItems={'center'}
      >
        <Stack spacing={4}>
          <Heading fontFamily={'ChosunCentennial'}>
            아티스트&팬이 정보를 쉽게 공유할 수 있다
          </Heading>

          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }
          >
            <Feature
              icon={
                <Icon as={IoWalletSharp} color={'orange.500'} w={5} h={5} />
              }
              iconBg={'orange.100'}
              text={'인디 아티스트와 팬들이 소통할 수 있는 채널 제공'}
            />
            <Feature
              icon={
                <Icon as={IoLogoBitcoin} color={'orange.100'} w={5} h={5} />
              }
              iconBg={'orange.500'}
              text={'인디 아티스트의 공연 및 곡 홍보'}
            />
            <Feature
              icon={
                <Icon as={IoJournalSharp} color={'orange.500'} w={5} h={5} />
              }
              iconBg={'orange.100'}
              text={
                '가격도 상대적으로 저렴하고, 음악의 개성도 있고, 순수하게 음악을 즐기는 아티스트들의 커뮤니티 플랫폼'
              }
            />
          </Stack>
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
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={main}
            objectFit={'cover'}
            maxH={'330px'}
          />
        </Flex>
      </SimpleGrid>
      {isOpen && <ModalNFT isOpen={isOpen} onClose={onClose} />}
    </Flex>
  )
}

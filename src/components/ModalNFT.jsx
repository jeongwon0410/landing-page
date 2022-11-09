import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Text,
} from '@chakra-ui/react'

import cat from '@assets/cat.png'
import flower from '@assets/flower.png'

import { useState } from 'react'
function ModalNFT({ isOpen, onClose }) {
  const [isNext, setIsNext] = useState(false)

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent fontFamily={'ChosunCentennial'}>
          <ModalHeader color="black">NFT</ModalHeader>

          <ModalBody>
            {isNext ? (
              <>
                <Image src={flower} />
                <Text color={'black'} fontSize={30} float={'right'}>
                  1ETH
                </Text>
              </>
            ) : (
              <>
                <Image src={cat} />
                <Text color={'black'} fontSize={30} float={'right'}>
                  1ETH
                </Text>
              </>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="orange"
              mr={3}
              onClick={() => setIsNext(!isNext)}
            >
              next
            </Button>
            <Button colorScheme="orange" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalNFT

import { Image, Modal, ModalCloseButton, ModalContent, ModalOverlay} from '@chakra-ui/react'
import React from 'react'

interface IProps {
  url:string,
  isOpen:boolean,
  onClose:()=>void
}

function ModalCard({url,isOpen,onClose}:IProps):JSX.Element {
  return (
    <Modal
     isOpen={isOpen}
     onClose={onClose}>
      <ModalOverlay />
      <ModalContent mt={200}
       borderRadius={10}
       bg="rgb(70,70,70)"
       w={600} h={250}>
        <ModalCloseButton />
          <Image
           borderRadius={10}
           w="100%" h="100%"
           src={url} alt=""
           />
      </ModalContent>
    </Modal>
  )
}

export default ModalCard
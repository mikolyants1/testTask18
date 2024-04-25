import { Box, Flex, Image, Text, useDisclosure } from '@chakra-ui/react';
import { IGame } from '../../../../libs/types/type'
import { useEffect, useState } from 'react'
import ModalCard from './modal/ModalCard';
import { Link } from 'react-router-dom';

function GameCard({
  title,
  description,
  game_screens,
  max_online,
  multiuser,
  platform,
  raiting,
  cover
}:IGame):JSX.Element {
  const [showDescription,setShowDescription] = useState<string>("");
  const {isOpen,onOpen,onClose} = useDisclosure();
  const [url,setUrl] = useState<string>("");

  useEffect(() => {
    console.log(multiuser)
    const desc = description.split("");
    desc.forEach((_:string,i:number) => {
      setTimeout(() => {
        setShowDescription(desc.slice(0,i).join(""));
      },Number(`${i}0`) * 2);
    });
  },[]);
  
  const openModal = (link:string) => ():void => {
    setUrl(link);
    onOpen();
  }

  return (
    <>
      <ModalCard
       isOpen={isOpen}
       onClose={onClose}
       url={url}
      />
      <Box pos="absolute"
       fontSize={17} left={5}>
        <Link to="/"
         style={{
          textDecoration:"underline",
          color:"blueviolet"
         }}>
          home
        </Link>
      </Box>
      <Flex w={600}
       m="40px auto"
       borderRadius={10}
       bg="rgb(70,70,70)"
       flexDir="column"
       justifyContent="center"
       alignItems="center">
        <Box fontWeight="bold"
         fontSize={25}>
          {title}
        </Box>
        <Image w={450}
         mt={5} mb={5}
         borderRadius={10}
         src={cover}
         alt=''
        />
        <Flex gap={5}
         justifyContent="space-arround">
          {game_screens.map((el:string):JSX.Element => (
           <Image w={130}
            key={el} src={el}
            onClick={openModal(el)}
            borderRadius={10}
            h="80px"
           />
          ))}
        </Flex>
        <Box fontSize={17}
         minH={100} w={450}>
          {showDescription}
        </Box>
        <Flex w={450}
         justifyContent="space-between"
         fontSize={19} flexWrap="wrap">
          <Box>
            maximum online users:
            <Text as="span"
             color="green">
             {` ${max_online}`}
            </Text>
          </Box>
          <Box>
            has an online:
            <Text as="span"
             color={multiuser ? "green" : "red"}>
             {` ${multiuser ? "yes" : "no"}`}
            </Text>
          </Box>
        </Flex>
        <Flex w={450}
         justifyContent="space-between"
         fontSize={19}>
          <Box>
            platforms:
            <Text as="span"
             color="green">
             {` ${platform.join(",")}`}
            </Text>
          </Box>
          <Box>
            raiting:
            <Text as="span"
             color={raiting > 6 ? "green" : "red"}>
             {` ${raiting}`}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default GameCard
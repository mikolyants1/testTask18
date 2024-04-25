
import { Flex, Spinner } from '@chakra-ui/react';
import { memo } from 'react';

function Loader():JSX.Element{
  return (
    <Flex w="100%"
     justifyContent="center"
     alignItems="center">
      <Spinner
       margin="10px auto"
       thickness='4px'
       speed='0.65s'
       emptyColor='rgb(60,60,60)'
       color='blue.500'
       size='xl'
      />
    </Flex>
  );
}

export default memo(Loader);
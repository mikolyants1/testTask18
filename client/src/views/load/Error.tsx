import { Box } from '@chakra-ui/react';
import { useState,useEffect, memo } from 'react';

function Error():JSX.Element{
const [err,setErr] = useState<string>('');
 useEffect(():void=>{
  setInterval(():void => {
   setTimeout(():void=>setErr(''),0);
   setTimeout(():void=>setErr('.'),200);
   setTimeout(():void=>setErr('..'),400);
   setTimeout(():void=>setErr('...'),600);
   }, 800);
  },[]);

  return (
     <Box w='100%'
      textAlign='center'
      color='white'>
        error {err}
     </Box>   
  );
}

export default memo(Error)
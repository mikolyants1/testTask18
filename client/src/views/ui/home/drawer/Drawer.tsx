import {type IForm,type IGame,type IQueryState } from '../../../../libs/types/type'
import { defaultValues } from '../../../../models/state/state';
import { Box, Button, Flex } from '@chakra-ui/react';
import { Dispatch, SetStateAction, useState } from 'react'
import {motion} from 'framer-motion';
import Fields from './fields/Fields';

interface IProps {
  toogle:()=>void,
  open:boolean,
  json:IQueryState,
  setJson:Dispatch<SetStateAction<IQueryState>>
}

function Drawer({open,json,setJson,toogle}:IProps):JSX.Element {
  const [form,setForm] = useState<IForm>(defaultValues);

  const submit = ():void => {
    const mutable:IGame[] = json.initial.filter((g:IGame) => (
     form.langs ? g.langs.some((l:string) => l === "RU") : true
    ))
    .filter((g:IGame) => {
      if (form.platform){
        const platform = form.platform.trim().toLowerCase();
        return g.platform.find((l:string) => (
          l.trim().toLowerCase().includes(platform)
        ));
      }
      return true;
    })
    .filter((g:IGame) => form.multiuser ? g.multiuser : true)
    .filter((g:IGame) => {
      if (form.raiting || !Number.isNaN(form.raiting)){
        const raiting = Number(form.raiting);
        return g.raiting >= raiting;
      }
      return true;
    })
    .filter((g:IGame) => {
      if (form.max_online || !Number.isNaN(form.max_online)){
        const raiting = Number(form.max_online);
        return g.max_online >= raiting;
      }
      return true;
    });
    setJson((prv:IQueryState) => ({...prv,mutable}));
  }
 
  return (
      <motion.div style={{
        width:300,
        position:"sticky",
        display:"flex",
        flexDirection:"column",
        backgroundColor:"rgb(90,90,90)",
        justifyContent:"center",
        alignItems:"center",
        marginTop:20,
        borderRadius:10,
        zIndex:100,
        top:10
       }}
       initial={{translateX:-300}}
       animate={{translateX:open ? 0 : -300}}
       transition={{delay:0.3,type:"spring"}}>
        <Flex w="98%"
         justifyContent="end">
          <Box fontSize={33}
           onClick={toogle}
           transform="rotate(45deg)"
           color="white">
             +
          </Box>
        </Flex>
        <Fields setForm={setForm} />
        <Button mb={2}
         colorScheme='blue'
         onClick={submit}>
          search
        </Button>
      </motion.div>
  )
}

export default Drawer
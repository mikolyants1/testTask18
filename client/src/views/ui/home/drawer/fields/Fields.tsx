import { IForm } from '../../../../../libs/types/type';
import { Box, Checkbox, Flex, Input} from '@chakra-ui/react';
import { ChangeEvent, Dispatch, SetStateAction, useCallback } from 'react';
import SelectCard from './select/SelectCard';

interface IProps {
  setForm:Dispatch<SetStateAction<IForm>>
}

function Fields({setForm}:IProps):JSX.Element {
  const inputChange = (e:ChangeEvent<HTMLInputElement>):void => {
    setForm((prv:IForm) => {
      const name:string = e.target.name;
      if (name === "langs" || name === "multiuser"){
        return {...prv,[name]:e.target.checked}
      }
      return {...prv,[name]:e.target.value}
    });
  }
  
  const selectChange = useCallback((e:ChangeEvent<HTMLSelectElement>):void => {
    setForm((prv:IForm)=>({
      ...prv,[e.target.name]:e.target.value
    }));
  },[]);

  return (
    <>
      <Input w="85%"
       placeholder='platform'
       _placeholder={{
        color:"rgb(70,70,70)"
       }}
       bg="rgb(230,230,230)"
       onChange={inputChange}
       color="black"
       name='platform'
      />
      <Flex gap={10}
       mt={2} mb={2}>
        <Box>
          multiuser important
        </Box>
        <Checkbox
         onChange={inputChange}
         name='multiuser'
        />
      </Flex>
      <Flex gap={5}
       mt={2} mb={2}>
        <Box>
          russian lang important
        </Box>
        <Checkbox
         onChange={inputChange}
         name='langs'
        />
      </Flex>
      <SelectCard
       change={selectChange}
       />
    </>
  )
}

export default Fields
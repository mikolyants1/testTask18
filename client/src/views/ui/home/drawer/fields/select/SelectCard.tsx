import { Box, Flex, Select } from '@chakra-ui/react';
import { ESelect } from '../../../../../../libs/enum/enum'
import { createFields } from '../../../../../../models/functions/createFields'
import React, { ChangeEvent, memo } from 'react'

interface IProps {
  change:(e:ChangeEvent<HTMLSelectElement>)=>void
}

function SelectCard({change}:IProps):JSX.Element {
  const raitingOption = createFields(ESelect.RAITING);
  const onlineOption = createFields(ESelect.ONLINE);

  return (
    <>
      <Flex gap={5}
       mt={2} mb={2}
       alignItems="center"
       justifyContent="space-between"
       w="85%">
        <Box>
          raiting more than
        </Box>
        <Select w={20}
         onChange={change}
         name='raiting'>
          {raitingOption.map((i):JSX.Element => (
           <option key={`${i}`}
            value={i} style={{color:"black"}}>
              {i}
           </option>
           ))}
        </Select>
      </Flex>
      <Flex gap={5}
       mt={2} mb={2}
       alignItems="center"
       justifyContent="space-between"
       w="85%">
        <Box>
          online users more than
        </Box>
        <Select w={20}
         onChange={change}
         name='raiting'>
          {onlineOption.map((i):JSX.Element => (
            <option
             key={`${i}`}
             value={i}
             style={{
              color:"black",
             }}>
              {i}
            </option>
           ))}
         </Select>
      </Flex>
    </>
  )
}

export default memo(SelectCard);
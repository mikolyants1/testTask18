import { Td, Tr } from '@chakra-ui/react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

interface IProps {
  rows:string[],
  id:number
}

function RowCard({rows,id}:IProps):JSX.Element {
  const nav:NavigateFunction = useNavigate();

  return (
    <Tr onClick={() => nav(`/${id}`)}>
      {rows.map((i:string):JSX.Element => (
        <Td key={i}
         borderRight="2px solid white"
         fontSize={18}
         textAlign="center"
         color="white">
           {i}
        </Td>
      ))}
    </Tr>
  )
}

export default RowCard
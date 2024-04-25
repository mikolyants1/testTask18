import { Box, Flex, Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import { getAllGames } from '../../../api/query/getAllGames';
import { IGame, IQueryState } from '../../../libs/types/type';
import { QueryState } from '../../../models/state/state';
import Error from '../../../views/load/Error';
import Loader from '../../../views/load/Loader';
import { useCallback, useEffect, useMemo, useState } from 'react'
import Drawer from './drawer/Drawer';
import RowCard from './items/RowCard';
import { createRows } from '../../../models/functions/createRows';

function Home():JSX.Element {
  const [json,setJson] = useState<IQueryState>(QueryState);
  const memoJson:IQueryState = useMemo(() => json,[json]);
  const [drawerOpen,setDrawerOpen] = useState<boolean>(false);
  const rows:Array<keyof IGame> = ["id","title","platform","multiuser","langs","raiting"];

  useEffect(() => {
    setJson((prv:IQueryState)=>({
      ...prv,
      loading:true,
      error:false
    }));
    getAllGames()
    .then((data:IGame[]) => {
      setJson((prv:IQueryState) => ({
        ...prv,
        initial:data,
        mutable:data
      }))
    })
    .catch(() => {
      setJson((prv:IQueryState) => ({
        ...prv,error:true
      }))
    })
    .finally(() => {
      setJson((prv:IQueryState) => ({
        ...prv,loading:false
      }))
    });
  },[]);

  const toogle = useCallback(() => {
    setDrawerOpen(prv => !prv);
  },[]);
  
  if (json.loading) return <Loader />;
  if (json.error) return <Error />;

  return (
    <Box w="98%"
     position="relative">
      {!drawerOpen&&(
      <Box pos="absolute"
       onClick={toogle}
       color="white"
       zIndex={99}
       left={5}
       top={0}>
        search
      </Box>)}
      <Drawer
       open={drawerOpen}
       setJson={setJson}
       json={memoJson}
       toogle={toogle}
      />
      <Flex w="100%" top={10}
       position="absolute"
       alignItems="center"
       flexDir="column">
        <TableContainer
         borderRadius={10}
         border="1px solid white">
          <Table variant="simple">
            <Thead color="white">
              <Tr>
                {rows.map((el:string):JSX.Element => (
                  <Th key={el}>{el}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {json.mutable.map((i:IGame):JSX.Element => {
                const row:string[] = createRows(i,rows);
                return (
                  <RowCard key={i.id} id={i.id} rows={row} />
                )
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Box>
  )
}

export default Home
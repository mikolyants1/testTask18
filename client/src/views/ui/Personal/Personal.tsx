import { getGameById } from '../../../api/query/getGameById';
import {type IGame } from '../../../libs/types/type';
import Error from '../../load/Error';
import Loader from '../../load/Loader';
import { useQuery } from '@tanstack/react-query';
import { Params, useParams } from 'react-router-dom'
import GameCard from './cards/GameCard';

function Personal():JSX.Element{
  const params:Readonly<Params<string>> = useParams();
  const id:string = params.id || "";
  const {data,isError,isLoading} = useQuery<IGame>({
   queryKey:["game",id],
   queryFn:()=>getGameById(id)
  });
  
  if (isLoading) return <Loader />;
  if (isError || !data) return <Error />;

  return (
    <GameCard {...data} />
  )
}

export default Personal
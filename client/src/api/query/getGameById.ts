import {type TAxios, type IGame } from "../../libs/types/type";
import { apiClient } from "../apiClient";

export async function getGameById(id:string):Promise<IGame> {
  return apiClient.get<IGame>(`/${id}`)
  .then(({data}:TAxios<IGame>)=>data);
}
import {TAxios, type IGame } from "../../libs/types/type";
import { apiClient } from "../apiClient";

export async function getAllGames():Promise<IGame[]> {
  return apiClient.get<IGame[]>("/")
  .then(({data}:TAxios<IGame[]>)=>data);
}
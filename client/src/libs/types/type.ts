import { AxiosResponse } from "axios"
import { ChangeEvent } from "react"

export interface IGame {
  id:number,
  title:string,
  raiting:number,
  langs:string[],
  cover:string,
  description:string,
  game_screens:string[],
  platform:string[],
  multiuser:boolean,
  max_online:number
}

export interface IQueryState {
  initial:IGame[],
  mutable:IGame[],
  loading:boolean,
  error:boolean
}

export type TChange = ChangeEvent<HTMLInputElement|HTMLSelectElement>;

type TGame = Omit<IGame,"max_online"|"cover"|"description"|"game_screens">;

export type TRow = Record<keyof TGame,TGame[keyof TGame]>;

export interface IForm {
    raiting:string,
    langs:boolean,
    platform:string,
    multiuser:boolean,
    max_online:string
}
export type TAxios<T> = AxiosResponse<T>;
import {type IForm,type IQueryState } from '../../libs/types/type';

export const QueryState:IQueryState = {
    initial:[],
    mutable:[],
    loading:true,
    error:false
}

export const defaultValues:IForm = {
  raiting:"",
  langs:false,
  platform:"",
  multiuser:false,
  max_online:""
}
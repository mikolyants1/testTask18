import { ESelect } from "../../libs/enum/enum";

export function createFields(type:ESelect):number[]{
  if (type === ESelect.RAITING){
    return Array.from(Array(10).keys());
  }
  return [20,40,60,80,100,120,140,160];
}
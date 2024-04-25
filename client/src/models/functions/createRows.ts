import { IGame } from "../../libs/types/type";

export const createRows = (
    item:IGame,
    row:Array<keyof IGame>
):string[] => {
  const data:unknown[] = [];
  row.forEach((el:keyof IGame) => {
    data.push(item[el]);
  })
  return data.map((el:unknown) => {
    if (typeof el == "boolean"){
      return el ? "yes" : "no"
    }
    if (Array.isArray(el)){
      return el.join(",")
    }
    return `${el}`;
  });
}
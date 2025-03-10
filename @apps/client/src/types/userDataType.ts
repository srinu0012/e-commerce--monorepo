import { ProductItemType } from "./productItemType"

export type userType = {
    id:number;
    username:string;
    orders:ProductItemType[];
  }
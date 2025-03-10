import { ProductItemType } from "./productItemType";


export default interface productStoreType {
  Products: ProductItemType[];
  isViewMoreAble:boolean;
  SetProducts: (newproducts: ProductItemType[],isViewMoreAble:boolean) => void;
  clearProducts:()=>void
}

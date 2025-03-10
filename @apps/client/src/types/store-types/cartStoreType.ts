import { ProductItemType } from "../productItemType";

export default interface CartStoreType {
  cartProducts: ProductItemType[];
  countProducts: Record<string, number>;
  setProducts: (product: Record<string, any>) => void;
  clearProducts:()=>void
}

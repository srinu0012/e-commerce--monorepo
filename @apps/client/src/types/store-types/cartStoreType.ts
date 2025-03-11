import { ProductItemType } from "../productItemType";

export default interface CartStoreType {
  cartProducts: ProductItemType[];
  countProducts: Record<string, number>;
  setProducts: (product: ProductItemType) => void;
  clearProducts:()=>void
}

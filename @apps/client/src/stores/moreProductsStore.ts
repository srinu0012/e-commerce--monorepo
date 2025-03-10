import { create } from "zustand";
import productStoreType from "../types/productStoreType";

export const ProductStore = create<productStoreType>()((set) => ({
  Products: [],
  isViewMoreAble:false,
  SetProducts:(newproducts,isViewMoreAble) =>
    set((state) => ({
      Products: [...state.Products, ...newproducts],
      isViewMoreAble:isViewMoreAble
    })),
  clearProducts:()=>set(()=>({Products:[]}))
}));

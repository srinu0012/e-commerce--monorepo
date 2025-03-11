import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import CartStoreType from "../types/store-types/cartStoreType";

export const CartStore = create<CartStoreType>()(
  devtools(
    persist(
      (set) => ({
        cartProducts: [],
        countProducts: {},
        setProducts: (product) =>
          set((state) => {
            const Idexist = state.countProducts[product.id] || 0;
            const ProductExist = Idexist > 0
              ? [...state.cartProducts]
              : [...state.cartProducts, product];
            return {
              ...state,
              cartProducts: ProductExist,
              countProducts: {
                ...state.countProducts,
                [product.id]: Idexist + 1,
              }
            };
          }),
          clearProducts:()=>set(()=>({cartProducts:[],countProducts:{}}))
      }),
      { name: "cart-product" }
    )
  )
);


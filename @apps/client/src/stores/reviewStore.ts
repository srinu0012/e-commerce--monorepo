import { create } from "zustand";
import { reviewStoreType } from "../types/store-types/reviewStoreType";

export const reviewsStore = create<reviewStoreType>()((set) => ({
  reviews: [],
  SetReviews:(newReview) =>    set(() => ({
      reviews: [...newReview],
    })),
  clearReviews:()=>set(()=>({reviews:[]}))
}));

import { create } from "zustand";
import ActionStoreType from "../types/actionStoreType";

export const ActionStore = create<ActionStoreType>()((set) => ({
  Hamburger: false,
  sideBarRange:[0,1000],
  toggleHamburger: () => set((state) => ({ Hamburger: !state.Hamburger })),
  SetSidebarRange:(e,newRange) => set(()=>({sideBarRange:newRange}))
}));

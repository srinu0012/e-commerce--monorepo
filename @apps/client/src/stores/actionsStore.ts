import { create } from "zustand";
import ActionStoreType from "../types/store-types/actionStoreType";

export const ActionStore = create<ActionStoreType>()((set) => ({
  Hamburger: false,
  sideBarRange:[0,1000],
  searchBarText:"",
  isLoginFormOpen:false,
  toggleHamburger: () => set((state) => ({ Hamburger: !state.Hamburger })),
  SetSidebarRange:(newRange) => set(()=>({sideBarRange:newRange})),
  SetIsLoginFormOpen:()=>set((state)=>({isLoginFormOpen:!state.isLoginFormOpen})),
  SetSearchBarText:(newtext)=>set(()=>({searchBarText:newtext}))
}));

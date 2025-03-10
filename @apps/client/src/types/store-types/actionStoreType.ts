export default interface ActionStoreType {
  Hamburger: boolean;
  sideBarRange:number[];
  isLoginFormOpen:boolean;
  searchBarText:string;
  toggleHamburger():void;
  SetSidebarRange:(newvalue: number[])=>void;
  SetIsLoginFormOpen:()=>void;
  SetSearchBarText:(newtext:string)=>void;
}
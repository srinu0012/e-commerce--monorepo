export default interface ActionStoreType {
  Hamburger: boolean;
  sideBarRange:number[];
  toggleHamburger():void;
  SetSidebarRange:(e:Event,newvalue: number[])=>void;
}
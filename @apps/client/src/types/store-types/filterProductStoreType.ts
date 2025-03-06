export default interface filterProductsType {
  filterProducts: object[];
  setFilterProducts: (products: Record<string, any>[]) => void;
}

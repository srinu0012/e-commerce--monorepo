import { ActionStore } from "../stores/actionsStore"
import { ProductItemType } from "../types/productItemType"

export const RangeFilterProducts = (Products: ProductItemType[]) => {
    const sideBarRange = ActionStore((state) => state.sideBarRange);
    const searchBarText = ActionStore((state) => state.searchBarText);
    return Products.filter((product) => {
        const isInPriceRange = (+product.price >= sideBarRange[0]) && (+product.price <= sideBarRange[1]);
        const isSearchMatch = product.title.toLowerCase().includes(searchBarText.toLowerCase());
        return isInPriceRange && isSearchMatch;
    });
};

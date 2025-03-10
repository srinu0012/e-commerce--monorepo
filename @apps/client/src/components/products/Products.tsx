import { useCallback, useEffect, useState } from "react";
import ProductCard from "../product-card/ProductCard";
import { limitFetchProducts } from "../../services/apiServices";
import ViewMoreButton from "../buttons/viewMoreButton/ViewMoreButton";
import { Grid } from "@mui/material";
import { ActionStore } from "../../stores/actionsStore";
import { ProductStore } from "../../stores/moreProductsStore";
import { RangeFilterProducts } from "../../utils/rangeFilterFunction";


export default function Products() {
  const range = ActionStore((state)=>state.sideBarRange)
  const Products = ProductStore((state)=>state.Products)
  const SetProducts = ProductStore((state)=>state.SetProducts)
  const clearProducts = ProductStore((state)=>state.clearProducts)

  const FilterProducts = RangeFilterProducts(Products)
  useEffect(() => {
    limitFetchProducts(0, SetProducts,range);
    return clearProducts
  }, []);

  const handleNextItems = useCallback(() => {
    limitFetchProducts(Products.length, SetProducts,range);
  }, [Products.length]);
  

  return (
    <>
      <Grid container spacing={2}>
        {FilterProducts.map((ele: Record<string, any>, ind: number) => (
          <ProductCard key={ind} product={ele} />
        ))}
      </Grid>
      <ViewMoreButton handleNextItems={handleNextItems} />
    </>
  );
}

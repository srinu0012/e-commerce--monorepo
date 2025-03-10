import { Grid } from "@mui/material";
import ProductCard from "../product-card/ProductCard";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../services/apiServices";
import { RangeFilterProducts } from "../../utils/rangeFilterFunction";
import { ProductItemType } from "../../types/productItemType";

function FilterProducts() {
  const [products, SetProducts] = useState<ProductItemType[]>([]);
  const { category } = useParams();

  const productsFetching = useCallback(
    async (category: string) => {
      try {
        const response = await fetchProducts(`${category}`);
        SetProducts(response);
      } catch (error) {
        console.log(error);
      }
    },
    [category]
  );
  
  const filterProducts = RangeFilterProducts(products);
  useEffect(() => {
    productsFetching(category!);
  }, [category]);

  return (
    <>
      <Grid container spacing={2} sx={{ paddingTop: 5 }}>
        {filterProducts.map((ele: Record<string, any>) => (
          <ProductCard key={ele.id} product={ele} />
        ))}
      </Grid>
    </>
  );
}

export default FilterProducts;

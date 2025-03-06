import { Grid } from "@mui/material";
import ProductCard from "../product-card/ProductCard";
import { filterProductStore } from "../../stores/filterStore";
import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../services/apiServices";

function FilterProducts() {
  const filterProducts = filterProductStore((state) => state.filterProducts);
  const setFilterProducts = filterProductStore(
    (state) => state.setFilterProducts
  );

  const { category } = useParams();
  const products = useCallback(
    async (category: string) => {
      try {
        const response = await fetchProducts(`${category}`);
        setFilterProducts(response);
      } catch (error) {
        console.log(error);
      }
    },
    [category]
  );

  useEffect(() => {
    products(category!);
  }, [category]);

  return (
    <>
      <Grid container spacing={2} sx={{paddingTop:5}}>
        {filterProducts.map((ele: Record<string, any>) => (
          <ProductCard key={ele.id} product={ele} />
        ))}
      </Grid>
    </>
  );
}

export default FilterProducts;

import { useCallback, useEffect, useState } from "react";
import ProductCard from "../product-card/ProductCard";
import { limitFetchProducts } from "../../services/apiServices";
import ViewMoreButton from "../buttons/viewMoreButton/ViewMoreButton";
import { Grid } from "@mui/material";
import { ActionStore } from "../../stores/actionsStore";

export default function Products() {
  const range = ActionStore((state)=>state.sideBarRange)
  const [Products,viewMore]=useState([])
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    limitFetchProducts(currentPage, viewMore,range);
  }, [currentPage]);

  const handleNextItems = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage]);

  return (
    <>
      <Grid container spacing={2}>
        {Products.map((ele: Record<string, any>, ind: number) => (
          <ProductCard key={ind} product={ele} />
        ))}
      </Grid>
      <ViewMoreButton handleNextItems={handleNextItems} />
    </>
  );
}

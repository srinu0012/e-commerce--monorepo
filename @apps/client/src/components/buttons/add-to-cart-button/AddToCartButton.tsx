import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { CartStore } from "../../../stores/cartStore";

function AddToCartButton({ product }: { product: Record<string, any> }) {
  const setProducts = CartStore((state) => state.setProducts);
  console.log(product,"<<<<<<<addto cart button")

  return (
    <>
      <Button
        endIcon={<ShoppingCartIcon />}
        variant="contained"
        color="primary"
        onClick={() => {
          setProducts(product);
        }}
      >
        Add To Cart
      </Button>
    </>
  );
}

export default React.memo(AddToCartButton);

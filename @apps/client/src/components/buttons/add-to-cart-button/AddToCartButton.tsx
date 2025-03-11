import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { CartStore } from "../../../stores/cartStore";
import { ProductItemType } from "../../../types/productItemType";

function AddToCartButton({ product }: { product: ProductItemType }) {
  const setProducts = CartStore((state) => state.setProducts);
  const countProducts = CartStore((state) => state.countProducts)
  const isAddToCartDisable = countProducts[product?.id] >= product?.stock ?true:false;
  
  return (
    <>
      <Button
        endIcon={<ShoppingCartIcon />}
        variant="contained"
        color="primary"
        onClick={() => {
          setProducts(product);
        }}
        disabled={isAddToCartDisable}
      >
        Add To Cart
      </Button>
    </>
  );
}

export default React.memo(AddToCartButton);

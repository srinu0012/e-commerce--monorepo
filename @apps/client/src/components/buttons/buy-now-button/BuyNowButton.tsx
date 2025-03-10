import { Box, Button } from "@mui/material";
import { CartStore } from "../../../stores/cartStore";
import { UserAuthStore } from "../../../stores/authStore";
import { ActionStore } from "../../../stores/actionsStore";
import { addOrders } from "../../../services/orderServices";



export default function BuyNowButton() {
  const cartProducts = CartStore((state)=>state.cartProducts);
  const countProducts = CartStore((state)=>state.countProducts);
  const clearProducts = CartStore((state)=>state.clearProducts)
  const isAuthenticated = UserAuthStore((state)=>state.isAuthenticated)
  const role = UserAuthStore((state)=>state.role)
  const token =UserAuthStore((state)=>state.token)
  const SetIsLoginFormOpen = ActionStore((state)=>state.SetIsLoginFormOpen)


  const handleBuyNow = async ()=>{
    if(isAuthenticated && role=="user" && token){
      const orderData = cartProducts.map((product) => ({
        product_id: product.id,
        count: countProducts[product.id], 
      }))
        await addOrders(orderData,token)
        clearProducts()
    }else{
      SetIsLoginFormOpen()
    }
  }
     
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" onClick={handleBuyNow}>
          Buy Now
        </Button>
      </Box>
    </>
  );
}

import { Grid, Box, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { getOrdersByUserId } from "../../services/orderServices";
import { UserAuthStore } from "../../stores/authStore";
import OrdersCard from "../order-card/OrderCard";

export default function UserOrders() {
 const [orders,SetOrders]=useState([])
 const token = UserAuthStore((state)=>state.token)

 const fetchOrders = useCallback(async (token:string)=>{
  const result:[] =await getOrdersByUserId(token)
    SetOrders([...result])
 },[token])

 
  useEffect(()=>{
    fetchOrders(token!);
  },[token])

  return (
    <>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "center", margin: 2 }}>
          <Typography variant="h4" color="primary">
            Orders
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {orders.map((order,ind) => {
            return <OrdersCard order={order} key={ind} />;
          })}
        </Grid>
      </Box>
    </>
  );
}




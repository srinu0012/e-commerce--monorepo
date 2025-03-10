import { Grid, Box, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { getAllOrdersForAdminService } from "../../services/orderServices";
import { UserAuthStore } from "../../stores/authStore";
import AdminOrderCard from "../admin-orders-card/AdminOrdersCard";
import { userType } from "../../types/userDataType";



export default function AdminProducts() {
const token = UserAuthStore((state)=>state.token)
const [userOrders,SetUserOrders]=useState([])

  const getAllOrders = useCallback(async () => {
   const orders = await getAllOrdersForAdminService(token!)
   SetUserOrders(orders)
  },[token])

  useEffect(()=>{
    getAllOrders()
  },[])

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2">Orders</Typography>
        {userOrders.map((user:userType) => (
          <>
            <Box sx={{ textAlign: "center",height:"100px" }}>
              <Typography variant="h5">{user.username}</Typography>
            </Box>
            <Grid container spacing={2}>
              {user.orders.map((order: Record<string, any>) => (
                  <AdminOrderCard order={order} user_id={user.id} />
              ))}
            </Grid>
          </>
        ))}
      </Box>
    </>
  );
}

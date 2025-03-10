import React, { useState } from 'react';
import { Card, CardContent, Typography, MenuItem, Select, FormControl, InputLabel, Box } from '@mui/material';
import { changeOrderStatusService } from '../../services/orderServices';
import { UserAuthStore } from '../../stores/authStore';


const AdminOrderCard = ({ order,user_id}:{order:Record<string,any>,user_id:number}) => {
  const [orderStatus, setOrderStatus] = useState(order.order_status);
  const token = UserAuthStore((state)=>state.token)

  const handleChangeStatus = (event: { target: { value: any; }; }) => {
    const newStatus = event.target.value;
    setOrderStatus(newStatus);
    changeOrderStatusService(newStatus,user_id,order.product_id,token!)
};

  return (
    <Card sx={{ Width: 345, marginBottom: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2 }}>
        <img src={order.thumbnail_url} alt={order.product_title} />
      </Box>
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {order.product_title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${parseFloat(order.product_price) * order.order_count}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status: {orderStatus}
        </Typography>

        <FormControl fullWidth sx={{ marginTop: 2 }}>
          <InputLabel>Status</InputLabel>
          <Select
            value={orderStatus}
            onChange={handleChangeStatus}
            label="Status"
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Shipped">Shipped</MenuItem>
            <MenuItem value="Delivered">Delivered</MenuItem>
            <MenuItem value="Cancelled">Cancelled</MenuItem>
          </Select>
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default React.memo(AdminOrderCard);

import React, { useCallback } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import { ProductItemType } from "../../types/productItemType";
import { useNavigate } from "react-router-dom";

function OrdersCard({ order }: { order: ProductItemType }) {
  const navigate = useNavigate();

  const handleViewDetails = useCallback(() => {
    navigate(`/productpage/${order.id}`);
  }, []);

  return (
    <Grid item key={order.id}>
      <Card sx={{ display: "flex", flexDirection: "column", boxShadow: 3,width:200 ,height:450 }}>
        <CardMedia
          component="img"
          height="200"
          image={order.thumbnail_url}
          alt={order.title}
          sx={{ objectFit: "contain" }}
        />
        <CardContent
          sx={{ display: "flex", flexDirection: "column", padding: 2 }}
        >
          <Typography variant="h6" component="div" gutterBottom>
            {order.title}
          </Typography>
          <Divider />
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginTop: 1 }}
          >
            Price: ${order.price}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Quantity: {order.order_count}
          </Typography>
          <Typography variant="h6" color="primary" sx={{ marginTop: 1 }}>
            Total: ${order.price * order.order_count!}
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            Status:{" "}
            <span
              style={{
                fontWeight: "bold",
                color: order.status === "Pending" ? "orange" : "green",
              }}
            >
              {order.status}
            </span>
          </Typography>
          <Box sx={{ marginTop: 2, display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleViewDetails}
            >
              View Details
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default React.memo(OrdersCard);

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Rating,
  Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductItemType } from "../../types/productItemType";
import AddToCartButton from "../buttons/add-to-cart-button/AddToCartButton";
import { fetchProductItem } from "../../services/apiServices";
import ReviewForm from "../review-form/Review-form";

export default function ProductItem() {
  const [product, setProduct] = useState<ProductItemType | null>(null);
  const { productId } = useParams();

  async function getProduct(id: string) {
    const data = await fetchProductItem(id);
    setProduct(data);
  }

  useEffect(() => {
    getProduct(productId!);
  }, [productId]);

  return (
    <>
      <Grid container justifyContent="center" spacing={2} sx={{ marginTop: 5 }}>
        {/* Product Image */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardMedia
              component="img"
              height="400"
              image={product?.thumbnail_url}
              alt={product?.title}
              sx={{
                objectFit: "contain",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            />
          </Card>
        </Grid>

        {/* Product Info */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                {product?.title}
              </Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                ${product?.price}{" "}
                <span style={{ color: "green", fontWeight: 500 }}>
                  {product?.discountPercentage}% OFF
                </span>
              </Typography>

              <Typography variant="body1">
                <strong>Category:</strong> {product?.category}
              </Typography>

              <Typography variant="body1">
                <strong>Brand:</strong> {product?.brand}
              </Typography>

              <Typography variant="body1">
                <strong>Dimensions:</strong> {product?.width} x{" "}
                {product?.height} x {product?.item_depth} cm
              </Typography>

              <Typography variant="body1">
                <strong>Availability:</strong> {product?.availabilityStatus} -{" "}
                {product?.stock} items in stock
              </Typography>

              <Typography variant="body1">
                <strong>Shipping Info:</strong> {product?.shipping_information}
              </Typography>

              <Typography variant="body1">
                <strong>Return Policy:</strong> {product?.return_policy}
              </Typography>

              <Typography variant="body1">
                <strong>Warranty Info:</strong> {product?.warranty_information}
              </Typography>

              <Divider sx={{ marginY: 2 }} />

              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                <strong>Rating:</strong>
              </Typography>
              <Rating name="read-only" value={product?.rating?Math.floor(product?.rating):0} readOnly />
              <Typography variant="body2" color="textSecondary">
                {product?.reviews.length} Reviews
              </Typography>

              <Divider sx={{ marginY: 2 }} />

              <AddToCartButton product={product!} />
            </CardContent>
          </Card>
        </Grid>

        {/* Reviews Section */}
        <Grid item xs={12} sx={{ marginTop: 5 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Customer Reviews:
          </Typography>
          <Box sx={{ maxHeight: 400, overflowY: "auto", marginBottom: 3 }}>
            {product?.reviews.map((review, index) => (
              <Box key={index} sx={{ marginBottom: 2 }}>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  <strong>{review?.username}</strong> -{" "}
                  <Rating value={review.rating} readOnly precision={0.1} />
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  {review.comment}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Add Review Form */}
          <ReviewForm product_id={productId!} />
        </Grid>
      </Grid>
    </>
  );
}

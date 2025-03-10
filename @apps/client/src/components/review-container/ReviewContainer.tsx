import { Grid, Typography, Box, Rating } from "@mui/material";
import { useEffect } from "react";
import { getReviewsByProductId } from "../../services/apiServices";
import { reviewsStore } from "../../stores/reviewStore";


function ReviewContainer({ product_id }: { product_id: string }) {
    const reviews = reviewsStore((state) => state.reviews)
    const SetReviews = reviewsStore((state) => state.SetReviews)

    useEffect(() => {
        getReviewsByProductId(product_id, SetReviews)
    }, [])
    return (<><Grid item xs={12} sx={{ marginTop: 5 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Customer Reviews:
        </Typography>
        <Box sx={{ maxHeight: 400, overflowY: "auto", marginBottom: 3 }}>
            {reviews.map((review, index) => (
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
    </Grid></>)
}

export default ReviewContainer;
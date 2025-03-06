import { Box, Button, Grid, Rating, TextField, Typography } from "@mui/material";
import { UserAuthStore } from "../../stores/authStore";
import { usePageNavigation } from "../../hooks/page-navigation-hook.ts/pageNavigation";
import { addreviews } from "../../services/apiServices";
import React, { useState } from "react";
import { FormEvent,ChangeEvent } from "react";
import { SyntheticEvent } from 'react';

function ReviewForm({ product_id }: { product_id: string }) {
    const role = UserAuthStore((state) => state.role)
    const isAuthenticated = UserAuthStore((state) => state.isAuthenticated)
    const token = UserAuthStore((state) => state.token)
    const GoToLogin = usePageNavigation("loginpage")

    const [rating, setRating] = useState<number>(0);
    const [comment, setComment] = useState<string>("")



    const handleFromSubmit = async (e:FormEvent) => {
        e.preventDefault()
        if (!isAuthenticated) {
            GoToLogin()
        } else if (role === "user" && isAuthenticated && token) {
            const review: Record<string,any> = await addreviews(rating, comment, product_id, token)
            console.log(review?.data)
            setRating(0)
            setComment("")
        }
    }

    const handleRating = (e:SyntheticEvent<Element, Event>, newValue: number | null ) => {
        setRating(newValue!)
    }

    const handleComment = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        setComment(e.target.value)
    }


    return (<>
        <Grid item xs={12}>
            <Typography variant="h6">Add Your Review:</Typography>
            <form onSubmit={handleFromSubmit} >
                <Box sx={{ marginBottom: 2 }}>
                    <Rating
                        name="rating"
                        value={rating}
                        onChange={handleRating}
                    />
                </Box>
                <TextField
                    name="comment"
                    label="Write your review"
                    fullWidth
                    multiline
                    rows={4}
                    value={comment}
                    onChange={handleComment}
                    required
                />
                <Box sx={{ marginTop: 2 }}>
                    <Button variant="contained" color="primary" type="submit">
                        Submit Review
                    </Button>
                </Box>
            </form>
        </Grid>

    </>)
}

export default React.memo(ReviewForm);
import { addProductReviewRepo } from "../repos/reviewsRepo.js"




export const addReviewService =async (rating:string,comment:string,product_id:string,user_id:string) =>{

    if (rating < "1" || rating > "5"){
        return {status:400,data:{message:"Rating must be between 1 and 5"}}
    }
    try {
        const review =await addProductReviewRepo(rating,comment,product_id,user_id)
    return {status:201,data:{message: "Review added successfully"}}
    } catch (error) {
    return {status:500,data:{message: "Internal server error"}}
        
    }
    

}
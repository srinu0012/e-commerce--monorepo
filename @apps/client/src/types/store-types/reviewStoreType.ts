type review ={
    comment:string,
    date:string,
    email:string,
    rating:number,
    username:string
}

export interface reviewStoreType {
    reviews:review[];
    SetReviews:(newReview:review[])=>void;
    clearReviews:()=>void;
}





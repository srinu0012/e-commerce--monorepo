import api from "./api";

export const categoryList = async () => {
  try {
    const response = await api.get("products/category-list");
    return response.data
  } catch (error) {
    return error
  }
};


export const fetchProducts = async (category: string) => {
  try {
    const response = await api.get(`products/category/${category}`);
    return response.data
  } catch (error) {
    return error
  }
};

const itemsPerPage = 2;

export const limitFetchProducts= async (currentPage: number, viewMore: Function,range:number[]) => {
  const priceRange = JSON.stringify(range) 
  try {
    const response = await api.get(
      `/products/all?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}&pricerange=${priceRange}`
    );
    console.log(response.data)
    viewMore((state: any) => [...state, ...response.data.products]);
  } catch (error) {
    return error
  }
};


export const fetchProductItem = async (id: string) => {
  try {
    const respone = await api.get(`/products/${id}`);
    return respone.data;
  } catch (error) {
    return error;
  }
};

export const addreviews = async (rating:number,comment:string,product_id:string,token:String)=>{
  try {
    const response =await api.post("products/review",{
      rating,
      comment,
      product_id
    },{headers:{
      "authorization": `Bearer ${token}`
    }})

    return response
  } catch (error:any) {
    return {data:error.message}
  }
}


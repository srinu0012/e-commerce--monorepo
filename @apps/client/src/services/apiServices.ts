import api from "./api";

export const categoryList = async () => {
  try {
    const response = await api.get("products/category-list");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchProducts = async (category: string) => {
  try {
    const response = await api.get(`products/category/${category}`);
    return response.data;
  } catch (error:any) {
    console.log(error.message);
  }
};

const itemsPerPage = 5;

export const limitFetchProducts = async (
  currentPage: number,
  SetProducts: Function,
  range: number[]
) => {
  const priceRange = JSON.stringify(range);
  try {
    const response = await api.get(
      `/products/all?limit=${itemsPerPage}&skip=${currentPage}&pricerange=${priceRange}`
    );
    if (response.data.total <= +response.data.skip + +itemsPerPage) {
      SetProducts(response.data.products, true);
    } else {
      SetProducts(response.data.products, false);
    }
  } catch (error) {
    return error;
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

export const addreviews = async (
  rating: number,
  comment: string,
  product_id: string,
  token: String
) => {
  try {
    const response = await api.post(
      "products/review",
      {
        rating,
        comment,
        product_id,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getReviewsByProductId = async (
  id: string,
  SetReviews: Function
) => {
  try {
    const response = await api.get(`products/review/${id}`);
    if (response.data.length > 0) {
      SetReviews(response.data);
    } else {
      SetReviews([{ comment: "No commments" }]);
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};



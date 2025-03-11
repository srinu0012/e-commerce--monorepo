import { AxiosError } from "axios";
import api from "./api";
import { ProductItemType } from "../types/productItemType";
import { ReviewsType } from "../types/reviewType";

export const categoryList = async () => {
  try {
    const response = await api.get("products/category-list");
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export const fetchProducts = async (category: string) => {
  try {
    const response = await api.get(`products/category/${category}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

const itemsPerPage = 5;

export const limitFetchProducts = async (
  currentPage: number,
  SetProducts: (arg0:ProductItemType[],arg1:boolean)=>void,
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
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export const fetchProductItem = async (id: string) => {
  try {
    const respone = await api.get(`/products/${id}`);
    return respone.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export const addreviews = async (
  rating: number,
  comment: string,
  product_id: string,
  token: string
) => {
  try {
    const response = await api.post(
      "products/review",
      { rating, comment, product_id },
      { headers: { authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export const getReviewsByProductId = async (
  id: string,
  SetReviews: (arg0:ReviewsType[])=>void
) => {
  try {
    const response = await api.get(`products/review/${id}`);
    if (response.data.length > 0) {
      SetReviews(response.data);
    } else {
      SetReviews([{ comment: "No commments" }]);
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

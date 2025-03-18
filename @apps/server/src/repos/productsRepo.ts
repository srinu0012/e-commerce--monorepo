import { query } from "../utils/queryHelper.js";

export const allProductsRepo = async (
  limit: string,
  skip: string,
  lowprice: number,
  highprice: number
) => {
  try {
    const result = await query(
      "select * from products where price >= $1 and price <= $2 limit $3 offset $4;",
      [lowprice, highprice, limit, skip]
    );
    return result.rows;
  } catch (error) {
    console.log(error);
  }
};

export const allProductsCountRepo = async () => {
  const result = await query("select count(*) from products;");
  return result.rows[0].count;
};

export const allCategoriesRepo = async () => {
  const result = await query("select distinct category from products");
  return result.rows.map((row) => row.category);
};

export const getProductsByCategoryRepo = async (category: string) => {
  const result = await query("select * from products where category=$1", [
    category,
  ]);
  return result.rows;
};

export const getProductByIdRepo = async (id: string) => {
  const result = await query("select * from products where id = $1", [id]);
  return result.rows[0];
};

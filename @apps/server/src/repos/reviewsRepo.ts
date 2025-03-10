import { query } from "../utils/queryHelper.js";

export const getReviewsByIdRepo = async (id: string) => {
  try {
    const result =
      await query(`SELECT r.rating AS rating, r.comment AS comment, r.date AS date, u.username, u.email
        FROM reviews r
        JOIN users u ON r.user_id = u.id
        WHERE r.product_id = ${id}
        ORDER BY r.date DESC;`);
    return { status: 200, data: result.rows };
  } catch (error) {
    throw new Error("Internal server error");
  }
};

export const addProductReviewRepo = async (rating: string,comment: string,product_id: string,user_id: string) => {
  try {
    const result = await query(
      "INSERT INTO reviews (product_id, user_id, rating, comment) values ($1,$2,$3,$4)",
      [product_id, user_id, rating, comment]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error("Internal server error");
  }
};

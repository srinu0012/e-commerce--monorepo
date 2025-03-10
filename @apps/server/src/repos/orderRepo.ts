import { query } from "../utils/queryHelper.js";

type ordersType = {
  product_id: number;
  count: number;
};

export const addOrderRepo = async (user_id: number, values: ordersType) => {
  const { product_id, count } = values;
  try {
    const queryText = `
        INSERT INTO orders (user_id, product_id, order_count)
        VALUES ($1, $2, $3)
        ON CONFLICT (user_id, product_id)
        DO UPDATE SET order_count = orders.order_count + EXCLUDED.order_count,updated_at = CURRENT_TIMESTAMP;  
        `;
    await query(queryText, [user_id, product_id, count]);
    return { status: 204, data: { message: "added successfully" } };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getOrderByUserIdRepo =async (user_id:string)=>{
  try {
    const result = await query(`SELECT p.*,o.status,o.order_count FROM products p 
    JOIN orders o ON o.product_id = p.id 
    WHERE o.user_id = ${user_id}`)
    return ({status:200,data:result.rows})
  } catch (error:any) {
    throw new Error(error.message);
  }
}



export const getUserOrders = async () => {
  try {
    const result = await query(
      `SELECT 
          u.username,
          u.id, 
          json_agg(
              jsonb_build_object(
                  'order_id', o.order_id,
                  'product_id', o.product_id,
                  'product_title', p.title,
                  'order_count', o.order_count,
                  'order_status', o.status,
                  'product_price', p.price,
                  'thumbnail_url', p.thumbnail_url,
                  'created_at', o.created_at
              )
          ) AS orders
      FROM 
          users u
      JOIN 
          orders o ON o.user_id = u.id
      JOIN 
          products p ON p.id = o.product_id
      GROUP BY 
          u.id
      ORDER BY 
          u.username;`
    );
    return result.rows
  } catch (error:any) {
    console.error('Error fetching user orders:', error);
    throw new Error(`${error.message}`);
  }
};


export const changeOrderStatusRepo =async (status:string,product_id:number,user_id:number) => {
  try {
    const result = await query(`UPDATE orders
      SET status = $1
      WHERE product_id = $2 AND user_id = $3`,[status,product_id,user_id])
    return result.rows
  } catch (error:any) {
    console.log(error);
    throw Error(`${error.message}`)
  }
}
# e-commerce--monorepo Database queries
A simple e-commerce website
-- CREATE TABLE products (
--     id SERIAL PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     description TEXT,
--     category VARCHAR(100),
--     price DECIMAL(10, 2),
--     discount_percentage DECIMAL(5, 2),
--     rating DECIMAL(3, 2),
--     stock INT,
--     brand VARCHAR(100),
--     width DECIMAL(10, 2),
--     height DECIMAL(10, 2),
--     item_depth DECIMAL(10, 2),
--     warranty_information TEXT,
--     shipping_information TEXT,
--     availability_status VARCHAR(50),
--     return_policy VARCHAR(255),
--     thumbnail_url TEXT,  -- New column to store the thumbnail image URL
--     created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
-- )


-- -- select * from products;

-- -- select distinct category from products;
-- -- select * from users;

-- -- ALTER TABLE users
-- -- ADD COLUMN mobile_number VARCHAR(15) UNIQUE;

-- -- update users set mobile_number =9490762859 where id =6;
-- -- CREATE TABLE top_products (
-- --     id SERIAL PRIMARY KEY,
-- --     image_url TEXT NOT NULL,
-- --     title TEXT NOT NULL,
-- --     description TEXT NOT NULL,
-- --     subtitle TEXT NOT NULL
-- -- );

-- -- CREATE TABLE reviews (
-- --     id SERIAL PRIMARY KEY,
-- --     product_id INT NOT NULL,
-- --     user_id INT NOT NULL,
-- --     rating INT NOT NULL,
-- --     comment TEXT,
-- --     date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
-- --     FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
-- --     FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
-- -- );

-- select * from products where price >= 0 and price <= 9 limit 3 offset 0 ;




-- -- INSERT INTO reviews (product_id, user_id, rating, comment)
-- -- VALUES
-- -- (1, 5, 1, 'Very unhappy with my purchase!'),
-- -- (1, 6, 2, 'Not as described!'),
-- -- (2, 5, 3, 'Very satisfied!');


-- -- SELECT r.rating as rating,r.comment as comment,r.date as date, u.username,u.email
-- -- FROM reviews r
-- -- JOIN users u ON r.user_id = u.id
-- -- WHERE r.product_id = 1 order by date desc;

-- -- select * from reviews;
-- -- select * from products;

-- -- select * from users;
-- -- \d reviews;
-- -- CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)


-- -- insert into reviews (product_id,user_id,rating,comment) values (3,6,4,'hi');


-- select * from users;





-- CREATE TABLE orders (
--     order_id SERIAL PRIMARY KEY,
--     user_id INT NOT NULL,
--     product_id INT NOT NULL,
--     order_count INT DEFAULT 1, -- Initializes order count to 1
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     CONSTRAINT unique_user_product UNIQUE (user_id, product_id) -- Unique constraint on user_id + product_id
-- );
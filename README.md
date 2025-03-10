# e-commerce--monorepo
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
-- );

-- -- INSERT INTO products (
-- --     title,
-- --     description,
-- --     category,
-- --     price,
-- --     discount_percentage,
-- --     rating,
-- --     stock,
-- --     brand,
-- --     width,
-- --     height,
-- --     item_depth,
-- --     warranty_information,
-- --     shipping_information,
-- --     availability_status,
-- --     return_policy,
-- --     thumbnail_url,
-- --     created_at,
-- --     updated_at
-- -- )
-- -- VALUES (
-- --     'Essence Mascara Lash Princess',
-- --     'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
-- --     'beauty',
-- --     9.99,
-- --     7.17,
-- --     4.94,
-- --     5,
-- --     'Essence',
-- --     23.17,
-- --     14.43,
-- --     28.01,
-- --     '1 month warranty',
-- --     'Ships in 1 month',
-- --     'Low Stock',
-- --     '30 days return policy',
-- --     'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',
-- --     '2024-05-23 08:56:21',
-- --     '2024-05-23 08:56:21'
-- -- );

-- -- select * from products;

-- -- Insert product 2: Eyeshadow Palette with Mirror
-- -- INSERT INTO products (
-- --     title, description, category, price, discount_percentage, rating, stock, brand,
-- --     width, height, item_depth, warranty_information, shipping_information, availability_status,
-- --     return_policy, thumbnail_url, created_at, updated_at
-- -- ) VALUES (
-- --     'Eyeshadow Palette with Mirror',
-- --     'The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it\s convenient for on-the-go makeup application.',
-- --     'beauty',
-- --     19.99,
-- --     5.5,
-- --     3.28,
-- --     44,
-- --     'Glamour Beauty',
-- --     12.42,
-- --     8.63,
-- --     29.13,
-- --     '1 year warranty',
-- --     'Ships in 2 weeks',
-- --     'In Stock',
-- --     '30 days return policy',
-- --     'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png',
-- --     '2024-05-23 08:56:21',
-- --     '2024-05-23 08:56:21'
-- -- );

-- -- -- Insert product 3: Powder Canister
-- -- INSERT INTO products (
-- --     title, description, category, price, discount_percentage, rating, stock, brand,
-- --     width, height, item_depth, warranty_information, shipping_information, availability_status,
-- --     return_policy, thumbnail_url, created_at, updated_at
-- -- ) VALUES (
-- --     'Powder Canister',
-- --     'The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.',
-- --     'beauty',
-- --     14.99,
-- --     18.14,
-- --     3.82,
-- --     59,
-- --     'Velvet Touch',
-- --     24.16,
-- --     10.7,
-- --     11.07,
-- --     '2 year warranty',
-- --     'Ships in 1-2 business days',
-- --     'In Stock',
-- --     '60 days return policy',
-- --     'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png',
-- --     '2024-05-23 08:56:21',
-- --     '2024-05-23 08:56:21'
-- -- );

-- -- -- Insert product 4: Red Lipstick
-- -- INSERT INTO products (
-- --     title, description, category, price, discount_percentage, rating, stock, brand,
-- --     width, height, item_depth, warranty_information, shipping_information, availability_status,
-- --     return_policy, thumbnail_url, created_at, updated_at
-- -- ) VALUES (
-- --     'Red Lipstick',
-- --     'The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.',
-- --     'beauty',
-- --     12.99,
-- --     19.03,
-- --     2.51,
-- --     68,
-- --     'Chic Cosmetics',
-- --     14.37,
-- --     13.94,
-- --     14.6,
-- --     'Lifetime warranty',
-- --     'Ships in 2 weeks',
-- --     'In Stock',
-- --     '90 days return policy',
-- --     'https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png',
-- --     '2024-05-23 08:56:21',
-- --     '2024-05-23 08:56:21'
-- -- );

-- -- Insert product 5: Red Nail Polish
-- -- INSERT INTO products (
-- --     title, description, category, price, discount_percentage, rating, stock, brand,
-- --     width, height, item_depth, warranty_information, shipping_information, availability_status,
-- --     return_policy, thumbnail_url, created_at, updated_at
-- -- ) VALUES (
-- --     'Red Nail Polish',
-- --     'The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.',
-- --     'beauty',
-- --     8.99,
-- --     2.46,
-- --     3.91,
-- --     71,
-- --     'Nail Couture',
-- --     8.11,
-- --     10.89,
-- --     29.06,
-- --     '1 year warranty',
-- --     'Ships in 1 week',
-- --     'In Stock',
-- --     'No return policy',
-- --     'https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png',
-- --     '2024-05-23 08:56:21',
-- --     '2024-05-23 08:56:21'
-- -- );

-- -- -- Insert product 6: Calvin Klein CK One
-- -- INSERT INTO products (
-- --     title, description, category, price, discount_percentage, rating, stock, brand,
-- --     width, height, item_depth, warranty_information, shipping_information, availability_status,
-- --     return_policy, thumbnail_url, created_at, updated_at
-- -- ) VALUES (
-- --     'Calvin Klein CK One',
-- --     'CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It\s a versatile fragrance suitable for everyday wear.',
-- --     'fragrances',
-- --     49.99,
-- --     0.32,
-- --     4.85,
-- --     17,
-- --     'Calvin Klein',
-- --     11.53,
-- --     14.44,
-- --     6.81,
-- --     '5 year warranty',
-- --     'Ships overnight',
-- --     'In Stock',
-- --     'No return policy',
-- --     'https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png',
-- --     '2024-05-23 08:56:21',
-- --     '2024-05-23 08:56:21'
-- -- );


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

-- -- INSERT INTO top_products (image_url, title, description, subtitle)
-- -- VALUES
-- -- ('https://img.freepik.com/free-photo/cosmetic-male-beauty-products-with-display_23-2150435195.jpg?semt=ais_hybrid', 'Fashion', 'Stylish Clothing for Men & Women', 'Explore trendy outfits for all occasions.'),
-- -- ('https://images.yourstory.com/cs/4/211ccaf00e6d11e997fe8f165dce9bb1/Imageifxu-1596799036123-1601633425902.jpg?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75', 'Electronics', 'Modern Gadgets & Accessories', 'Latest tech products for your needs.'),
-- -- ('https://img.freepik.com/free-photo/cosmetic-male-beauty-products-with-display_23-2150435195.jpg?semt=ais_hybrid', 'Home Appliances', 'Essential Appliances for Your Home', 'Upgrade your living space with high-quality appliances.');

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

-- -- insert into reviews (product_id, user_id, rating, comment) values (1,5,1,'nice one');

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
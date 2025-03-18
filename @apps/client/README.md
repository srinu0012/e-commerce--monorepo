E-Commerce Application - React.js Training Project
Objective
The goal of this project is to help trainees learn and apply core React.js concepts by building a fully functional e-commerce application. The application will cover React hooks, lifecycle methods, public/private routing, Zustand store, API calls using Axios, performance optimization, authentication, authorization, and more.
Technology Stack
Frontend: React.js, React Router, Zustand, Axios
Backend API: DummyJSON (https://dummyjson.com) to begin with later, we will implement APIs in nodejs once we are done with React project
Authentication: JSON Web Tokens (JWT) frontend authentication to begin with later, we will implement APIs in nodejs
Styling: Material UI (https://mui.com) with Dark mode toggle
State Management: Zustand
Deployment: Github pages
Features Overview
1. User Authentication & Authorization
User registration & login (JWT-based)
User should be able to login with mobile/email and password
Role-based access control (Customer/Admin)
Store token in local storage/session storage
Store logged in user profile in Zustand store
This component should be a popup as user should be able to login from any of the public page.
Logout functionality
2. Product Listing & Search
This is a public customer route and default home route
Fetch products from DummyJSON API, later we will integrate Nodejs APIs
Display products in a grid layout
Search products by name/category
Implement filters (price, category, rating)
Implement pagination
On page reload user should stay on this page and filters also should persist
You can set filters in query parameters
3. Product Details Page
This is a public customer route
Take the product id from path parameters
On page reload user should stay on this page
Display product information (title, price, description, image, etc.)
Show related products
Show and Add reviews & ratings
4. Shopping Cart
This is a public customer route
Add/remove items from the cart (using Zustand store)
Show cart summary (total price, item count)
On page reload user should stay on this page and see previous cart items
Handle stock availability
5. Checkout & Order Management
This is a private customer route. Ask user to login if user not logged in.
Capture user details (name, address, payment method) (Pre-fill available details)
Simulated payment process (mock API response)
Store order details in API/local storage
Show order confirmation page
6. User Dashboard
This is a private customer route. Ask user to login if user not logged in.
View past orders with order status
Edit profile information
7. Admin Panel
This is a private admin route. Ask user to login if user not logged in.
View all orders and update the status of order
8. Performance Optimization
Lazy loading components using React Suspense
Memoization using useMemo and useCallback
Virtualized lists for large product lists
9. Nodejs API Integration
Implement login API with JWT authentication token.
Implement middle wares to authenticate all private APIs
Implement CRUD APIs for Products with role based authentication 
Implement CRUD APIs for Orders with role based authentication 
10. Database Integration
Create PostgreSQL DB.
Create Users, Products and Orders Tables with best practices.
Evaluation Criteria
Code structure, quality & best practices
Proper use of React hooks & state management
Performance Optimisation
Bundle Size
API integration & error handling
UI/UX design & responsiveness
Authentication & Authorization in Reactjs and Nodejs implementation
Deployment & documentation



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



-- -- SELECT r.rating as rating,r.comment as comment,r.date as date, u.username,u.email
-- -- FROM reviews r
-- -- JOIN users u ON r.user_id = u.id
-- -- WHERE r.product_id = 1 order by date desc;


-- CREATE TABLE orders (
--     order_id SERIAL PRIMARY KEY,
--     user_id INT NOT NULL,
--     product_id INT NOT NULL,
--     order_count INT DEFAULT 1, -- Initializes order count to 1
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     CONSTRAINT unique_user_product UNIQUE (user_id, product_id) -- Unique constraint on user_id + product_id
-- );
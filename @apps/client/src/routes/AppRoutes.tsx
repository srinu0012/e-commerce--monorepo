import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuthAdmin from "./protected-routes/AdminRoutes";
import RequireAuthUser from "./protected-routes/UserRoute";
import AdminPage from "../pages/admin-page/AdminPage";
const HomePage = lazy(() => import("../pages/home/Home"));
const LoginPage = lazy(() => import("../pages/register-page/RegisterPage"));
const CartPage = lazy(() => import("../pages/cart-page/CartPage"));
const CategoryPage = lazy(() => import("../pages/category-page/CategoryPage"));
const ProductItemPage = lazy(
  () => import("../pages/product-item-page/ProductItemPage")
);
const ProfilePage = lazy(() => import("../pages/profile-page/ProfilePage"));
const UserOrdersPage = lazy(
  () => import("../pages/user-ordered-products-page/UserOrderedProductsPage")
);

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="/registerpage"
        element={
          <Suspense>
            <LoginPage />
          </Suspense>
        }
      />
      <Route
        path="/cartpage"
        element={
          <Suspense>
            <CartPage />
          </Suspense>
        }
      />
      <Route
        path="/categorypage/:category"
        element={
          <Suspense>
            <CategoryPage />
          </Suspense>
        }
      />
      <Route
        path="/productpage/:productId"
        element={
          <Suspense>
            <ProductItemPage />
          </Suspense>
        }
      />
      <Route
        path="/profilepage"
        element={
          <Suspense>
            <RequireAuthUser>
              <ProfilePage />
            </RequireAuthUser>
          </Suspense>
        }
      />

      <Route
        path="/admindashbord"
        element={
          <Suspense>
            <RequireAuthAdmin>
              <AdminPage />
            </RequireAuthAdmin>
          </Suspense>
        }
      />

      <Route
        path="/orders"
        element={
          <Suspense>
            <RequireAuthUser>
              <UserOrdersPage />
            </RequireAuthUser>
          </Suspense>
        }
      />
    </Routes>
  );
}

import { createBrowserRouter } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ErrorPage from "./pages/ErrorPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import FaqPage from "./pages/FaqPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AuthModal from "./components/auth/AuthModal";
import { Outlet } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/:productId",
        element: <ProductDetailPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/faq",
        element: <FaqPage />,
      },
    ],
  },
  {
    path: "/",
    element: <ProtectedLayout />, // Your layout with auth check
    children: [
      {
        path: "/favourites",
        element: <div>Favourites Page</div>,
      },
    ],
  },
]);

function ProtectedLayout() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <AuthModal />;
  }

  return <Outlet />;
}

export default router;

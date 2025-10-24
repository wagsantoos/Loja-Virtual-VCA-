import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import CartPage from "./pages/Cart/CartPage";
import HomePage from "./pages/Home/HomePage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
        {
            index: true,
            element: <HomePage />
        },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default router

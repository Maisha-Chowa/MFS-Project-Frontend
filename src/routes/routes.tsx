import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import EyeGlass from "../pages/EyeGlass";
import PrivateRoute from "./PrivateRoute";
import AddEyeGlass from "../pages/AddEyeGlass";
import EyeGlassDetails from "../pages/EyeGlassDetails";
import UpdateEyeGlass from "../pages/UpdateEyeGlass";
import SaleEyeGlass from "../pages/SaleEyeGlass";
import SalesHistory from "../pages/SalesHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/eyeglass",
        element: (
          <PrivateRoute>
            <EyeGlass />
          </PrivateRoute>
        ),
      },
      {
        path: `/eyeglass/:id`,
        element: (
          <PrivateRoute>
            <EyeGlassDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/eyeglass/create",
        element: (
          <PrivateRoute>
            <AddEyeGlass />
          </PrivateRoute>
        ),
      },
      {
        path: `/eyeglass/update/:id`,
        element: (
          <PrivateRoute>
            <UpdateEyeGlass />
          </PrivateRoute>
        ),
      },
      {
        path: `/sale-history`,
        element: (
          <PrivateRoute>
            <SalesHistory />
          </PrivateRoute>
        ),
      },
      {
        path: `/eyeglass/sale/:id`,
        element: (
          <PrivateRoute>
            <SaleEyeGlass />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Main from "../layout/Main";
import Login from "../pages/Login";
import Booking from "../pages/Booking";
import Loading from "../pages/Loading";
import LoginLayout from "../layout/LoginLayout";
import Register from "../pages/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: ({ params }) => fetch(`http://localhost:3000/places`),
        element: <Home />,
      },
      {
        path: "/booking/:id",
        element: <Booking />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/places/${params.id}`),
      },
      {
        path: "/loading",
        element: <Loading />,
      },
    ],
  },
  {
    path: "/auth",
    element: <LoginLayout />,
    children: [
      {
        path: "/auth",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Main from "../layout/Main";
import Login from "../pages/Login";
import Booking from "../pages/Booking";
import Loading from "../pages/Loading";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/loading",
        element: <Loading />,
      },
    ],
  },
  // {
  //   path: "/about",
  //   component: About,
  // },
  // {
  //   path: "/contact",
  //   component: Contact,
  // },
]);

export default router;

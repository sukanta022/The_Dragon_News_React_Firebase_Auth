import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import HomePage from "../Pages/HomePage";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../Components/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayouts,
    children : [
      {
        path: "",
        Component : HomePage
      },
      {
        path: "category/:id",
        Component: CategoryNews,
        loader : () => fetch('/news.json'),
        hydrateFallbackElement : <Loading></Loading>
      },
      
      
    ]
  },
  {
    path: "login",
    Component: Login
  },
  {
    path: "register",
    Component: Register
  },
  {
        path: "/news-details/:id",
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader : () => fetch('/news.json'),
        hydrateFallbackElement: <Loading></Loading>
      }
]);
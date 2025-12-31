import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import HomePage from "../Pages/HomePage";
import CategoryNews from "../Pages/CategoryNews";

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
        loader : () => fetch('/news.json')
      }
    ]
  },
]);
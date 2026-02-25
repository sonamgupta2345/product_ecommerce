import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NotFound404 from "./pages/Notfound";
import Details from "./pages/Details";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/:slug?",
          element: <Home />
        },
        {
          path: "/product/detail/:id",
          element: <Details />,
        },
        {
          path: "*",
          element: <NotFound404 />,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

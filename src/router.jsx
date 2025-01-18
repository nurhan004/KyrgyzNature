import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";

export const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
    ]
    },
  ]);
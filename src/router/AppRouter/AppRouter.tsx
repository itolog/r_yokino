import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { pages } from "@/constants/navigations.ts";

import DrawerLayout from "@/layouts/DrawerLayout/DrawerLayout.tsx";

import Movies from "@/pages/Movies/Movies.tsx";
import Series from "@/pages/Series/Series.tsx";

const router = createBrowserRouter([
  {
    path: pages.HOME,
    element: <DrawerLayout />,
    children: [
      { index: true, element: <Movies /> },

      {
        path: pages.SERIES,
        element: <Series />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;

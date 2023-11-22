import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayouts from "@layouts/MainLayouts/MainLayouts.tsx";

import Movies from "@pages/Movies/Movies.tsx";
import Series from "@pages/Series/Series.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      { index: true, element: <Movies /> },

      {
        path: "series",
        element: <Series />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;

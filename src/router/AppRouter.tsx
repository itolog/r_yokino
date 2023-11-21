import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movies from "../components/Movies/Movies.tsx";
import Series from "../components/Series/Series.tsx";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts.tsx";

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

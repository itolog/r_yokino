import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movies from "@/components/Movies/Movies";
import Series from "@/components/Series/Series";
import MainLayouts from "@/layouts/MainLayouts/MainLayouts.tsx";

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

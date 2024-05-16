import { createBrowserRouter } from "react-router-dom";
import { Home, Following } from "./routerConfig";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/following",
    element: <Following />,
  },
]);

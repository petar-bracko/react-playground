import { createBrowserRouter } from "react-router-dom";
import { Homepage, UseStateHell } from "pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/useStateHell",
    element: <UseStateHell />,
  },
]);

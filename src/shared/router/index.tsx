import { createBrowserRouter } from "react-router-dom";

import CountPage from "../../page/count-page";
import RootPage from "../../page/root-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
  {
    path: "/count",
    element: <CountPage />,
  },
]);

export default router;

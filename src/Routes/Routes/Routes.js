import Main from "../../Layouts/Main";
import LandingPage from "../../Pages/LandingPage/LandingPage";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
]);
export default router;

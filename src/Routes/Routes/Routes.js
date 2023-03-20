import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import OurTeam from "../../Pages/Company/Team/OurTeam";
import WorkWithUs from "../../Pages/Company/WorkWith/WorkWithUs";
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
      {
        path: "/about",
        element: <LandingPage />,
      },
      {
        path: "/pricing",
        element: <LandingPage />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/profile",
        element: <LandingPage />,
      },
      {
        path: "/workWithus",
        element: <WorkWithUs />,
      },
      {
        path: "/team",
        element: <OurTeam />,
      },
    ],
  },
]);
export default router;

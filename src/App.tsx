import { Fragment, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, History, MainLayout, Profile, UserSettings } from "./pages";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "history",
          element: <History />,
        },
        {
          path: "settings",
          element: <UserSettings />,
        },
      ],
    },
  ]);
  useEffect(() => {
    document.title = "Banjo | Budgeting Companion";
  }, []);

  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

import App from "./App";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import MainLayout from "./pages/MainLayout";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <Dashboard />
          },
          {
            path: "dashboard",
            element: <Dashboard />
          },
          {
            path: "history",
            element: <History />
          },
          {
            path: "settings",
            element: <Settings />
          },
          {
            path: "profile",
            element: <Profile />
          }

        ]
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

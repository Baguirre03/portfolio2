import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Page from "./webdev/Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "web",
    element: <Page></Page>,
  },
  {
    path: "marketing",
    element: <h1>Page is Currently a WIP!</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

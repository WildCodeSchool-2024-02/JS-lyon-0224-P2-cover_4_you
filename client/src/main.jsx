import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import BookPage from "./pages/BookPage";
import ResultPage from "./pages/ResultPage";

const router = createBrowserRouter([
  {
    element: <App />,
    id: "app",
    children: [
      {
        path: "/",
        id: "home",
        element: <Home />,
      },
      {
        path: "/book-page/:isbn",
        element: <BookPage />,
      },
      {
        path: "/result-page/:userQuery",
        id: "result-page",
        element: <ResultPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

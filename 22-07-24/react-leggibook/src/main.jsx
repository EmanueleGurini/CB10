import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookDetailPage from "./pages/BookDetailPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Create from "./pages/Create.jsx";
import Edit from "./pages/Edit.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "books/:id",
        element: <BookDetailPage />,
      },
      { path: "create", element: <Create /> },
      {
        path: "edit/:id",
        element: <Edit />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  </React.StrictMode>
);

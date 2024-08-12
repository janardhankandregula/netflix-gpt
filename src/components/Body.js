import React, { useEffect } from "react";
import Login from "./Login";

import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import NavRoute from "./NavRoute";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",

      element: (
        <NavRoute>
          <Login />
        </NavRoute>
      ),
    },
    {
      path: "/browse",

      element: (
        <ProtectedRoute>
          <Browse />
        </ProtectedRoute>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

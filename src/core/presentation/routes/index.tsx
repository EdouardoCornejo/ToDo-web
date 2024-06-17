import type { Router as RemixRouter } from "@remix-run/router/dist/router";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./PrivateRoute";
import { RedirectWrapper } from "./RedirectWrapper";
import { ErrorPage, TodoApp } from "../pages/ui";
import { Login, Register } from "../pages/auth";

export const router: RemixRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <RedirectWrapper>
                <Outlet />
      </RedirectWrapper>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
    ],
  },
  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <TodoApp />
      </ProtectedRoute>
    ),
  }
]);

import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hook";
import { AuthenticationStatus } from "../../domain";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { authStatus } = useAppSelector(
    ({
      core: {
        persistedReducer: { authSlice },
      },
    }) => authSlice
  );

  return authStatus === AuthenticationStatus.authenticated ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};

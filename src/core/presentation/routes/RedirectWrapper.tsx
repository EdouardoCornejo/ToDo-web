import { useLocation, Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hook';
import { AuthenticationStatus } from '../../domain';

export const RedirectWrapper = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const { authStatus } = useAppSelector(
    ({
      core: {
        persistedReducer: { authSlice },
      },
    }) => authSlice
  );

  if (authStatus === AuthenticationStatus.noAuthenticated && ( location.pathname !== '/login' && location.pathname !== '/register' )) {
    return <Navigate to="/login" />;
  }

  return children;
};
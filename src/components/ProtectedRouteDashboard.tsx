
import { Navigate, RouteProps } from "react-router-dom";
import { useAuth } from "../hooks/contexts";

type ProtectedRouteProps = Omit<RouteProps, 'component'> & {
  isPrivate?: boolean;
  redirectTo?: string;
}

export default function ProtectedRouteDashboard({ isPrivate, redirectTo, children}: ProtectedRouteProps): JSX.Element {

  const { isAuthenticated } = useAuth();

  if (isPrivate && !isAuthenticated) { return <Navigate to={redirectTo || '/'} /> }

  return <>{children}</>
}
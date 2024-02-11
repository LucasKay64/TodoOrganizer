import { Navigate, Outlet } from "react-router-dom";

import { useVerifyApiTokenAndGetUser } from "../features/authentication/api/verifyApiTokenAndGetUser";

interface PublicRouteProps {
  children?: React.ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const { user } = useVerifyApiTokenAndGetUser();

  if (user) {
    return <Navigate to="/app" replace />;
  }

  return children ? children : <Outlet />;
};

export default PublicRoute;

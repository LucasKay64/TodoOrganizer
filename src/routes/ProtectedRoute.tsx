import { Navigate, Outlet } from "react-router-dom";

import { useVerifyApiTokenAndGetUser } from "../features/authentication/api/verifyApiTokenAndGetUser";

interface ProtectedRouteProps {
  children?: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useVerifyApiTokenAndGetUser();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;

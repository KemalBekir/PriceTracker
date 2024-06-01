import { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "@/contexts/authContext";
import { AuthContextType } from "@/interfaces/interfaces";

const PrivateRoute: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuthContext() as AuthContextType;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
};

export default PrivateRoute;

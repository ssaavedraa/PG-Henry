import { Navigate } from "react-router-dom";
import useAuth from "../customHooks/useAuth";

function ProtectedRoute({ role, children }) {
  const { user, isLoading } = useAuth();
  if (isLoading) return <div></div>;
  if (user.role !== role) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;

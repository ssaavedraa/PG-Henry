import { Navigate } from "react-router-dom";
import useAuth from "../customHooks/useAuth";

function ProtectedRoute({ role, children }) {
  const { user, firstLoad } = useAuth();
  if (firstLoad) return <div></div>;
  if (user.role !== role) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;

import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const localUser = localStorage.getItem("authUser");
  const sessionUser = sessionStorage.getItem("authUser");

  const isAuthenticated = localUser || sessionUser;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
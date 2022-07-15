import { useSelector } from "react-redux";
import { selectAuthState } from "../features/authSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { userId } = useSelector(selectAuthState);

  if (!userId) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;

import { Navigate } from "react-router-dom";

const PrivateRoute = ({ user, children }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  return user || storedUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

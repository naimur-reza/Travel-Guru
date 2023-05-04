import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (user) {
    return children;
  }
  if (loading) {
    return <Loading />;
  }
  return <Navigate to={"/auth"}></Navigate>;
};

export default PrivateRoute;

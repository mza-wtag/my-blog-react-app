import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);

  if (!loggedInUser) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default ProtectedRoute;

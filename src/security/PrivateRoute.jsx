import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // ❌ Not logged in
  if (!token) {
    return <Navigate to="/loginuser" replace />;
  }

  // ✅ Logged in
  return children;
};

export default PrivateRoute;
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const user = localStorage.getItem("loggedUser");
    return user ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoutes;

// src/AdminRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const AdminRoute = ({ children }) => {
    const [{ user }] = useStateValue();
    return user?.isAdmin ? children : <Navigate to="/" />;
};

export default AdminRoute;

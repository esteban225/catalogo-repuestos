import type React from "react";
import { Navigate } from "react-router-dom";

interface ProtectRoutesProps{
    children: React.ReactNode;
}

export default function ProtectRoutes({ children }: ProtectRoutesProps) {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/login"/>
        
    }
  return children;
}

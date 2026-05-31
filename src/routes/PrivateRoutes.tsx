import { Route, Routes } from "react-router-dom";
import ProtectRoutes from "./ProtectRoutes";

export default function PrivateRoutes() {
  return (
    <ProtectRoutes>
      <Routes>
        <Route path="" element />
      </Routes>
    </ProtectRoutes>
  );
}

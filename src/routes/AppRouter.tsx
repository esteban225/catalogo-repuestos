import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRourter() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Rutas publicas*/}
        <Route path="/*" element={<PublicRoutes />} />
        {/*Rutas privadas*/}
        <Route path="/app/*" element={<PrivateRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

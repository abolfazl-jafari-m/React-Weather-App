import { Route, Routes } from "react-router";
import MainPage from "../Pages/MainPage/MainPage.tsx";
import LoginPage from "../Pages/Login/LoginPage.tsx";
import ProtectedRoutes from "./ProtectedRoutes.tsx";

function Router() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path={"/"} element={<MainPage />} />
      </Route>
      <Route path={"/login"} element={<LoginPage />} />
    </Routes>
  );
}

export default Router;

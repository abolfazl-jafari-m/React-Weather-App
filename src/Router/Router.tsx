import {Route, Routes} from "react-router";
import MainPage from "../Pages/MainPage/MainPage.tsx";
import LoginPage from "../Pages/Login/LoginPage.tsx";


function Router() {
    return (
        <Routes>
            <Route path={"/"} element={<MainPage />} />
            <Route path={"/login"} element={<LoginPage/>} />
        </Routes>
    );
}

export default Router;
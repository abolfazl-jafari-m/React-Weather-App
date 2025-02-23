import {Route, Routes} from "react-router";
import MainPage from "../Pages/MainPage/MainPage.tsx";


function Router() {
    return (
        <Routes>
            <Route path={"/"} element={<MainPage />} />
        </Routes>
    );
}

export default Router;
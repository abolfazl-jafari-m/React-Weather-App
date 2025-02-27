import LoginForm from "../../Components/Login/LoginForm/LoginForm.tsx";
import RegisterForm from "../../Components/Login/RegisterForm/RegisterForm.tsx";
import Overlay from "../../Components/Login/Overlay/Overlay.tsx";
import {LoginProvider} from "../../Context/LoginContext.tsx";
import {Toaster} from "react-hot-toast";

function LoginPage() {
    return (
        <LoginProvider>
            <div
                className={"w-full h-screen bg-[url(src/assets/images/login-wallpaper.jpg)] bg-no-repeat bg-cover bg-center flex relative"}>
                <div className={"w-1/2 flex items-center justify-center h-full"}>
                    <LoginForm/>
                </div>
                <div className={"w-1/2 flex items-center justify-center h-full"}>
                    <RegisterForm/>
                </div>
                <Overlay/>
            </div>
            <Toaster position={"top-center"} />
        </LoginProvider>
    );
}

export default LoginPage;
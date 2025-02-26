import Input from "../../Base/Input/Input.tsx";
import {motion} from "motion/react";
import {FormEvent, useContext, useState} from "react";
import {LoginContext, LoginContextInterface} from "../../../Context/LoginContext.tsx";
import {REGEX_EMAIL} from "../../../Constants/Constants.ts";
import {login} from "../../../Services/User.ts";
import useLocalStorage from "../../../Hooks/useLocalStorage/useLocalStorage.ts";
import {useNavigate} from "react-router";


function LoginForm() {
    const {setIsLogin} = useContext(LoginContext) as LoginContextInterface
    const [errors, setErrors] = useState({email: "", password: ""})

    const [, setToken] = useLocalStorage("token", "");
    const navigate = useNavigate();

    const validation = (email: string, password: string) => {
        const newErrors = {email: "", password: ""}
        if (email === "") {
            newErrors.email = "Please Enter Your Email"
        } else if (!REGEX_EMAIL.test(email)) {
            newErrors.email = "Please Enter Valid Email"
        }
        if (password === "") {
            newErrors.password = "Please Enter Your Password"
        }
        setErrors(newErrors);
        return newErrors;

    }

    const loginHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {email, password} = e.target as HTMLFormElement;
        const errors = validation(email.value, password.value)
        if (Object.values(errors).every(item => item === "")) {
            login(email.value, password.value)
                .then((res) => {
                    setToken(res.accessToken);
                    navigate("/");
                });
        }
    }
    return (
        <div
            className={"flex flex-col gap-10 items-center w-2/3 bg-gray-950/70 backdrop-blur-xl backdrop-brightness-50 rounded-lg shadow-black shadow-lg  p-5 font-fuzzy "}>
            <h2 className={"font-bold text-4xl text-white"}>Login</h2>
            <form onSubmit={(e: FormEvent<HTMLFormElement>) => loginHandler(e)}
                  className={"w-full flex flex-col gap-10"}>
                <div className={"flex flex-col gap-2"}>
                    <div
                        className={"flex flex-col gap-2 bg-zinc-900/25 has-focus:bg-zinc-950/40 text-white border-2 border-gray-800/50 transition ease-linear duration-200 p-2 has-focus:border-black rounded-md"}>
                        <label className={"text-lg uppercase"}>username or email :</label>
                        <Input type={"text"} className={"bg-transparent py-1 px-3 rounded-md outline-none"}
                               placeholder={"Please Enter Your Email"} name={"email"}/>
                    </div>
                    <div className={"text-xs text-red-400 tracking-tighter px-2 min-h-7 "}>
                        {errors.email}
                    </div>
                </div>
                <div className={"flex flex-col gap-2"}>
                    <div
                        className={"flex flex-col gap-2 bg-zinc-900/25 has-focus:bg-zinc-950/40 text-white border-2 border-gray-800/50 transition ease-linear duration-200 p-2 has-focus:border-black rounded-md"}>
                        <label className={"text-lg uppercase"}>Password :</label>
                        <Input type={"password"} className={"bg-transparent py-1 px-3 rounded-md outline-none"}
                               placeholder={"Your Password..."} name={"password"}/>
                    </div>
                    <div className={"text-xs text-red-400 tracking-tighter px-2 min-h-8"}>
                        {errors.password}
                    </div>
                </div>

                <motion.button initial={{width: '50%'}} whileHover={{width: "80%"}}
                               className={"py-2 self-center px-8 rounded-xl bg-white/60 shadow-lg shadow-black text-black font-bold cursor-pointer hover:bg-zinc-700  hover:text-white transition ease-in duration-200 "}
                               type={"submit"}

                >Login
                </motion.button>

            </form>
            <div className={"text-xs text-white tracking-tight opacity-70"}>You not member yet ? <span
                className={"text-lg opacity-100 underline cursor-pointer"}
                onClick={() => setIsLogin(false)}>Sign Up</span>
            </div>
        </div>
    );
}

export default LoginForm;
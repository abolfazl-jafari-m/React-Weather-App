import Input from "../../Base/Input/Input.tsx";
import {motion} from "motion/react";
import {FormEvent, useContext, useState} from "react";
import {LoginContext, LoginContextInterface} from "../../../Context/LoginContext.tsx";
import {REGEX_EMAIL, REGEX_PASSWORD} from "../../../Constants/Constants.ts";
import {register} from "../../../Services/User.ts";
import useLocalStorage from "../../../Hooks/useLocalStorage/useLocalStorage.ts";
import {useNavigate} from "react-router";
import toast from "react-hot-toast";
import {FaEye} from "react-icons/fa";
import {FiEyeOff} from "react-icons/fi";


function RegisterForm() {
    const {setIsLogin} = useContext(LoginContext) as LoginContextInterface
    const [errors, setErrors] = useState({email: "", password: "", rePassword: ""});
    const [, setToken] = useLocalStorage("token", []);
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState<boolean>(false);


    const validation = (email: string, password: string, rePassword: string) => {
        const newErrors = {email: "", password: "", rePassword: ""}
        if (email === "") {
            newErrors.email = "Please Enter Your Email"
        } else if (!REGEX_EMAIL.test(email)) {
            newErrors.email = "Please Enter a Valid Email"
        }

        if (password === "") {
            newErrors.password = "Please Enter a Password"
        } else if (!REGEX_PASSWORD.test(password)) {
            newErrors.password = "Your Password have to at least 8  at least 8 characters & One digits & Special characters"
        } else if (password !== rePassword) {
            newErrors.password = "Passwords Not the Same"
        }

        if (rePassword === "") {
            newErrors.rePassword = "Please Enter a Password"
        } else if (!REGEX_PASSWORD.test(rePassword)) {
            newErrors.rePassword = "Your Password have to at least 8  at least 8 characters & One digits & Special characters"
        } else if (rePassword !== password) {
            newErrors.rePassword = "Passwords Not the Same"
        }

        setErrors(newErrors);

        return newErrors;
    }


    const handleRegister = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {email, password, rePassword} = e.target as HTMLFormElement;
        const errors = validation(email.value, password.value, rePassword.value);
        if (Object.values(errors).every(item => item === "")) {
            const loadingToast = toast.loading("loading...", {
                style: {width: '320px'}
            })
            register(email.value, password.value).then((res) => {
                setToken(res.accessToken)
                toast.success("Register was Successful", {
                    id: loadingToast
                })
                navigate("/");
            }).finally(() => {
                toast.remove(loadingToast)
            })
        }


    }

    return (
        <div
            className={"flex flex-col gap-10 items-center max-lg:w-full max-lg:h-full max-lg:rounded-none w-2/3 bg-gray-950/70 backdrop-blur-xl backdrop-brightness-50 rounded-lg shadow-black shadow-lg  p-5 font-fuzzy "}>
            <h2 className={"font-bold text-4xl text-white"}>Register</h2>
            <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleRegister(e)}
                  className={"w-full flex flex-col gap-7"}>
                <div className={"flex flex-col gap-2"}>
                    <div
                        className={"flex flex-col gap-2 bg-zinc-900/25 has-focus:bg-zinc-950/40 text-white border-2 border-gray-800/50 transition ease-linear duration-200 p-2 has-focus:border-black rounded-md"}>
                        <label className={"text-lg uppercase"}>email :</label>
                        <Input type={"text"} className={"bg-transparent py-1 px-3 rounded-md outline-none"}
                               placeholder={"Please Enter Your Name"} name={"email"}/>
                    </div>
                    <div className={"text-xs text-red-400 tracking-tighter px-2 min-h-6"}>
                        {errors.email}
                    </div>
                </div>

                <div className={"flex flex-col gp-2"}>
                    <div
                        className={"flex flex-col gap-2 bg-zinc-900/25 has-focus:bg-zinc-950/40 text-white border-2 border-gray-800/50 transition ease-linear duration-200 p-2 has-focus:border-black rounded-md"}>
                        <label className={"text-lg uppercase"}>Password :</label>
                        <div className={"flex items-center w-full"}>
                            <Input type={!showPass ? "password" : "text"}
                                   className={"bg-transparent flex-1 py-1 px-3 rounded-md outline-none"}
                                   placeholder={"Your Password..."} name={"password"}/>
                            <div onClick={() => setShowPass(!showPass)} className={"px-2"}>
                                {
                                    !showPass ? <FaEye/> : <FiEyeOff className={"text-white"}/>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={"text-xs text-red-400 tracking-tighter px-2 min-h-6"}>
                        {errors.password}
                    </div>
                </div>

                <div className={"flex flex-col gap-2"}>
                    <div
                        className={"flex flex-col gap-2 bg-zinc-900/25 has-focus:bg-zinc-950/40 text-white border-2 border-gray-800/50 transition ease-linear duration-200 p-2 has-focus:border-black rounded-md"}>
                        <label className={"text-lg uppercase"}>Repeat Password :</label>
                        <Input type={!showPass ? "password" : "text"}
                               className={"bg-transparent py-1 px-3 rounded-md outline-none"}
                               placeholder={"Repeat Your Password..."} name={"rePassword"}/>
                    </div>
                    <div className={"text-xs text-red-400 tracking-tighter px-2 min-h-6"}>
                        {errors.rePassword}
                    </div>
                </div>

                <motion.button initial={{width: '50%'}} whileHover={{width: "80%"}}
                               className={"py-2 self-center px-8 rounded-xl bg-white/60 shadow-lg shadow-black text-black font-bold cursor-pointer hover:bg-zinc-700  hover:text-white transition ease-in duration-200 "}
                               type={"submit"}
                >Register
                </motion.button>

            </form>
            <div className={"text-xs text-white tracking-tight opacity-70"}>You already have account <span
                className={"text-lg opacity-100 underline cursor-pointer"}
                onClick={() => setIsLogin(true)}>Login</span></div>
        </div>
    );
}

export default RegisterForm;
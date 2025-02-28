// import Input from "../../Base/Input/Input.tsx";
import {motion} from "motion/react";
import {useContext, useState} from "react";
import {LoginContext, LoginContextInterface} from "../../../Context/LoginContext.tsx";
import {REGEX_EMAIL, REGEX_PASSWORD} from "../../../Constants/Constants.ts";
import {login} from "../../../Services/User.ts";
import useLocalStorage from "../../../Hooks/useLocalStorage/useLocalStorage.ts";
import {useNavigate} from "react-router";
import toast from "react-hot-toast";
import {FaEye} from "react-icons/fa";
import {FiEyeOff} from "react-icons/fi";
import {SubmitHandler, useForm} from "react-hook-form";

type LoginFormType = {
    email: string,
    password: string
}

function LoginForm() {
    const {setIsLogin} = useContext(LoginContext) as LoginContextInterface
    const [showPass, setShowPass] = useState<boolean>(false);
    const {register, handleSubmit, formState: {errors}} = useForm<LoginFormType>();
    const [, setToken] = useLocalStorage("token", "");
    const navigate = useNavigate();


    const loginHandler: SubmitHandler<LoginFormType> = (data) => {
        const loadingToast = toast.loading("Please Wait...", {
            style: {width: "320px"}
        });
        login(data.email, data.password)
            .then((res) => {
                setToken(res.accessToken);
                toast.success("login was Successful", {
                    id: loadingToast
                })
                navigate("/");
            }).finally(() => {
            toast.remove(loadingToast)
        });
    }
    return (
        <div
            className={"flex flex-col gap-10 items-center max-lg:w-full max-lg:h-full max-lg:rounded-none w-2/3 bg-gray-950/70 backdrop-blur-xl backdrop-brightness-50 rounded-lg shadow-black shadow-lg  p-5 font-fuzzy "}>
            <h2 className={"font-bold text-4xl text-white"}>Login</h2>
            <form onSubmit={handleSubmit(loginHandler)}
                  className={"w-full flex flex-col gap-10"}>
                <div className={"flex flex-col gap-2"}>
                    <div
                        className={"flex flex-col gap-2 bg-zinc-900/25 has-focus:bg-zinc-950/40 text-white border-2 border-gray-800/50 transition ease-linear duration-200 p-2 has-focus:border-black rounded-md"}>
                        <label className={"text-lg uppercase"}>username or email :</label>
                        <input type={"text"} className={"bg-transparent py-1 px-3 rounded-md outline-none"}
                               placeholder={"Please Enter Your Email"} {...register("email", {
                            required: "This Field is Required",
                            pattern: {
                                value: REGEX_EMAIL,
                                message: "Your email is Invalid "
                            }
                        })}/>
                    </div>
                    <div className={"text-xs text-red-400 tracking-tighter px-2 min-h-7 "}>
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                </div>
                <div className={"flex flex-col gap-2"}>
                    <div
                        className={"flex flex-col gap-2 bg-zinc-900/25 has-focus:bg-zinc-950/40 text-white border-2 border-gray-800/50 transition ease-linear duration-200 p-2 has-focus:border-black rounded-md"}>
                        <label className={"text-lg uppercase"}>Password :</label>
                        <div className={"flex items-center w-full"}>
                            <input type={!showPass ? "password" : "text"}
                                   className={"bg-transparent py-1 px-3 flex-1 rounded-md outline-none"}
                                   placeholder={"Your Password..."} {...register("password", {
                                pattern: {
                                    value: REGEX_PASSWORD,
                                    message: "Your password have to Contains 8 character & digits & Special Letter"
                                }, required: "This field is Required"
                            })}/>
                            <div onClick={() => setShowPass(!showPass)} className={"px-2"}>
                                {
                                    !showPass ? <FaEye/> : <FiEyeOff className={"text-white"}/>
                                }
                            </div>
                        </div>

                    </div>
                    <div className={"text-xs text-red-400 tracking-tighter px-2 min-h-8"}>
                        {errors.password && <p>{errors.password.message}</p>}
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